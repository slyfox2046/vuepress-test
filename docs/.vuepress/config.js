module.exports = {
  title: '就是这个Title',
  description: "这个是描述",
  head: [
    ['meta', { name: 'author', content: 'sly' }],
    ['meta', { name: 'keywords', content: 'vuepress介绍,vuepress说明,飞跃高山' }],
    ['link', { rel: 'icon', href: '/assets/img/favicon.ico' }]
  ],
  themeConfig: {
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
        '',        /* / */
        'about',    /* /about.html */
        'about'    /* /about.html */
        // 'contact', /* /contact.html */
      ]
    },
  },
};
