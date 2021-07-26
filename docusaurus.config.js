module.exports = {
  title: "swizzin community edition",
  tagline: "An all-in-one modular seedbox solution",
  url: "https://liaralabs.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "liaralabs", // Usually your GitHub org/user name.
  projectName: "docs.swizzin.ltd", // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
      switchConfig: {
        darkIcon: "🌙",
        darkIconStyle: {
          marginLeft: "2px",
        },
        lightIcon: "☀️",
        lightIconStyle: {
          marginLeft: "1px",
        },
      },
    },
    prism: {
      theme: require("prism-react-renderer/themes/nightOwl"),
      darkTheme: require("prism-react-renderer/themes/nightOwlLight"),
    },
    image: "img/logo.png",
    navbar: {
      hideOnScroll: false,
      title: "swizzin",
      logo: {
        alt: "swizzin Logo",
        src: "img/logo.png",
      },
      items: [
        {
          to: "getting-started",
          label: "Docs",
          position: "left",
        },
        {
            to: "applications",
            label: "Applications",
            position: "left",
        },
        {
          to: "dev/intro",
          label: "Development",
          position: "left",
      },
        {
            to: "getting-started/faqs",
            label: "FAQs",
            position: "left",
        },
        {
          href: "https://github.com/liaralabs/swizzin",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub Repository",
        },
        {
          href: "https://swizzin.net",
          position: "left",
          // className: "header-github-link",
          label: "Swizzin Hosted",
          alt: "Managed seedboxes hosted by the swizzin developers"
          // "aria-label": "GitHub Repository",
        },
      ],
    },
    footer: {
      logo: {
            alt: 'swizzin Logo',
            src: 'img/logo-sm.png',
            href: 'https://swizzin.ltd',
          },
      links: [
        {
          title: "swizzin",
          items: [
            {
              label: "Getting Started",
              to: "getting-started",
            },
            {
              label: "Box Basics",
              to: "getting-started/box-basics",
            },

          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/liaralabs/swizzin",
            },
            {
              label: "Discord",
              href: "https://discord.gg/sKjs9UM",
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} swizzin. All rights reserved.`,
    },
    googleAnalytics: {
      trackingID: "UA-104631777-1"
    },
    algolia: {
      apiKey: "zz",
      indexName: "swizzin",
    },
  },
  plugins: ["docusaurus-plugin-sass", "@docusaurus/plugin-ideal-image"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/liaralabs/docs.swizzin.ltd/edit/master/",
          routeBasePath: "/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/liaralabs/docs.swizzin.ltd/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      },
    ],
  ],
};
