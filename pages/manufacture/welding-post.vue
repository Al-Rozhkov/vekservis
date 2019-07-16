<template>
  <div>
    <page-header class="ph-blue ph-position-center">
      <header-submenu :menu="menu"/>
      <h1 class="page-title">Сварочный пост</h1>
    </page-header>
    <section class="container">
      <p>Пост сварочный ПС5-001 предназначен для ограждения рабочих мест при проведении сварочных, слесарных и др. видов работ, и защиты окружающих от излучения, возникающего во время сварки. Возможность установки трех столов, одновременно. Вентиляция состоит из 16 диффузоров с регулировкой, позволяющих регулировать мощность оттока воздуха и варить в любой зоне сварочного поста. </p>
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
