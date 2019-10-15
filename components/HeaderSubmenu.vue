<template>
  <ul class="header-submenu">
    <li v-for="node in menu.list" :key="node.name" class="li">
      <nuxt-link
        :to="`/${menu.section}/${node.name}`"
        class="a"
        v-html="node.title"
      />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    menu: {
      required: true,
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/init.scss';

.header-submenu {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 2rem;
  padding: 0;
}

.li {
  padding: 0 2rem 1rem 0;

  @include media-breakpoint-up(lg) {
    flex: 0 0 33.333%;
    max-width: 33.333%;
    padding: 0 3rem 2rem 0;
  }
}

.a {
  color: #fffcd4;

  &:hover {
    color: #ffffff;
  }
}
</style>
