import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="hero hero--primary" style={{ padding: '4rem 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p style={{ marginBottom: '2rem' }}>
          由 TypeDoc 原生解析 `@minecraft/*` 的 index.d.ts 生成。选择一个版本进入：
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', margin: '1rem 0' }}>
          {/* 正式版卡片 */}
          <Link
            to="/stable/"
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              gap: '0.3rem',
              padding: '1.1rem 1.3rem',
              minWidth: '240px',
              border: '1px solid var(--ifm-color-primary)',
              borderRadius: '12px',
              textDecoration: 'none',
              color: 'inherit',
              backgroundColor: 'var(--ifm-background-surface-color)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <span style={{ fontWeight: 700, fontSize: '1.05rem' }}>正式版 (Stable)</span>
            <span style={{ color: 'var(--ifm-color-emphasis-600)', fontSize: '0.85rem' }}>Minecraft 1.26.44 ｜ 12 个模块</span>
          </Link>

          {/* Preview 卡片 */}
          <Link
            to="/preview/"
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              gap: '0.3rem',
              padding: '1.1rem 1.3rem',
              minWidth: '240px',
              border: '1px solid #e11d48',
              borderRadius: '12px',
              textDecoration: 'none',
              color: 'inherit',
              backgroundColor: 'var(--ifm-background-surface-color)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(225,29,72,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <span style={{ fontWeight: 700, fontSize: '1.05rem' }}>
              Preview
              <span style={{ color: '#e11d48', border: '1px solid #e11d48', borderRadius: '4px', padding: '0 5px', fontSize: '0.7rem', marginLeft: '6px' }}>@beta</span>
            </span>
            <span style={{ color: 'var(--ifm-color-emphasis-600)', fontSize: '0.85rem' }}>Minecraft 1.26.50-preview.26 ｜ 12 个模块</span>
          </Link>

          {/* Legacy 卡片 */}
          <Link
            to="/legacy/"
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              gap: '0.3rem',
              padding: '1.1rem 1.3rem',
              minWidth: '240px',
              border: '1px solid #6b7280',
              borderRadius: '12px',
              textDecoration: 'none',
              color: 'inherit',
              backgroundColor: 'var(--ifm-background-surface-color)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <span style={{ fontWeight: 700, fontSize: '1.05rem' }}>旧版本脚本模块 (Legacy)</span>
            <span style={{ color: 'var(--ifm-color-emphasis-600)', fontSize: '0.85rem' }}>@types/mojang-minecraft ｜ 2 个模块</span>
          </Link>
        </div>

        {/* 其他入口卡片 */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', margin: '1rem 0' }}>
          <Link
            to="/molang/"
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              gap: '0.3rem',
              padding: '1.1rem 1.3rem',
              minWidth: '200px',
              border: '1px solid var(--ifm-color-emphasis-300)',
              borderRadius: '12px',
              textDecoration: 'none',
              color: 'inherit',
              backgroundColor: 'var(--ifm-background-surface-color)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.06)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <span style={{ fontWeight: 700, fontSize: '1.05rem' }}>MoLang 文档</span>
            <span style={{ color: 'var(--ifm-color-emphasis-600)', fontSize: '0.85rem' }}>查询函数与数学函数</span>
          </Link>

          <Link
            to="/changelog/sapi/"
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              gap: '0.3rem',
              padding: '1.1rem 1.3rem',
              minWidth: '200px',
              border: '1px solid var(--ifm-color-emphasis-300)',
              borderRadius: '12px',
              textDecoration: 'none',
              color: 'inherit',
              backgroundColor: 'var(--ifm-background-surface-color)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.06)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <span style={{ fontWeight: 700, fontSize: '1.05rem' }}>SAPI Changelog</span>
            <span style={{ color: 'var(--ifm-color-emphasis-600)', fontSize: '0.85rem' }}>API 版本更新记录</span>
          </Link>

          <Link
            to="/downloads/"
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              gap: '0.3rem',
              padding: '1.1rem 1.3rem',
              minWidth: '200px',
              border: '1px solid var(--ifm-color-emphasis-300)',
              borderRadius: '12px',
              textDecoration: 'none',
              color: 'inherit',
              backgroundColor: 'var(--ifm-background-surface-color)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.06)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <span style={{ fontWeight: 700, fontSize: '1.05rem' }}>下载生成的文档</span>
            <span style={{ color: 'var(--ifm-color-emphasis-600)', fontSize: '0.85rem' }}>合并 d.ts 与 BDS 元数据</span>
          </Link>

          <Link
            to="/untranslated.html"
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              gap: '0.3rem',
              padding: '1.1rem 1.3rem',
              minWidth: '200px',
              border: '1px solid #e11d48',
              borderRadius: '12px',
              textDecoration: 'none',
              color: 'inherit',
              backgroundColor: 'var(--ifm-background-surface-color)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(225,29,72,0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <span style={{ fontWeight: 700, fontSize: '1.05rem' }}>未翻译 / 翻译失效清单</span>
            <span style={{ color: 'var(--ifm-color-emphasis-600)', fontSize: '0.85rem' }}>查看待翻译与失效项</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Minecraft Bedrock 脚本 API 文档站点"
    >
      <HomepageHeader />
    </Layout>
  );
}
