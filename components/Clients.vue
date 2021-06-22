<template>
  <ul class="clients">
    <li v-for="client in clients" :key="client.name">
      <img :src="`/clients/${client.name}.png`" :alt="client.alt" />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    clientsNum: {
      type: Number,
      required: false,
    },
  },
  data() {
    return {
      clientsList: [
        { name: 'magnit', alt: 'Магнит' },
        { name: 'leroy-merlin', alt: 'Leroy Merlin' },
        { name: 'vtb', alt: 'ВТБ' },
        { name: 'befree', alt: 'Befree' },
        { name: 'mts', alt: 'МТС' },
        { name: 'mvideo', alt: 'Мвидео' },
        { name: 'sberbank', alt: 'Сбербанк' },
        { name: 'eldorado', alt: 'Эльдорадо' },
        { name: 'finn-flare', alt: 'Finn Flare' },
        { name: 'ashan', alt: 'Ашан' },
        { name: 'love-republic', alt: 'Love republic' },
        { name: 'zarina', alt: 'Зарина' },
        { name: 'decatlon', alt: 'Decatlon' },
        { name: 'rosselhozbank', alt: 'Россельхозбанк' },
        { name: 'renessans', alt: 'Ренессанс кредит' },
        { name: 'skbt', alt: 'СКБТ' },
        { name: 'mkb', alt: 'Московский крудитный банк' },
        { name: 'setelem', alt: 'Сетелем' },
        { name: 'dom-rf', alt: 'Дом РФ Банк' },
        { name: 'palmetta', alt: 'Palmetta' },
        // { name: 'alfa-bank', alt: 'Альфа-банк' },
        // { name: 'nike', alt: 'Nike' },
        // { name: 'vans', alt: 'Vans' },
        // { name: 'wrangler', alt: 'Wrangler' },
        // { name: 'sony', alt: 'Сони' },
      ],
    }
  },

  computed: {
    clients() {
      return this.clientsList.slice(0, this.clientsNum)
    },
  },
}
</script>

<style lang="scss">
@import '~assets/scss/init.scss';

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
