<template>
  <div>
    <page-header>
      <services-submenu :servicesList="services"/>
      <h1 class="page-title">Техническое обслуживание слаботочных инженерных систем</h1>
    </page-header>
    <node-sections :sectionsList="nodeSections"/>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
import ServicesSubmenu from '~/components/ServicesSubmenu.vue'
import NodeSections from '~/components/NodeSections.vue'

export default {
  asyncData ({ env }) {
    return {
      services: env.services,
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
    title: 'Техническое обслуживание слаботочных инженерных систем. ВЭК СЕРВИС'
  },
  components: {
    PageHeader,
    ServicesSubmenu,
    NodeSections
  }
}
</script>

<style>

</style>
