<template>
  <div>
    <page-header class="ph-teal">
      <header-submenu :menu="services" />
      <h1 class="page-title">
        Отделочные и&nbsp;ремонтные работы
      </h1>
    </page-header>
    <section class="container">
      <p>
        Строительные ремонты и&nbsp;обустройство объекта проводятся
        по&nbsp;заявкам Заказчика как в&nbsp;порядке текущей эксплуатации
        на&nbsp;основании установленного бюджета и&nbsp;смет, так
        и&nbsp;по&nbsp;утвержденному плану капитальных работ
        и&nbsp;инвестиционного бюджета.
      </p>
    </section>
    <node-sections :sections-list="nodeSections" />

    <section class="container">
      <div class="page-body">
        <p>
          Поддерживать привлекательность внутренних интерьеров объекта
          недвижимости и&nbsp;его внешнее архитектурное состояние необходимо
          регулярно.
        </p>
        <p>
          Одно из&nbsp;конкурентных преимуществ ВЭК СЕРВИС&nbsp;&mdash;
          проведение ремонтов в&nbsp;действующих офисах и&nbsp;торговых площадях
          наших Заказчиков без остановки функционирования помещений. Работы
          проводятся в&nbsp;любое время, включая ночные часы и&nbsp;выходные
          дни, на&nbsp;высоким уровне, с&nbsp;соблюдением всех норм, стандартов
          и&nbsp;технике безопасности, как собственными ресурсами, так
          и&nbsp;с&nbsp;привлечением специализированных подрядных компаний,
          максимально учитывая все заявленные требования к&nbsp;качеству
          и&nbsp;срокам проведения работ.
        </p>
      </div>
    </section>
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
          title: 'Отделочные работы',
          content:
            '<ul><li>Малярные и&nbsp;облицовочные работы;</li> <li>Установка и&nbsp;ремонт сантехники, прокладка и&nbsp;перенос труб водоотведения и&nbsp;канализации;</li> <li>Электромонтаж;</li> <li>Замена отопительных приборов;</li> <li>Электро- и&nbsp;газосварочные работы;</li> <li>Гидроизоляция и&nbsp;шумоизоляция помещений, вентиляции и&nbsp;системы отопления;</li> <li>Монтаж потолков (реечные, &laquo;Армстронг&raquo;, ГКЛ, &laquo;Грильято&raquo; и&nbsp;другие);</li> <li>Замена напольных покрытий (плитка, паркет, ламинат, ковролин, линолеум и&nbsp;т.&nbsp;д.);</li> <li>Устройство наливных и&nbsp;выравнивающих полов, стяжек, перегородок, дверных и&nbsp;оконных блоков.</li></ul>'
        },
        {
          title: 'Общестроительные работы',
          content:
            '<ul><li>Монтаж металлоконструкций;</li> <li>Устройство и&nbsp;ремонт кровель (наплавляемых, металлических и&nbsp;других);</li> <li>Монтаж и&nbsp;восстановление фасадов (вентилируемые, &laquo;мокрые&raquo; и&nbsp;т.&nbsp;д.);</li> <li>Ремонт элементов зданий и&nbsp;сооружений (входных групп, крылец, пандусов, подпорных стенок и&nbsp;других);</li> <li>Монтаж и&nbsp;установка навесов и&nbsp;защитных конструкций (из&nbsp;поликарбоната, алюкобонда, пластикового профилированного листа и&nbsp;других материалов).</li></ul>'
        },
        {
          title: 'Благоустройство территорий',
          content:
            '<ul><li>Нанесение дорожной разметки;</li> <li>Ландшафтные работы и&nbsp;озеленение;</li> <li>Обустройство территории (укладка асфальта, брусчатки, плитки и&nbsp;других покрытий);</li> <li>Установка схем, указателей, знаков дорожного движения и&nbsp;т.д.;</li> <li>Создание малых архитектурных форм (вазонов, цветников, скамеек, ограждений и&nbsp;др.).</li></ul>'
        }
      ]
    }
  },
  head: {
    title: 'Отделочные и ремонтные работы. ВЭК СЕРВИС',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'ВЭК СЕРВИС предлагает услуги по выполнению отделочных работ, общестроительных работ, благоустройству территорий.'
      }
    ]
  }
}
</script>

<style></style>
