module.exports = {
  title: "🧪 Web3 Systems",
  tagline: "Documentation and Guides",
  url: "https://web3-systems.github.io",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "ignore",
  favicon: "img/favicon.png",
  organizationName: "web3-systems", // Usually your GitHub org/user name.
  projectName: "docs",
  themeConfig: {
    image: "img/twitter_card_bg.jpg",
    prism: {
      additionalLanguages: ["solidity"],
      theme: require("prism-react-renderer/themes/dracula"),
    },
    navbar: {
      title: "Web3 Systems",
      logo: {
        alt: "Web3 Systems",
        src: "img/favicon.png",
      },
      items: [
        {
          href: "https://app.web3-systems.io",
          label: "App",
          position: "right",
          className: "persistent",
        },
      ],
    },
    footer: {
      // style: "dark",
      links: [
        {
          title: "Developers",
          items: [
            {
              label: "Github",
              href: "https://github.com/web3-systems",
            },
          ],
        },
      ],
      copyright: `MIT Licensed | Copyright © ${new Date().getFullYear()} Kames Geraghty`,
    },
    colorMode: {
      // "light" | "dark"
      defaultMode: "dark",

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: true,

      // Dark/light switch icon options
      switchConfig: {
        // Icon for the switch while in dark mode
        darkIcon: "\u{263D}",

        // Unicode icons such as '\u2600' will work
        // Unicode with 5 chars require brackets: '\u{1F602}'
        lightIcon: "\u{263C}",
      },
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "docs",
          routeBasePath: "/",
          editUrl: "https://github.com/web3-systems/docs/tree/main/",
        },

        theme: {
          customCss: require.resolve("./src/css/custom.css"),
          customCss2: require.resolve("./src/css/colors.css"),
        },
      },
    ],
  ],
};
