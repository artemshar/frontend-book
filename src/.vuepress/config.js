const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Frontend notebook',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#ededed' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: true,
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
    nav: [
      {
        text: 'JavaScript',
        link: '/javascript/',
      },
      {
        text: 'React',
        link: '/react/'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/artemshar/frontend-book'
      }
    ],
    sidebar: {
      '/frontend/': [
        {
          title: 'Frontend',
          collapsable: false,
          children: [
            '',
            'frontend'
          ]
        },
      ],
      '/react/': [
        {
          title: 'React',
          collapsable: false,
          children: [
            '',
            'ui-libs',
          ]
        },
      ],
      '/javascript/': [
        {
          title: 'JavaScript',
          collapsable: false,
          children: [
            '',
            'techniques',
          ]
        },
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }]
  ]
}
