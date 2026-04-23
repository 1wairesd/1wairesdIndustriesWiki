// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

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

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ua', 'ru'],
    localeConfigs: {
      en:  { htmlLang: 'en-US', label: 'English' },
      ua:  { htmlLang: 'uk-UA', label: 'Українська' },
      ru:  { htmlLang: 'ru-RU', label: 'Русский' },
    },
  },

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/docs',
          sidebarPath: './sidebars.js',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/1wairesdindustries.png',

    // announcementBar: {
    //   id: 'new_release',
    //   content: '🎉 CommandGuard 2025.04.1 is out! <a href="/docs/CommandGuard/commandguard-intro">Read the docs →</a>',
    //   backgroundColor: '#5b6af0',
    //   textColor: '#ffffff',
    //   isCloseable: true,
    // },

    navbar: {
      title: '1wairesdIndustries',
      logo: {
        alt: '1wairesdIndustries Logo',
        src: 'img/1wairesdindustries.png',
      },
      hideOnScroll: false,
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/1wairesd',
          position: 'right',
          label: 'GitHub',
        },
        { type: 'localeDropdown', position: 'right' },
      ],
    },

    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'CommandGuard', to: '/docs/CommandGuard/commandguard-intro' },
            { label: 'DiscordEngine', to: '/docs/DiscordEngine/discordengine-main' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Website', href: 'https://1wairesd.xyz' },
            { label: 'Discord', href: 'https://discord.gg/example' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'GitHub', href: 'https://github.com/1wairesd' },
            { label: 'Wiki Source', href: 'https://github.com/1wairesd/1wairesdIndustriesWiki' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} 1wairesdIndustries`,
    },

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: ['java', 'yaml'],
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
        {
          className: 'code-block-error-line',
          line: 'error-next-line',
        },
      ],
    },

    mermaid: {
      theme: { light: 'neutral', dark: 'dark' },
      options: { fontSize: 16 },
    },
  },
};

module.exports = config;
