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
  dest: 'dist',
  base: '/frontend-book/',
  themeConfig: {
    repo: 'https://github.com/artemshar/frontend-book',
    docsDir: 'src',
    editLinks: true,
    editLinkText: '',
    lastUpdated: true,
    nav: [
      {
        text: 'CS',
        link: '/CS/',
      },
      {
        text: 'Design, UX/UI',
        link: '/design/',
      },
      {
        text: 'JavaScript',
        link: '/javascript/',
      },
      {
        text: 'React',
        link: '/react/'
      },
      {
        text: 'GIT',
        link: '/git/'
      },
      {
        text: 'General',
        link: '/general/'
      }
    ],
    sidebar: {
      '/CS/': [
        {
          title: 'Computer Science',
          collapsable: false,
          children: [
            ''
          ]
        },
      ],
      '/design/': [
        {
          title: 'Design, UX/UI, motion',
          collapsable: false,
          children: [
            '',
            'glossary',
            'design_systems',
            'methodologies',
            'animations',
            'mobile'
          ]
        },
      ],
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
            'state-management',
            'hooks',
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
            'memory_management',
            'classes'
          ]
        },
      ],
      '/git/': [
        {
          title: 'GIT',
          collapsable: false,
          children: [
            '',
          ]
        },
      ],
      '/general/': [
        {
          title: 'General',
          collapsable: false,
          children: [
            '',
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
