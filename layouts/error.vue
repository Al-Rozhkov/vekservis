<template>
  <div>
    <header class="container header-error">
      <h1 class="red">
        Извините, страницы с таким адресом у нас нет
      </h1>
    </header>

    <section class="container">
      <services-list class="mb-3" />

      <div class="row service-teasers">
        <card-link
          v-for="item in manufacture.list"
          :key="item.name"
          :item="item"
          :section="manufacture.section"
        />
      </div>
    </section>
  </div>
</template>

<script>
import ServicesList from '~/components/ServicesList.vue'
import CardLink from '~/components/CardLink.vue'

import manufactureData from '~/data/manufacture.json'

export default {
  components: {
    ServicesList,
    CardLink
  },
  data() {
    return {
      services: servicesData,
      manufacture: manufactureData
    }
  },
  head: {
    title: 'Страница не найдена',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Страницы с таким адресом на этом сайте нет'
      }
    ]
  }
}
</script>

<style lang="scss" scoped>
.header-error {
  border-top: 1px solid #cccccc;
  padding-top: 2rem;
}
</style>
