// @ts-check

const siteConfig = require('./site-config.json');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: siteConfig.site.title || 'Docs',
  tagline: 'Minecraft @minecraft 类型文档（typedoc → Docusaurus）',
  url: 'https://MCxlm1.github.io',
  baseUrl: '/minecraft-doc/',
  organizationName: 'demo',
  projectName: 'docs-site',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'ignore',
  i18n: {
    defaultLocale: siteConfig.site.lang || 'zh-CN',
    locales: [siteConfig.site.lang || 'zh-CN'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: siteConfig.site.title || 'Docs',
      items: [
        { to: '/docs/', label: '文档', position: 'left' },
        { to: '/untranslated', label: '未翻译清单', position: 'left' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '导航',
          items: [
            { label: '文档首页', to: '/docs/' },
            { label: '未翻译清单', to: '/untranslated' },
          ],
        },
      ],
      copyright: `由 typedoc + Docusaurus 自动生成`,
    },
  },
};

module.exports = config;