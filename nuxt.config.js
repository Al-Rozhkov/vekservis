export default {
  target: 'static',

  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'ru'
    },
    title:
      'ВЭК СЕРВИС. Обслуживание и управление объектами коммерческой и государственной недвижимости по всей России',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Основные сферы деятельности компании: установка и обслуживание механических, электрических, слаботочных инженерных систем, услуги по эксплуатации ЖКХ, отделочные и ремонтные работы.'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Montserrat:400,600&amp;subset=cyrillic'
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdn.envybox.io/widget/cbk.css'
      }
    ],
    script: [
      {
        src: 'https://cdn.envybox.io/widget/cbk.js?wcb_code=fd8b1b058a9498d579099a6e3f599eb6',
        type: 'text/javascript',
        charset: 'UTF-8',
        async: true,
        body: true
      }
      // Call tracking.
      // {
      //   innerHTML: `(function(window,document,n,project_ids){window.GudokData=n;if(typeof project_ids !== "object"){project_ids = [project_ids]};window[n] = {};window[n]["projects"]=project_ids;config_load(project_ids.join(','));function config_load(cId){var a=document.getElementsByTagName("script")[0],s=document.createElement("script"),i=function(){a.parentNode.insertBefore(s,a)},cMrs='';s.async=true;if(document.location.search&&document.location.search.indexOf('?gudok_check=')===0)cMrs+=document.location.search.replace('?','&');s.src="//mod.gudok.tel/script.js?sid="+cId+cMrs;if(window.opera == "[object Opera]"){document.addEventListener("DOMContentLoaded", i, false)}else{i()}}})(window, document, "gd", "0rgg0dapbn");`,
      //   type: 'text/javascript',
      //   body: true
      // }
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

  // env: {},

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
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true
      }
    ],
    '@nuxtjs/sitemap'
  ],

  buildModules: [
    '@nuxt/image',
    '@nuxtjs/google-analytics'
  ],

  googleAnalytics: {
    id: 'UA-200894230-1'
  },

  plugins: ['~/plugins/plugin.client.js'],

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://vekservis.ru',
    cacheTime: 1000 * 60 * 15
  },

  image: {
    dir: 'static/img',
    provider: 'static',
    presets: {
      square80: {
        modifiers: {
          format: 'jpg',
          fit: 'cover',
          width: 80,
          height: 80
        }
      },
      square160: {
        modifiers: {
          format: 'jpg',
          fit: 'cover',
          width: 160,
          height: 160
        }
      }
    }
  }
}
