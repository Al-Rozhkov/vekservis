<template>
  <div>
    <page-header class="ph-purple">
      <header-submenu :menu="services" />
      <h1 class="page-title">
        Монтаж и&nbsp;обслуживание электрических систем зданий
      </h1>
    </page-header>
    <node-sections :sections-list="nodeSections" />
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
import HeaderSubmenu from '~/components/HeaderSubmenu.vue'
import NodeSections from '~/components/NodeSections.vue'

import servicesData from '~/data/services.json'

export default {
  components: {
    PageHeader,
    HeaderSubmenu,
    NodeSections
  },
  data () {
    return {
      services: servicesData,
      nodeSections: [
        {
          title: 'Система среднего напряжения 10 (20) кВ',
          content:
            '<ul><li>Встроенные распределительные, соединительные пункты (РП, СП);</li><li>Встроенные трансформаторные подстанции (ТП);</li><li>Система кабельных каналов и закладных устройств;</li><li>Кабельные сети.</li><li>Система теплоснабжения вентиляционных установок.</li></ul>'
        },
        {
          title: 'Система распределения низкого напряжения 0,4 кВ',
          content:
            '<ul><li>Шинные мосты и магистральные шинопроводы;</li><li>Щитовое оборудование (ГРЩ, ВРУ, АВР, щиты распределительные);</li><li>Система кабельных каналов и закладных устройств;</li><li>Кабельные, розеточные сети зданий, помещений.</li></ul>'
        },
        {
          title: 'Система электроосвещения',
          content:
            '<ul><li>Рабочее освещение;</li><li>Аварийное освещение (эвакуационное и освещение безопасности);</li><li>Наружное и архитектурное освещение;</li><li>Светоограждающие конструкции.</li></ul>'
        },
        {
          title: 'Система бесперебойного электропитания (ИБП)',
          content: '<p></p>'
        },
        {
          title:
            'Система гарантированного электропитания (дизельная электростанция)',
          content: '<p></p>'
        },
        {
          title: 'Система молниезащиты и заземления',
          content: '<p></p>'
        }
      ]
    }
  },
  head: {
    title: 'Монтаж и обслуживание электрических систем зданий. ВЭК СЕРВИС',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'ВЭК СЕРВИС предлагает следующие услуги по обслуживанию систем среднего напряжения 10 (20) кВ, распределения низкого напряжения 0,4 кВ, электроосвещения, бесперебойного электропитания, гарантированного электропитания, молниезащиты и заземления.'
      }
    ]
  }
}
</script>

<style></style>
