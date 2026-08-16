/**
 * typedoc-gen.mjs — 用 typedoc JS API 生成一个站点的 HTML（参考 sapi-typedoc）
 *  - 从 tsconfig 读 typedocOptions（entryPoints/name/lang/customCss 等）
 *  - convert 后 hook：清空 sources（删除 "Defined in"）
 *  - generateDocs 输出到 outDir
 */
import * as TypeDoc from 'typedoc';

export async function generateTypedocSite({ tsconfigPath, outDir }) {
  const app = await TypeDoc.Application.bootstrapWithPlugins(
    {
      tsconfig: tsconfigPath,
      modifierTags: [...TypeDoc.OptionDefaults.modifierTags, '@rc'],
    },
    [new TypeDoc.TSConfigReader()]
  );

  const project = await app.convert();
  if (!project) {
    throw new Error(`typedoc convert failed for ${tsconfigPath}`);
  }

  // hook: 删除 "Defined in"（清空 sources）
  for (const refl of Object.values(project.reflections)) {
    if (refl.sources) refl.sources = undefined;
  }

  await app.generateDocs(project, outDir);
  return project;
}
