<template>
  <div>
    <div class="leader container">
      <logo />
      <ul class="main-menu">
        <li>
          <nuxt-link to="/services">
            Услуги
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/clients">
            Опыт и клиенты
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/manufacture">
            Производство
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/advantages">
            Преимущества
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact">
            Контакты
          </nuxt-link>
        </li>
      </ul>
      <span class="phone"> <span class="small">+7 (8412)</span> 20-73-18 </span>
    </div>

    <nuxt />

    <footer class="container">
      <div class="col-4">
        <p>
          <span class="site-desc">© 2013—2019 ООО «ВЭК&nbsp;СЕРВИС»</span>
        </p>
        <p>
          <nuxt-link to="/policy">
            Политика конфиденциальности
          </nuxt-link>
        </p>
      </div>
      <div class="col-4">
        <p>
          <nuxt-link to="/contact">
            г.&nbsp;Пенза, ул.&nbsp;Ставского, 4, оф.&nbsp;4
          </nuxt-link>
        </p>
        <p>
          <a href="mailto:info@vekservis.ru">info@vekservis.ru</a>
        </p>
      </div>
      <div class="col-4">
        <p class="text-right">
          <span class="phone">
            <span class="small">+7&nbsp;(8412)</span> 20-73-18
          </span>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  head() {
    return{
      script: [{
        innerHTML: `WebFormSettings = { btn_text: 'Оставить заявку', btn_text_color: '#ffffff', btn_color: '#0c4b8c', btn_border_color: '#ffffff', btn_position: 'right', account_name: 'vekservis', site_url: 'https://help.vekservis.ru/' }; var scriptTag = document.createElement('script'); scriptTag.type = 'text/javascript';scriptTag.charset = 'utf-8'; scriptTag.src = ('https://help.vekservis.ru/web-form/web-form.js'); document.body.appendChild(scriptTag);`,
        id: 'okdesk-script',
        type: 'text/javascript',
        body: true
      }]
    }
  }
}
</script>
