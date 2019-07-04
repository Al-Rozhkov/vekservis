<template>
  <div>
    <page-header class="ph-blue">
      <header-submenu :menu="menu"/>
      <h1 class="page-title">Сварочный пост</h1>
    </page-header>
    <section class="container">
      ...
    </section>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
import HeaderSubmenu from '~/components/HeaderSubmenu.vue'
// import NodeSections from '~/components/NodeSections.vue'

import subpagesData from '~/data/manufacture.json'

export default {
  data () {
    return {
      menu: subpagesData
    }
  },
  head: {
    title: 'Сварочный пост. ВЭК СЕРВИС',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '...'
      }
    ]
  },
  components: {
    PageHeader,
    HeaderSubmenu
  }
}
</script>

<style lang="scss">

</style>
