<template>
  <div>
    <header class="container header-404">
      <h1 class="red">Извините, страницы с таким адресом у нас нет</h1>
    </header>
    
    <section class="container">
      <div class="row service-teasers">
        <card-link
          v-for="item in services.list" :key="item.name"
          :item="item"
          :section="services.section"
        />
        <div style="width: 100%; height: 1rem;"></div>
        <card-link
          v-for="item in manufacture.list" :key="item.name"
          :item="item"
          :section="manufacture.section"
        />
      </div>
    </section>
  </div>
</template>

<script>
import CardLink from '~/components/CardLink.vue'

import servicesData from '~/data/services.json'
import manufactureData from '~/data/manufacture.json'

export default {
  components: {
    CardLink
  },
  data () {
    return {
      services: servicesData,
      manufacture: manufactureData
    }
  },
  head: {
    title: 'Страница не найдена',
    meta: [
      { hid: 'description', name: 'description', content: 'Страницы с таким адресом на этом сайте нет' }
    ]
  }
}
</script>

<style lang="scss" scoped>
.header-404 {
  border-top: 1px solid #cccccc;
  padding-top: 2rem;
}
</style>