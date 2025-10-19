// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '1wairesdIndustries',
  tagline: 'Ukrainian development studio for Minecraft',
  favicon: 'img/1wairesdindustries.ico',

  url: 'https://1wairesd.github.io',
  baseUrl: '/1wairesdIndustriesWiki/',
  organizationName: '1wairesd',
  projectName: '1wairesdIndustriesWiki',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ua', 'ru'],
    localeConfigs: {
      en: { htmlLang: 'en-US' },
      ua: { htmlLang: 'uk-UA', label: 'Українська' },
      ru: { htmlLang: 'ru-RU' },
    },
  },

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'ignore',
    },
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/docs',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          lastVersion: 'current',
          includeCurrentVersion: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/1wairesdindustries.png',
    navbar: {
      title: '1wairesdIndustries',
      logo: { alt: '1wairesdIndustries Logo', src: 'img/1wairesdindustries.png' },
      items: [
        { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Docs' },
        { type: 'localeDropdown' },
      ],
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            { label: 'WebSite', href: 'https://1wairesd.xyz' },
            { label: 'Discord', href: 'https://discord.gg/example' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: '1wairesd GitHub', href: 'https://github.com/1wairesd' },
            { label: 'Wiki GitHub', href: 'https://github.com/1wairesd/1wairesdIndustriesWiki' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 1wairesdIndustries`,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    prism: {
      theme: prismThemes.vsLight,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ['java', 'gradle', 'yaml', 'xml-doc'],
      magicComments: [
        { className: 'theme-code-block-highlighted-line', line: 'highlight-next-line', block: { start: 'highlight-start', end: 'highlight-end' } },
        { className: 'code-block-error-line', line: 'highlight-next-line-error' },
      ],
    },
    mermaid: { options: { fontSize: 24 } },
  },

  future: {},
};

module.exports = config;
