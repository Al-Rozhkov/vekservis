<template>
  <div>
    <page-header>
      <services-submenu :servicesList="services"/>
      <h1 class="page-title">Услуги по эксплуатации объектов государственной и&nbsp;коммерческой недвижимости</h1>
    </page-header>
    <section class="container">
      <p>Обслуживание и&nbsp;ремонт инженерных систем&nbsp;&mdash; это комплекс технических и&nbsp;организационных мероприятий, в&nbsp;результате которых обеспечивается постоянная работоспособность оборудования. Качественное обслуживание инженерных систем помогает снизить вероятность возникновения аварийных ситуаций, предупредить поломку и&nbsp;значительно продлить срок службы оборудования.</p>

      <p>Для работы на&nbsp;объектах Заказчика техническая служба компании предоставляет персонального менеджера и&nbsp;необходимых специалистов по&nbsp;направлениям, которые обслуживают установленное в&nbsp;здании оборудование. Технический отдел и&nbsp;руководство компании «ВЭК СЕРВИС» обеспечивает поддержку в&nbsp;части соблюдения стандартов оказания услуг, а&nbsp;также контролирует их&nbsp;качество и&nbsp;сроки.</p>
    </section>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
import ServicesSubmenu from '~/components/ServicesSubmenu.vue'

export default {
  asyncData ({ env }) {
    return { services: env.services }
  },
  head: {
    title: 'Услуги по эксплуатации объектов государственной и коnpm run devммерческой недвижимости. ВЭК СЕРВИС'
  },
  components: {
    PageHeader,
    ServicesSubmenu
  }
}
</script>

<style lang="scss">

</style>
