<template>
  <div class="row card-teasers">
    <card-link
      v-for="item in services"
      :key="item.name"
      :item="item"
      section="services"
    />
  </div>
</template>

<script>
import CardLink from '~/components/CardLink.vue'
import servicesData from '~/data/services.json'

export default {
  components: {
    CardLink,
  },
  data() {
    return {
      services: servicesData.list
    }
  },
}
</script>
