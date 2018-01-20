<template>
  <ul class="services-submenu">
    <li v-for="service in servicesList" :key="service.name">
      <nuxt-link v-bind:to="'/services/'+service.name" v-html="service.title"></nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    servicesList: {
      required: true
    }
  }
}
</script>

<style lang="scss">
.services-submenu {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 0 0;
  padding: 0;

  li {
    flex: 0 0 33.333%;
    max-width: 33.333%;
    padding: 0 3rem 2rem 0;
    
    a {
      color: #fffcd4;

      &:hover {
        color: #ffffff;
      }
    }
  }
}
</style>