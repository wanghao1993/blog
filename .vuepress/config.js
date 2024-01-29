module.exports = {
  title: '在路上',
  description: 'About my thoughts and blog',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no',
      },
    ],
  ],
  theme: 'reco',
  themeConfig: {
    subSidebar: 'auto',
    nav: [
      {
        text: '社交',
        icon: 'reco-message',
        items: [
          {
            text: 'GitHub',
            link: 'https://github.com/wanghao1993',
            icon: 'reco-github',
          },
          {
            text: '掘金',
            link: 'https://juejin.cn/user/3227821868060695',
            icon: 'reco-github',
          },
        ],
      },
    ],
    type: 'blog',
    // 博客设置
    blogConfig: {},
    friendLink: [
      {
        title: '蜉蝣撼树',
        desc: '不积硅步，无以至千里',
        email: '2682265436@qq.com',
        link: 'https://super-super.cn/',
      },
      {
        title: '公众号：前端工兵',
        avatar:
          'https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png',
        link: 'https://vuepress-theme-reco.recoluan.com',
      },
    ],
    logo: '/logo.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: 'auto',
    // 最后更新时间
    lastUpdated: true,
    author: 'isaac Wang',
    // 作者头像
    authorAvatar: '/logo.png',
    // 备案号
    cyberSecurityRecord: '粤ICP备2022001810号',
    cyberSecurityLink: 'https://beian.miit.gov.cn/',
    // 项目开始时间
    startYear: '2022',
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
    lineNumbers: true,
  },
}
