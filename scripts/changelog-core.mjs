// changelog-core.mjs - 版本快照与 diff 核心逻辑
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { Project, SyntaxKind } from 'ts-morph';

export const HISTORY_DIR = path.resolve(process.cwd(), 'history');
export const SNAPSHOTS_DIR = path.join(HISTORY_DIR, 'snapshots');
export const CHANGELOGS_DIR = path.join(HISTORY_DIR, 'changelogs');
export const MANIFEST_PATH = path.join(HISTORY_DIR, 'manifest.json');

export function sha256(s) {
  return crypto.createHash('sha256').update(s, 'utf8').digest('hex');
}

export function readJson(p) {
  try {
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch {
    return null;
  }
}

export function writeJson(p, obj) {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, JSON.stringify(obj, null, 2));
}

export function ensureDirs() {
  fs.mkdirSync(SNAPSHOTS_DIR, { recursive: true });
  fs.mkdirSync(CHANGELOGS_DIR, { recursive: true });
}

// 提取单个 d.ts 文件的符号树
export function extractSymbols(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const project = new Project({ skipAddingFilesFromTsConfig: true, skipFileDependencyResolution: true });
  const sf = project.createSourceFile('temp.d.ts', content, { overwrite: true });
  const symbols = [];

  function typeToString(t) {
    return t ? t.getText() : '';
  }

  function extractMembers(node) {
    const members = [];
    for (const member of node.getMembers?.() || []) {
      const kind = member.getKindName();
      if (['MethodSignature', 'MethodDeclaration', 'PropertySignature', 'PropertyDeclaration', 'ConstructorDeclaration', 'GetAccessor', 'SetAccessor', 'EnumMember'].includes(kind)) {
        members.push({
          kind,
          name: member.getName?.() || member.getSymbol()?.getName() || '',
          signature: member.getText().split('\n')[0].trim(),
          type: member.getType ? typeToString(member.getType()) : ''
        });
      }
    }
    return members;
  }

  for (const stmt of sf.getStatements()) {
    const kind = stmt.getKindName();
    if (['ClassDeclaration', 'InterfaceDeclaration', 'EnumDeclaration', 'FunctionDeclaration', 'TypeAliasDeclaration', 'NamespaceDeclaration', 'ModuleDeclaration'].includes(kind)) {
      const name = stmt.getName?.() || stmt.getSymbol()?.getName() || '';
      if (!name) continue;
      const symbol = {
        kind,
        name,
        signature: stmt.getText().split('\n')[0].trim(),
        members: extractMembers(stmt),
        heritage: stmt.getHeritageClauses?.().map(h => h.getText()) || []
      };
      symbols.push(symbol);
    }
  }
  return symbols;
}

// 扫描 registry 下某个模块的 d.ts 文件
export function scanRegistryModule(registryDir, moduleName, flavor) {
  const basePath = path.join(registryDir, moduleName, flavor, 'node_modules', '@minecraft', moduleName);
  if (!fs.existsSync(basePath)) return null;
  const result = { files: {} };
  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (entry.name.endsWith('.d.ts')) {
        const rel = path.relative(basePath, full).split(path.sep).join('/');
        const content = fs.readFileSync(full, 'utf8');
        result.files[rel] = {
          sha256: sha256(content),
          size: Buffer.byteLength(content),
          symbols: extractSymbols(full)
        };
      }
    }
  }
  walk(basePath);
  return result;
}

// 生成完整快照
export function generateSnapshot(mcVersions, registryDir) {
  const snapshot = {
    timestamp: new Date().toISOString(),
    versions: {}
  };
  for (const [mcVer, entry] of Object.entries(mcVersions)) {
    if (mcVer === 'comment') continue;
    const key = entry.key;
    snapshot.versions[mcVer] = {
      key,
      type: entry.type || 'stable',
      modules: {}
    };
    for (const [mod, verInfo] of Object.entries(entry.modules || {})) {
      snapshot.versions[mcVer].modules[mod] = {
        rc: verInfo.rc || null,
        beta: verInfo.beta || null,
        rcFiles: verInfo.rc ? scanRegistryModule(registryDir, mod, 'rc') : null,
        betaFiles: verInfo.beta ? scanRegistryModule(registryDir, mod, 'beta') : null
      };
    }
  }
  return snapshot;
}

