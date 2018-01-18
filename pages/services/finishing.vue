<template>
  <div>
    <page-header>
      <services-submenu :servicesList="services"/>
      <h1 class="page-title">Отделочные и&nbsp;ремонтные работы</h1>
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
    title: 'Отделочные и ремонтные работы. ВЭК СЕРВИС'
  },
  components: {
    PageHeader,
    ServicesSubmenu
  }
}
</script>

<style>

</style>
