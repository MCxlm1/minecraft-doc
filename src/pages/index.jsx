import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import siteMap from '../../generated/site-map.json';

export default function Home() {
  return (
    <Layout title="首页" description="选择版本与模块">
      <main className="home-main">
        <div className="hero">
          <h1>{siteMap.site.title}</h1>
          <p className="hero-sub">
            由 <code>typedoc</code> 解析 <code>@minecraft/*</code> 的 index.d.ts 生成，
            经 <code>typedoc-plugin-markdown</code> 转 Markdown 后由 Docusaurus 渲染。
            选择一个「版本 → 模块」开始浏览。
          </p>
        </div>

        {siteMap.versions.map((v) => (
          <section key={v.id} className="version-card">
            <h2 className="version-title">
              {v.modules.length > 0 ? (
                <Link to={`/docs/${v.id}/${v.modules[0].id}/`} className="version-link">
                  {v.title}
                </Link>
              ) : (
                v.title
              )}
            </h2>
            <div className="module-grid">
              {v.modules.map((m) => (
                <Link key={m.id} to={`/docs/${v.id}/${m.id}/`} className="module-chip">
                  {m.title}
                </Link>
              ))}
            </div>
          </section>
        ))}

        <p className="hint">
          <Link to="/untranslated">查看未翻译 / 翻译失效清单 →</Link>
        </p>
      </main>
    </Layout>
  );
}