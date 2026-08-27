// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Minecraft @minecraft 类型文档',
  tagline: 'Minecraft Bedrock 脚本 API 文档',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://mcxlm1.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/minecraft-doc/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MCxlm1', // Usually your GitHub org/user name.
  projectName: 'minecraft-doc', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false, // 我们只使用首页
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Minecraft 文档',
        logo: {
          alt: 'Minecraft Logo',
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
              {
                label: '正式版 (Stable)',
                to: '/stable/',
              },
              {
                label: 'Preview',
                to: '/preview/',
              },
              {
                label: '旧版本脚本模块 (Legacy)',
                to: '/legacy/',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/MCxlm1/minecraft-doc',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'MoLang 文档',
                to: '/molang/',
              },
              {
                label: 'SAPI Changelog',
                to: '/changelog/sapi/',
              },
              {
                label: '未翻译清单',
                to: '/untranslated.html',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Minecraft 文档项目. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
