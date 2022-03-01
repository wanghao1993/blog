module.exports = {
    title: '天上的月亮',
    description: '我的个人博客',
    head: [
        ['link', { rel: 'icon', href: '/image/logo.png' }]
      ],
    themeConfig: {
        footer: '111',
        // logo: '/image/logo.png',
        nav: [
            { text: '首页', link: '/' },
            {
                text: '前端',
                items: [
                  { text: 'JS', link: '/js/' }
                ]
            },
            { text: '面经', link: '/interview/' }
        ],
        sidebar: {
            '/interview/': [ {
                text: 'VuePress Reference',
                children: ['/interview/summary.md'],
            },]
          },
    }
}