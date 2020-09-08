module.exports = {
  themeConfig: {
    logo: '/assets/img/logo.png',
    // navbar:false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      {
        text: 'Languages',
        items: [
          {
            text: 'Group1',
            items: [
              { text: 'Home', link: '/' },
              { text: 'About', link: '/about/' },
            ],
          },
          {
            text: 'Group2',
            items: [
              { text: 'About2', link: '/about2.html' },
              { text: 'About3', link: '/about/about3.html' },
            ],
          },
        ],
      },
      { text: 'External', link: 'https://baidu.com' },
    ],
  },
};
