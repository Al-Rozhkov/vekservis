<template>
  <main>
    <page-header class="ph-blue">
      <header-submenu :menu="menu"/>
      <h1 class="page-title">Услуги по эксплуатации объектов государственной и&nbsp;коммерческой недвижимости</h1>
    </page-header>
    <section class="container">
      <article class="intro">
        <p>...</p>
      </article>
    </section>
  </main>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
import HeaderSubmenu from '~/components/HeaderSubmenu.vue'

import subpagesData from '~/data/manufacture.json'

export default {
  data () {
    return {
      menu: subpagesData
    }
  },
  head: {
    title: 'Услуги по эксплуатации объектов государственной и коммерческой недвижимости. ВЭК СЕРВИС'
  },
  components: {
    PageHeader,
    HeaderSubmenu
  }
}
</script>

<style lang="scss" scoped>
.intro {
  padding-top: 3rem;
  max-width: 860px;
}
</style>
