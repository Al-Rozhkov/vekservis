<template>
  <div>
    <div class="leader container">
      <logo />
      <ul class="main-menu">
        <li>
          <nuxt-link to="/services"> Услуги </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/clients"> Опыт и клиенты </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/manufacture"> Производство </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/advantages"> Преимущества </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact"> Контакты </nuxt-link>
        </li>
      </ul>
      <span class="phone"> <span class="small">+7 (8412)</span> 20-73-18 </span>
    </div>

    <nuxt />

    <footer class="footer container">
      <div class="col-4">
        <p>
          <span class="site-desc">© 2013—2022 ООО «ВЭК&nbsp;СЕРВИС»</span>
        </p>
        <p>
          <nuxt-link to="/policy"> Политика конфиденциальности </nuxt-link>
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
}
</script>
