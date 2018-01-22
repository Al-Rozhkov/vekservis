<template>
  <ul class="clients">
    <li v-for="client in clients" :key="client.name">
      <img :src="'/clients/' + client.name + '.png'" :alt="client.alt" />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    clientsList: {
      required: true
    },
    clientsNum: {
      type: Number,
      required: false
    }
  },
  computed: {
    clients: function () {
      return this.clientsList.slice(0, this.clientsNum)
    }
  }
}
</script>

<style lang="scss">
@import "~assets/scss/init.scss";

.clients {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 0 4rem;
  padding: 0;

  li {
    @include media-breakpoint-up(lg) {
      flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }
    
    padding: 0 1.5rem;
    align-items: center;
    justify-content: center;

    img {
      max-width: 100%;
      height: auto;
    }
  }
}
</style>