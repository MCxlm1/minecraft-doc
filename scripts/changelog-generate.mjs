#!/usr/bin/env node
// changelog-generate.mjs - 检测版本变化并生成 changelog 快照与 diff
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  generateSnapshot,
  diffSnapshots,
  loadManifest,
  saveManifest,
  ensureDirs,
  SNAPSHOTS_DIR,
  CHANGELOGS_DIR
} from './changelog-core.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const MC_VERSIONS_PATH = path.join(ROOT, 'minecraft-versions.json');
const REGISTRY_DIR = path.join(ROOT, 'registry');

function main() {
  ensureDirs();
  const mcVersions = JSON.parse(fs.readFileSync(MC_VERSIONS_PATH, 'utf8'));
  const newSnapshot = generateSnapshot(mcVersions, REGISTRY_DIR);
  const manifest = loadManifest();

  // 找到最近的快照
  const lastEntry = manifest.entries[manifest.entries.length - 1];
  let oldSnapshot = null;
  if (lastEntry && fs.existsSync(lastEntry.snapshotPath)) {
    oldSnapshot = JSON.parse(fs.readFileSync(lastEntry.snapshotPath, 'utf8'));
  }

  // 检查是否有版本变化
  const versionKey = Object.keys(mcVersions).filter(k => k !== 'comment').map(k => `${k}:${Object.entries(mcVersions[k].modules || {}).map(([m, v]) => `${m}=${v.rc}/${v.beta}`).join(',')}`).join('|');
  const lastVersionKey = lastEntry?.versionKey || '';

  if (versionKey === lastVersionKey) {
    console.log('版本未变化，跳过 changelog 生成');
    return;
  }

  // 生成快照文件
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const snapshotId = `snapshot-${timestamp}`;
  const snapshotPath = path.join(SNAPSHOTS_DIR, `${snapshotId}.json`);
  fs.writeFileSync(snapshotPath, JSON.stringify(newSnapshot, null, 2));

  // 计算 diff
  const changes = oldSnapshot ? diffSnapshots(oldSnapshot, newSnapshot) : [{ type: 'initial-build', versions: newSnapshot.versions }];

  // 生成 changelog 记录
  const changelogEntry = {
    id: snapshotId,
    timestamp: newSnapshot.timestamp,
    versionKey,
    snapshotPath,
    previousSnapshotPath: lastEntry?.snapshotPath || null,
    changes
  };

  // 保存 changelog
  const changelogPath = path.join(CHANGELOGS_DIR, `${snapshotId}.json`);
  fs.writeFileSync(changelogPath, JSON.stringify(changelogEntry, null, 2));

  // 更新 manifest
  manifest.entries.push({
    id: snapshotId,
    timestamp: newSnapshot.timestamp,
    versionKey,
    snapshotPath,
    changelogPath,
    summary: summarizeChanges(changes)
  });
  saveManifest(manifest);

  console.log('changelog 已生成:', snapshotId);
  console.log('变更摘要:', JSON.stringify(summarizeChanges(changes), null, 2));
}

function summarizeChanges(changes) {
  const summary = {
    totalModulesChanged: 0,
    totalFilesAdded: 0,
    totalFilesRemoved: 0,
    totalFilesModified: 0
  };
  for (const c of changes) {
    if (c.type === 'module-changed') {
      summary.totalModulesChanged++;
      summary.totalFilesAdded += c.fileDiff.added.length;
      summary.totalFilesRemoved += c.fileDiff.removed.length;
      summary.totalFilesModified += c.fileDiff.modified.length;
    }
  }
  return summary;
}

main();
