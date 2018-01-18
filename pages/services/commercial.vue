<template>
  <div>
    <page-header>
      <services-submenu :servicesList="services"/>
      <h1 class="page-title">Комплексное обслуживание коммерческой и&nbsp;жилой недвижимости</h1>
    </page-header>
    <section class="container">
      ...
    </section>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
import ServicesSubmenu from '~/components/ServicesSubmenu.vue'

export default {
  asyncData ({ env }) {
    return { services: env.services }
  },
  head: {
    title: 'Комплексное обслуживание коммерческой и жилой недвижимости. ВЭК СЕРВИС'
  },
  components: {
    PageHeader,
    ServicesSubmenu
  }
}
</script>

<style>

</style>
