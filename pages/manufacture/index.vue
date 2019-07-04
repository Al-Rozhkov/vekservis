<template>
  <div>
    <page-header class="ph-blue">
      <header-submenu :menu="menu"/>
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

<style lang="scss">
.node {
  padding-top: 3rem;
  max-width: 868px;
}
</style>
