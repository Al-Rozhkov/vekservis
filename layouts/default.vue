<template>
  <div>
    <div class="leader container">
      <logo/>
      <ul class="main-menu">
        <li><nuxt-link to="/services">Услуги</nuxt-link></li>
        <li><nuxt-link to="/clients">Опыт и клиенты</nuxt-link></li>
        <li><nuxt-link to="/advantages">Преимущества</nuxt-link></li>
        <li><nuxt-link to="/contact">Контакты</nuxt-link></li>
      </ul>
      <span class="phone"><span class="small">+7 (8412) </span>20-73-18</span>
    </div>
    <nuxt/>
    <footer class="container">
      <div class="col-4">
        © 2011—2018 ООО «ВЭК СЕРВИС» 
      </div>
      <div class="col-4">
        <nuxt-link to="/contact">г. Пенза, ул. Ставского, 4, оф. 4</nuxt-link><br />
        <a href="mailto:info@vekservis.ru">info@vekservis.ru</a>
      </div>
        <span class="phone"><span class="small">+7 (8412) </span>20-73-18</span>
    </footer>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import PageHeader from '~/components/PageHeader.vue'

export default {
  components: {
    Logo,
    PageHeader
  }
}
</script>

<style>
</style>