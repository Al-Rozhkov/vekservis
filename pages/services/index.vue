<template>
  <main>
    <page-header>
      <header-submenu :menu="services"/>
      <h1 class="page-title">Услуги по эксплуатации объектов государственной и&nbsp;коммерческой недвижимости</h1>
    </page-header>
    <section class="container">
      <article class="node">
        <p>Обслуживание и&nbsp;ремонт инженерных систем&nbsp;&mdash; это комплекс технических и&nbsp;организационных мероприятий, в&nbsp;результате которых обеспечивается постоянная работоспособность оборудования. Качественное обслуживание инженерных систем помогает снизить вероятность возникновения аварийных ситуаций, предупредить поломку и&nbsp;значительно продлить срок службы оборудования.</p>
        <p>Для работы на&nbsp;объектах Заказчика техническая служба компании предоставляет персонального менеджера и&nbsp;необходимых специалистов по&nbsp;направлениям, которые обслуживают установленное в&nbsp;здании оборудование. Технический отдел и&nbsp;руководство компании «ВЭК СЕРВИС» обеспечивает поддержку в&nbsp;части соблюдения стандартов оказания услуг, а&nbsp;также контролирует их&nbsp;качество и&nbsp;сроки.</p>
      </article>
    </section>
  </main>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
import HeaderSubmenu from '~/components/HeaderSubmenu.vue'

import servicesData from '~/data/services.json'

export default {
  data () {
    return {
      services: servicesData
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
