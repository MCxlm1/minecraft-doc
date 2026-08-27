/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: 'Minecraft 脚本 API 文档',
  tagline: '由 TypeDoc 生成，Docusaurus 驱动入口',
  url: 'https://MCxlm1.github.io',
  baseUrl: '/minecraft-doc/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'MCxlm1',
  projectName: 'minecraft-doc',
  trailingSlash: false,
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Minecraft API 文档',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/MCxlm1/minecraft-doc',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            { label: '正式版 (Stable)', to: '/stable-rc/' },
            { label: '预览版 (Preview)', to: '/preview-rc/' },
            { label: '旧版 (Legacy)', to: '/legacy/' },
          ],
        },
        {
          title: '更多',
          items: [
            { label: 'GitHub', href: 'https://github.com/MCxlm1/minecraft-doc' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MCxlm1. Built with Docusaurus.`,
    },
  },
  outDir: './_out',
};