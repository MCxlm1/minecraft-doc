import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import untranslated from '../../generated/untranslated.json';

const symbolLabel = (rel) => rel.replace(/\.md$/, '').split('/').pop();

export default function Untranslated() {
  const totalMissing = untranslated.reduce((s, x) => s + x.missing.length, 0);
  const totalExpired = untranslated.reduce((s, x) => s + x.expired.length, 0);

  return (
    <Layout title="未翻译清单" description="未翻译与翻译失效的符号">
      <main className="untranslated-main">
        <h1>未翻译 / 翻译失效清单</h1>
        <p>
          未翻译（使用英文源）：<strong>{totalMissing}</strong> 项　|　
          翻译失效（源已变化，已隐藏，等待重新上传）：<strong className="expired-count">{totalExpired}</strong> 项
        </p>

        {untranslated.length === 0 && <p>🎉 当前没有未翻译或失效的内容。</p>}

        {untranslated.map((x) => (
          <section key={`${x.versionId}/${x.moduleId}`} className="ut-version">
            <h2>
              <Link to={`/docs/${x.versionId}/${x.moduleId}/`}>
                {x.versionTitle} / {x.moduleTitle}
              </Link>
            </h2>

            {x.expired.length > 0 && (
              <div className="ut-expired">
                <h3 className="ut-sub">⚠️ 翻译失效（已隐藏，源内容已变化）</h3>
                <ul>
                  {x.expired.map((rel) => (
                    <li key={rel} className="expired-item">
                      <span className="expired-badge">失效</span> {symbolLabel(rel)}{' '}
                      <code className="ut-path">{rel}</code>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {x.missing.length > 0 && (
              <div className="ut-missing">
                <h3 className="ut-sub">未翻译（当前显示英文源）</h3>
                <ul>
                  {x.missing.map((rel) => (
                    <li key={rel}>
                      {symbolLabel(rel)} <code className="ut-path">{rel}</code>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        ))}
      </main>
    </Layout>
  );
}