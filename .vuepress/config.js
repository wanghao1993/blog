module.exports = {
  title: "天上的月亮",
  description: 'About my thoughts and blog',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },
      { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
      { text: '分类', 
        icon: 'reco-doc',
        items: [
          { text: 'TS学习', link: '/docs/typescript/' },
          { text: 'Vue2.0源码解读', link: '/docs/vue/' }
        ]
      },
      { text: 'Tag', 
        icon: 'reco-tag',
        items: [
          { text: 'JS', link: '/blogs/frontend/js/event' }
        ]
      },
      { text: 'Contact', 
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/wanghao1993', icon: 'reco-github' },
          { text: '掘金', link: 'https://juejin.cn/user/3227821868060695', icon: 'reco-github' }
        ]
      }
    ],
    sidebar: {
      '/docs/typescript/': [
        '',
        '1',
        'typescript-questions'
      ],
      '/docs/interview/': [
        '',
        'summary'
      ],
      '/docs/vue/': [
        'source-code-1'
      ]
    },  
    type: 'blog',
    // 博客设置
    blogConfig: {
      // category: {
      //   location: 2, // 在导航栏菜单中所占的位置，默认2
      //   text: 'Category' // 默认 “分类”
      // },
      tag: {
        location: 2, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认 “标签”
      }
    },
    friendLink: [
      {
        title: '蜉蝣撼树',
        desc: '不积硅步，无以至千里',
        email: '2682265436@qq.com',
        link: 'https://super-super.cn/'
      },
      {
        title: '公众号：前端工兵',
        // desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
    ],
    logo: '/logo.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'isaac Wang',
    // 作者头像
    authorAvatar: '/logo.png',
    // 备案号
    record: '粤ICP备2022001810号',
    // 项目开始时间
    startYear: '2022'
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  markdown: {
    lineNumbers: true
  }
}  
