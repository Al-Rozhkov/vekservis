module.exports = {
  /*
  ** No prefetch
  render: {
    resourceHints: false
  }, */
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'ru'
    },
    title: 'ВЭК СЕРВИС. Обслуживание и управление объектами коммерческой и государственной недвижимости по всей России',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Основные сферы деятельности компании: установка и обслуживание механических, электрических, слаботочных инженерных систем, услуги по эксплуатации ЖКХ, отделочные и ремонтные работы.' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,600&amp;subset=cyrillic' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~assets/css/normalize.css',
    { src: '~assets/scss/global.scss', lang: 'scss' }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#4f48a3' },
  /*
  ** Build configuration
  */
  env: {
    services: [
      { name: 'mechanical', title: 'Обслуживание механических инженерных систем' },
      { name: 'electrical', title: 'Монтаж и&nbsp;обслуживание электрических систем зданий' },
      { name: 'lowvoltage', title: 'Техническое обслуживание слаботочных инженерных систем' },
      { name: 'zhkh', title: 'Услуги по&nbsp;эксплуатации ЖКХ' },
      { name: 'finishing', title: 'Отделочные и&nbsp;ремонтные работы' },
      { name: 'commercial', title: 'Комплексное обслуживание коммерческой и&nbsp;жилой недвижимости' }
    ]
  },
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
    // extractCSS: true
  },
  modules: [
    [
      '@nuxtjs/yandex-metrika',
      {
        id: '45245817',
        webvisor: true,
        clickmap:true,
        // trackLinks:true,
        // accurateTrackBounce:true,
      }
    ],
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://vekservis.ru',
    cacheTime: 1000 * 60 * 15
  }
}
