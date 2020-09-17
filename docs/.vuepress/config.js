const moment = require('moment');

module.exports = {
  base: '/vuepress-test/',
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // console.log(lang)
          // 不要忘了安装 moment
          const moment = require('moment');
          moment.locale('zh-cn');
          // return moment(timestamp).format('yyyy-MM-DD ')
          return moment(timestamp).format('LLLL');
        },
      },
    ],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: '发现新内容可用.',
          buttonText: '刷新',
        },
      },
    ],
  ],
  title: '就是这个Title',
  description: '这个是描述',
  head: [
    ['meta', { name: 'author', content: 'sly' }],
    ['meta', { name: 'keywords', content: 'vuepress介绍,vuepress说明,飞跃高山' }],
    ['link', { rel: 'icon', href: '/assets/img/favicon.ico' }],
    // pwa
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    lastUpdated: '更新时间',
    logo: '/assets/img/logo.png',
    // navbar:false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'CSS', link: '/css/' },
      { text: 'SideBar', link: '/about/sidebar.html' },
      {
        text: 'Languages',
        items: [
          {
            text: 'Group1',
            items: [
              { text: 'Home', link: '/' },
              { text: 'About3', link: '/about/about3' },
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
    // sidebar: ['/', '/about/'],

    // 适合简单介绍页
    /* sidebar: ['/', '/about/',{
      title: '美丽的css',   // 必要的
      path: '/css/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
      collapsable: false, // 可选的, 默认值是 true,
      sidebarDepth: 1,    // 可选的, 默认值是 1
      children: [
        '/css/c-aaa',
        '/css/c-bbb',
        '/css/c-ccc',
      ]
      
    }], */

    // 博客页
    //  匹配规则从上往下的
    sidebar: {
      '/css/': ['/css/c-aaa', '/css/c-bbb', '/css/c-ccc'],
      //   匹配规则从上往下的
      '/': [
        '' /* / */,
        // 'about',    /* /about.html */
        // 'contact', /* /contact.html */
        'about2' /* /about.html */,
      ],
      // '/css/': ['/css/c-aaa', '/css/c-bbb', '/css/c-ccc'],
    },
  },
};
