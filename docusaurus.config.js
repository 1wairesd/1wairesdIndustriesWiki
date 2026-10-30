import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "1wairesd Industries",
  tagline: "Документація плагінів та інструментів для Minecraft",
  favicon: "img/favicon.ico",

  // Production URL (GitHub Pages).
  url: "https://1wairesd.github.io",
  baseUrl: "/1wairesdIndustriesWiki/",

  // GitHub Pages deployment config.
  organizationName: "1wairesd",
  projectName: "1wairesdIndustriesWiki",
  trailingSlash: false,

  onBrokenLinks: "warn",

  // Українська — основна мова. Переклади лежать у i18n/<locale>/.
  i18n: {
    defaultLocale: "ua",
    locales: ["ua", "en", "ru"],
    localeConfigs: {
      ua: { label: "Українська", htmlLang: "uk-UA" },
      en: { label: "English", htmlLang: "en-US" },
      ru: { label: "Русский", htmlLang: "ru-RU" },
    },
  },

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },
  themes: ["@docusaurus/theme-mermaid"],

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig: {
    image: "img/1wairesdindustries.png",
    navbar: {
      title: "1wairesd Industries",
      logo: {
        alt: "1wairesd Industries",
        src: "img/1wairesdindustries.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Документація",
        },
        {
          href: "https://github.com/1wairesd",
          label: "GitHub",
          position: "right",
        },
        { type: "localeDropdown", position: "right" },
      ],
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Проєкти",
          items: [
            {
              label: "CommandGuard",
              to: "/docs/CommandGuard/commandguard-intro",
            },
          ],
        },
        {
          title: "Спільнота",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/1wairesd",
            },
            {
              label: "Modrinth",
              href: "https://modrinth.com/plugin/commandguard",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 1wairesd Industries`,
    },
    colorMode: {
      defaultMode: "dark",
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: prismThemes.vsLight,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ["java", "groovy", "yaml"],
    },
  },
};

module.exports = config;
