<template>
  <nuxt-link
    class="card"
    :to="`/${section}/${item.name}`"
    :style="`background-image: url(/img/small/bg-${section}-${item.name}.jpg)`"
  >
    <h2 class="h2" v-html="item.title" />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    section: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/init.scss';

.card {
  position: relative;
  border: 1px solid #ffffff;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  padding: 7.5rem 2rem 1.5rem 2rem;
  flex-grow: 1;

  @include media-breakpoint-between(sm, lg) {
    max-width: 50%;
    flex: 0 0 50%;
  }
  @include media-breakpoint-up(lg) {
    max-width: 33.33333%;
    flex: 0 0 33.33333%;
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #0a2158;
    opacity: 0.7;
    z-index: 0;
  }

  &:hover:before {
    background: #0c0d29;
    opacity: 0.8;
  }
}

.h2 {
  position: relative;
  z-index: 50;
  color: #fffcd4;
  font-size: 1rem;
  font-weight: bold;
}
</style>
