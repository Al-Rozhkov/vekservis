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
      <div class="col-3">
        © 2011—2017 ООО «ВЭК СЕРВИС» 
      </div>
      <div class="col-3">
        г. Пенза, ул. Ставского, 4, оф. 4<br />
        info@vekservis.ru
      </div>
      <div class="col-3">
        <span class="phone"><span class="small">+7 (8412) </span>20-73-18</span>
      </div>
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

<style lang="scss">
.leader {
  display: flex;
  padding-top: 1.5rem;
  padding-bottom: .5rem;
}

.main-menu {
  list-style-type: none;
  padding: 0;
  margin: .7rem 0 1rem;

  li {
    display: inline-block;
    margin-right: 2rem;
  }
}

.phone {
  margin-left: auto;
  font-size: 1.75rem;
}

.small {
  font-size: 1rem;
}

footer {
  border-top: 1px solid #cccccc;
  margin-top: 2rem;
  padding-top: 2rem;
}
</style>