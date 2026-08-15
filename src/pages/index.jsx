import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import siteMap from '../../generated/site-map.json';

export default function Home() {
  return (
    <Layout title="首页" description="选择版本">
      <main className="home-main">
        <div className="hero">
          <h1>{siteMap.site.title}</h1>
          <p className="hero-sub">
            由 <code>typedoc</code> 解析 <code>@minecraft/*</code> 的 index.d.ts 生成，
            经 <code>typedoc-plugin-markdown</code> 转 Markdown 后由 Docusaurus 渲染。
            先选择一个版本，再进入对应模块浏览。
          </p>
        </div>

        <h2 className="versions-title">选择版本</h2>
        <div className="version-grid">
          {siteMap.versions.map((v) => (
            <Link key={v.id} to={`/docs/${v.path}/`} className="version-card">
              <span className="version-name">
                {v.title}
                {v.isBeta && <span className="beta-badge">@beta</span>}
              </span>
              {v.mcVersion && <span className="version-mc">{v.mcVersion}</span>}
              <span className="version-mod-count">{v.modules.length} 个模块</span>
            </Link>
          ))}
        </div>

        <p className="hint">
          <Link to="/untranslated">查看未翻译 / 翻译失效清单 →</Link>
        </p>
      </main>
    </Layout>
  );
}