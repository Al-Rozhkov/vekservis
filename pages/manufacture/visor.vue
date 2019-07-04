<template>
  <div>
    <page-header class="ph-blue">
      <header-submenu :menu="menu"/>
      <h1 class="page-title">Защитный козырек</h1>
    </page-header>
    <section class="container">
      <p>Защитный козырек «Visor Lite v.1.0» предназначен для защиты наружного блока кондиционера от падения снега и наледи с крыш домов, от осадков. Конструктивно представляет собой силовой каркас с прикрепляемой к нему крышкой посредством резьбовых шпилек и гаек с внутренней стороны козырька. Силовой каркас выполнен сварным из квадратной трубы 20х20х2 мм. Крышка представляет собой панель из листовой конструкционной стали толщиной 1,5 мм. С внутренней стороны крышки приварены резьбовые шпильки М6. Силовой каркас и крышка покрыты порошковой полимерной краской. Цвет покрытия любой по таблице RAL. Базовый цвет – матовый белый.</p>
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
    title: 'Защитный козырек. ВЭК СЕРВИС',
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
