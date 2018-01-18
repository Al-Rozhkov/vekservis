<template>
  <div>
    <page-header>
      <services-submenu :servicesList="services"/>
      <h1 class="page-title">Обслуживание механических инженерных систем</h1>
    </page-header>
    <section class="container">
      <h2>Системы вентиляции</h2>
      <p>Если в помещении повышенная влажность, выделяются газы и пыль, то необходимо задуматься об установке общеобменной вентиляции.</p>
      <p>Специалисты ВЭК СЕРВИС проектируют, устанавливают и обслуживают общеобменные системы вентиляции — приточные и вытяжные. Вытяжные системы равномерно удаляют воздух из всего обслуживаемого помещения, а приточные системы подают воздух и распределяют его по всему объему вентилируемого помещения.</p>
      <p>Мы так же занимаемся установкой систем дымоудаления с естественным или механическим побуждением.</p>
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
    title: 'Обслуживание механических инженерных систем. ВЭК СЕРВИС'
  },
  components: {
    PageHeader,
    ServicesSubmenu
  }
}
</script>

<style>

</style>
