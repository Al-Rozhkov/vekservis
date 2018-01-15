<template>
  <section class="container">
    <div>
      <services/>
    </div>
  </section>
</template>

<script>
import Services from '~/components/Services.vue'

export default {
  head: {
    title: 'Услуги по эксплуатации объектов государственной и коммерческой недвижимости. ВЭК СЕРВИС'
  },
  components: {
    Services
  },
  mounted () {
    this.$store.commit('changeTitle', 'Услуги по эксплуатации объектов государственной и&nbsp;коммерческой недвижимости')
  }
}
</script>

<style>

</style>
