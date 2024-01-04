module.exports = {
  url: 'https://myconscious.stream',
  siteName: 'My Conscious Stream',
  siteDescription:
    'Online and offline thoughts',
  siteType: 'Person', // schema
  locale: 'en_EN',
  lang: 'en',
  skipContent: 'Skip to content',
  author: 'Kevin C. Tofel', // i.e. Lene Saile - author's name. Must be set.
  authorEmail: 'kevin@kctofel.com', // i.e. hola@lenesaile.com - email of the author
  authorWebsite: '', // i.e. https.://www.lenesaile.com - the personal site of the author
  themeColor: '#DD4462', //  Manifest: defines the default theme color for the application
  themeBgColor: '#F3F3F3', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
  meta_data: {
    opengraph_default: '/assets/images/opengraph-default.jpg', // fallback/default meta image
    opengraph_default_alt:
      'Visible content: Eleventy starter based on workflow for Cube CSS, Every Layout, Design Tokens and Tailwind for uitility, based on the concepts explained in buildexcellentwebsit.es ', // alt text for default meta image
    twitterSite: '', // i.e. @site - twitter profile of the site
    twitterCreator: '', // i.e. @author -  twitter profile of the site
    mastodonProfile: 'https://hachyderm.io@kevinctofel' // i.e. https://front-end.social/@lene - url to your mastodon instance/profile
  },
  blog: {
    // this is for the rss feed
    name: 'My Conscious Stream',
    description:
      'Online and offline thoughts from Kevin C. Tofel'
  },
  pagination: {
    itemsPerPage: 20
  },
  address: {
    // edit all presets or leave empty. They are being used in the pages for privacy.md and imprint.md
    firma: 'Kevin C. Tofel',
    street: '123 Main St.',
    city: 'Harleysville',
    state: 'PA',
    zip: '19438',
    mobileDisplay: '',
    mobileCall: '',
    email: 'kevin@kctofel.com',
    cif: ''
  },
  menu: {
    closedText: 'Menu'
  }
};