// 文件级 diff
export function diffFiles(oldFiles, newFiles) {
  const added = [];
  const removed = [];
  const modified = [];
  const oldKeys = new Set(Object.keys(oldFiles || {}));
  const newKeys = new Set(Object.keys(newFiles || {}));
  for (const f of newKeys) {
    if (!oldKeys.has(f)) added.push(f);
    else if (oldFiles[f].sha256 !== newFiles[f].sha256) modified.push(f);
  }
  for (const f of oldKeys) {
    if (!newKeys.has(f)) removed.push(f);
  }
  return { added, removed, modified };
}

// 符号级 diff
export function diffSymbols(oldSymbols, newSymbols) {
  const added = [];
  const removed = [];
  const modified = [];
  const oldMap = new Map();
  const newMap = new Map();
  for (const s of oldSymbols || []) oldMap.set(s.kind + ':' + s.name, s);
  for (const s of newSymbols || []) newMap.set(s.kind + ':' + s.name, s);

  const oldKeys = new Set(oldMap.keys());
  const newKeys = new Set(newMap.keys());
  for (const k of newKeys) {
    if (!oldKeys.has(k)) {
      added.push(newMap.get(k));
    } else {
      const o = oldMap.get(k);
      const n = newMap.get(k);
      const memberDiff = diffMembers(o.members || [], n.members || []);
      if (o.signature !== n.signature || memberDiff.added.length || memberDiff.removed.length || memberDiff.modified.length) {
        modified.push({ old: o, new: n, memberDiff });
      }
    }
  }
  for (const k of oldKeys) {
    if (!newKeys.has(k)) removed.push(oldMap.get(k));
  }
  return { added, removed, modified };
}

// 成员级 diff
function diffMembers(oldMembers, newMembers) {
  const added = [];
  const removed = [];
  const modified = [];
  const oldMap = new Map(oldMembers.map(m => [m.kind + ':' + m.name + ':' + m.signature, m]));
  const newMap = new Map(newMembers.map(m => [m.kind + ':' + m.name + ':' + m.signature, m]));
  const oldKeys = new Set(oldMap.keys());
  const newKeys = new Set(newMap.keys());
  for (const k of newKeys) {
    if (!oldKeys.has(k)) added.push(newMap.get(k));
    else if (JSON.stringify(oldMap.get(k)) !== JSON.stringify(newMap.get(k))) modified.push(newMap.get(k));
  }
  for (const k of oldKeys) {
    if (!newKeys.has(k)) removed.push(oldMap.get(k));
  }
  return { added, removed, modified };
}

// 计算两个快照的完整 diff
export function diffSnapshots(oldSnap, newSnap) {
  const changes = [];
  for (const [mcVer, newVer] of Object.entries(newSnap.versions)) {
    const oldVer = oldSnap.versions?.[mcVer];
    if (!oldVer) {
      changes.push({ mcVersion: mcVer, type: 'version-added', modules: newVer.modules });
      continue;
    }
    for (const [mod, newMod] of Object.entries(newVer.modules)) {
      const oldMod = oldVer.modules?.[mod];
      if (!oldMod) {
        changes.push({ mcVersion: mcVer, module: mod, type: 'module-added' });
        continue;
      }
      for (const flavor of ['rc', 'beta']) {
        const oldFiles = oldMod[flavor + 'Files'];
        const newFiles = newMod[flavor + 'Files'];
        if (!newFiles) continue;
        const fileDiff = diffFiles(oldFiles?.files, newFiles?.files);
        if (fileDiff.added.length || fileDiff.removed.length || fileDiff.modified.length) {
          const moduleChanges = { mcVersion: mcVer, module: mod, flavor, type: 'module-changed', fileDiff, symbolChanges: [] };
          for (const file of fileDiff.modified) {
            const oldSymbols = oldFiles?.files?.[file]?.symbols || [];
            const newSymbols = newFiles?.files?.[file]?.symbols || [];
            const symbolDiff = diffSymbols(oldSymbols, newSymbols);
            if (symbolDiff.added.length || symbolDiff.removed.length || symbolDiff.modified.length) {
              moduleChanges.symbolChanges.push({ file, ...symbolDiff });
            }
          }
          changes.push(moduleChanges);
        }
      }
    }
  }
  return changes;
}

// 读取 manifest
export function loadManifest() {
  ensureDirs();
  return readJson(MANIFEST_PATH) || { entries: [] };
}

// 保存 manifest
export function saveManifest(manifest) {
  ensureDirs();
  writeJson(MANIFEST_PATH, manifest);
}
