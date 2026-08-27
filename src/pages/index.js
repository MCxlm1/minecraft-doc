import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="首页" description="Minecraft 脚本 API 文档入口">
      <header className={styles.heroBanner}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a className="button button--primary button--lg" href="/minecraft-doc/stable-rc/">正式版 (Stable)</a>
            <a className="button button--secondary button--lg" href="/minecraft-doc/preview-rc/">预览版 (Preview)</a>
            <a className="button button--info button--lg" href="/minecraft-doc/legacy/">旧版 (Legacy)</a>
          </div>
        </div>
      </header>
      <main>
        <section className="container margin--vert--lg">
          <div className="row">
            <div className="col">
              <h2>📘 正式版 (Stable)</h2>
              <p>基于最新正式版 @minecraft 模块生成，包含 rc 和 beta 两个口味。</p>
              <a href="/minecraft-doc/stable-rc/">进入 →</a>
            </div>
            <div className="col">
              <h2>🔬 预览版 (Preview)</h2>
              <p>包含最新预览版特性，同样提供 rc 和 beta 版本。</p>
              <a href="/minecraft-doc/preview-rc/">进入 →</a>
            </div>
            <div className="col">
              <h2>📜 旧版 (Legacy)</h2>
              <p>旧版 mojang-minecraft 等模块文档。</p>
              <a href="/minecraft-doc/legacy/">进入 →</a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}