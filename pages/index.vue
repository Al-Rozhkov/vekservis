<template>
  <section class="container">
    <div>
      <h2>Комплексный подход</h2>
      <p>Это наш основополагающий принцип к&nbsp;решению задач, поставленных клиентом. Особенность и&nbsp;выгода такого подхода очевидна:</p>
    </div>
    <services/>
  </section>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
import Services from '~/components/Services.vue'
// import ClientsList from '~/components/ClientsList.vue'

export default {
  components: {
    PageHeader,
    Services
  },
  mounted () {
    this.$store.commit('changeTitle', 'Эксплуатация объектов государственной и&nbsp;коммерческой недвижимости по&nbsp;всей России')
  }
}
</script>

<style lang="scss">

</style>
