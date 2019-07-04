<template>
  <div>
    <page-header>
      <services-submenu :servicesList="services"/>
      <h1 class="page-title">Услуги по эксплуатации объектов государственной и&nbsp;коммерческой недвижимости</h1>
    </page-header>
    <section class="container">
      <article class="node">
        <p>...</p>
      </article>
    </section>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
import ServicesSubmenu from '~/components/ServicesSubmenu.vue'

import subpagesData from '~/data/services.json'

export default {
  data () {
    return {
      services: subpagesData.list
    }
  },
  head: {
    title: 'Услуги по эксплуатации объектов государственной и коммерческой недвижимости. ВЭК СЕРВИС'
  },
  components: {
    PageHeader,
    ServicesSubmenu
  }
}
</script>

<style lang="scss">
.node {
  padding-top: 3rem;
  max-width: 868px;
}
</style>
