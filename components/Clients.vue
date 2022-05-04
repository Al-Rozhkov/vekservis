<template>
  <ul class="clients">
    <li v-for="client in clients" :key="client.name">
      <img :src="`/clients/${client.name}.png`" :alt="client.alt">
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    clientsNum: {
      type: Number,
      default: undefined,
    },
  },
  data() {
    return {
      clientsList: [
        { name: 'sberbank', alt: 'Сбербанк' },
        { name: 'vtb', alt: 'ВТБ' },
        { name: 'rosselhozbank', alt: 'Россельхозбанк' },
        { name: 'renessans', alt: 'Ренессанс кредит' },
        { name: 'mkb', alt: 'Московский кредитный банк' },
        { name: 'dom-rf', alt: 'Дом РФ Банк' },
        { name: 'otkrytie', alt: 'Открытие' },
        { name: 'setelem', alt: 'Сетелем' },
        { name: 'magnit', alt: 'Магнит' },
        { name: 'leroy-merlin', alt: 'Leroy Merlin' },
        { name: 'befree', alt: 'Befree' },
        { name: 'mts', alt: 'МТС' },
        { name: 'mvideo', alt: 'Мвидео' },
        { name: 'eldorado', alt: 'Эльдорадо' },
        { name: 'ashan', alt: 'Ашан' },
        { name: 'finn-flare', alt: 'Finn Flare' },
        { name: 'love-republic', alt: 'Love republic' },
        { name: 'zarina', alt: 'Зарина' },
        { name: 'oodji', alt: 'Oodji' },
        { name: 'palmetta', alt: 'Palmetta' },
        { name: 'ceetrus', alt: 'Ceetrus' },
        { name: 'gamardjoba', alt: 'Грузинское кафе «Гамарджоба»' },
        { name: 'decatlon', alt: 'Decatlon' },
        { name: 'skbt', alt: 'СКБТ' },
        { name: 'transneft', alt: 'Транснефть' },
        { name: 'rosneft', alt: 'Роснефть' },
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

    padding: 0 1.5rem 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-width: 100%;
      height: auto;
    }
  }
}
</style>
