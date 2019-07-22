/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const extlink = require('remarkable-extlink');

const users = [
  {
    caption: 'liara',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://swizzin.ltd',
    pinned: true,
  },
];

const siteConfig = {
  title: 'docs', // Title for your website.
  tagline: 'Documentation for the swizzin github project',
  url: 'https://docs.swizzin.ltd', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'docs.swizzin.ltd',
  organizationName: 'liaralabs',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {href: 'https://swizzin.ltd', label: 'Home'},
    {href: 'https://github.com/liaralabs/swizzin', label: 'GitHub'},
    {search: true},
    {languages: true}
  ],

  disableHeaderTitle: true,

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/swizzin.png',
  footerIcon: 'img/favico.png',
  favicon: 'img/favico.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#2e3440',
    secondaryColor: '#434c5e',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */
  /*algolia: {
    apiKey: '',
    indexName: 'swizzin.ltd'
  },*/

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} swizzin.ltd`,

  usePrism: ['jsx'],
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'atom-one-dark',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  docsSideNavCollapsible: true,
  enableUpdateBy: true,
  enableUpdateTime: true,
  editUrl: 'https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/',
  docsUrl: '',
  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
  markdownPlugins: [
    function(md) {
      extlink(md, {
        host: 'docs.swizzin.ltd', // The hrefs that you DON'T want to be external
      });
    },
    // Highlight admonitions.
    require('remarkable-admonitions')({ icon: 'svg-inline' }),
    require('remarkable-emoji'),
  ],

  stylesheets: [
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/brands.min.css',
    'https://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext'
  ],
};

module.exports = siteConfig;
