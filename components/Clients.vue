<template>
  <ul class="clients">
    <li v-for="client in clients" :key="client.name">
      <img :src="'/clients/' + client.name + '.png'" :alt="client.alt" />
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      clientsList: [
        { name: 'vtb24', alt: 'ВТБ24' },
        // { name: 'acoola', alt: 'Acoola' },
        { name: 'alfa-bank', alt: 'Альфа-банк' },
        { name: 'befree', alt: 'Befree' },
        { name: 'mts', alt: 'МТС' },
        { name: 'nike', alt: 'Nike' },
        { name: 'mvideo', alt: 'Мвидео' },
        { name: 'sberbank', alt: 'Сбербанк' },
        { name: 'eldorado', alt: 'Эльдорадо' },
        // { name: 'concept-club', alt: 'Concept Club' },
        { name: 'vans', alt: 'Vans' },
        { name: 'restore', alt: 'Рестор' },
        { name: 'wrangler', alt: 'Wrangler' },
        { name: 'finn-flare', alt: 'Finn Flare' },
        // { name: 'x5', alt: 'X5 retail group' },
        { name: 'ashan', alt: 'Ашан' },
        { name: 'lego', alt: 'Lego' },
        { name: 'love-republic', alt: 'Love republic' },
        { name: 'samsung', alt: 'Самсунг' },
        { name: 'sony', alt: 'Сони' },
        { name: 'lee', alt: 'Lee' },
        { name: 'zarina', alt: 'Зарина' },
        { name: 'mango', alt: 'Mango' }
      ]
    }
  },
  props: {
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
    flex: 0 0 50%;
    max-width: 50%;
    
    @include media-breakpoint-between(sm, md) {
      flex: 0 0 33.33333%;
      max-width: 33.33333%;
    }
    
    @include media-breakpoint-between(md, lg) {
      flex: 0 0 25%;
      max-width: 25%;
    }
    
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