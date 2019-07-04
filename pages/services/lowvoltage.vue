<template>
  <div>
    <page-header>
      <header-submenu :menu="services"/>
      <h1 class="page-title">Техническое обслуживание слаботочных инженерных систем</h1>
    </page-header>
    <node-sections :sectionsList="nodeSections"/>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
import HeaderSubmenu from '~/components/HeaderSubmenu.vue'
import NodeSections from '~/components/NodeSections.vue'

import servicesData from '~/data/services.json'

export default {
  data () {
    return {
      services: servicesData,
      nodeSections: [
        {
          title: 'Автоматика и&nbsp;диспетчеризация здания',
          content: '<ul><li>Система диспетчеризации внутреннего инженерного оборудования.</li></ul>'
        },
        {
          title: 'Комплекс технических средств безопасности (КТСБ)',
          content: '<ul><li>Система автоматической пожарной сигнализации (САПС);</li><li>Система оповещения о&nbsp;пожаре и&nbsp;управления эвакуацией (СОУЭС);</li><li>Автоматика противопожарных систем (АПС);</li><li>Система охранно-тревожной сигнализации (СОТС);</li><li>Система контроля и&nbsp;управления доступом (СКУД);</li><li>Система видеодомофонной связи;</li><li>Система видеонаблюдения.</li></ul>'
        }
      ]
    }
  },
  head: {
    title: 'Техническое обслуживание слаботочных инженерных систем. ВЭК СЕРВИС',
    meta: [
      { hid: 'description', name: 'description', content: 'ВЭК СЕРВИС предлагает следующие услуги по обслуживанию слаботочных инженерных систем: автоматика и диспетчеризация здания, комплекс технических средств безопасности (КТСБ).' }
    ]
  },
  components: {
    PageHeader,
    HeaderSubmenu,
    NodeSections
  }
}
</script>

<style>

</style>
