import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Bee Logistics Documentation',
  tagline: 'Official documentation for Bee Logistics',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://beelogistics-docs.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'nqcdan',
  projectName: 'beelogistics-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  scripts: [
    {
      src: '/js/redirect.js',
      async: true,
    },
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'vi', // Cập nhật ngôn ngữ mặc định thành tiếng Việt
    locales: ['vi', 'en', 'zh-Hans'], // Thêm các bản dịch tiếng Anh và tiếng Trung
    localeConfigs: {
      vi: {
        htmlLang: 'vi-VN', // Cấu hình ngôn ngữ HTML cho tiếng Việt
      },
      en: {
        htmlLang: 'en-GB',
      },
      "zh-Hans": {
        htmlLang: 'zh-Hans', // Cấu hình ngôn ngữ HTML cho tiếng Trung giản thể
      },
    }
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          exclude: ['**/@*.{md,mdx}'],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ngcdan/beelogistics-docs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/banner_web.png',
    navbar: {
      logo: {
        alt: 'Bee Logistics Logo',
        src: 'img/logo.png',
        href: '/docs/CRM_CHANGELOG',
      },
      items: [
        { to: 'docs/CRM_CHANGELOG', label: 'Changelog', position: 'left' },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/ngcdan/beelogistics-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Bee Logistics. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
