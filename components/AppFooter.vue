<template>
  <footer class="footer container">
    <div class="col-4">
      <p>
        <span class="site-desc">© 2013—2023 ООО ВЭК&nbsp;СЕРВИС</span>
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
          г.&nbsp;Пенза, ул.&nbsp;Ставского, стр.&nbsp;4, офис&nbsp;4
        </nuxt-link>
        <br>
        <nuxt-link to="/contact/moscow">
          г.&nbsp;Москва, ул.&nbsp;Космонавта Волкова 6А
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
        <br>
        <span class="small">8 800 600-00-65</span>
      </p>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss">
.footer {
  border-top: 1px solid #cccccc;
  margin-top: 2rem;
  padding-top: 2rem;
  padding-bottom: 4rem;
}

.site-desc {
  padding-right: 2rem;
}
</style>
