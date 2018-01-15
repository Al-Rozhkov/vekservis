<template>
  <header class="header container" v-bind:style="headerBg">
    <slot></slot>
    <transition name="slidedown">
      <h1 class="page-title" v-html="pageTitle"></h1>
    </transition>
  </header>
</template>

<script>
export default {
  computed: {
    headerBg: function () {
      return 'background-image: url(/img/bg-' + this.$route.name + '.jpg)'
    },
    pageTitle: function () {
      return this.$store.state.pageTitle
    }
  }
  /* props: {
    pageTitle: {
      type: String,
      default: 'Эксплуатация объектов государственной и&nbsp;коммерческой недвижимости по&nbsp;всей России'
    }
  } */
}
</script>

<style lang="scss">
header.header {
  background-color: #514aa1;
  background-size: cover;
  border-radius: 4px;
  overflow: hidden;
  position: relative;

  h1 {
    font-size: 2rem;
    margin-top: 3rem;
    width: 50%;
  }

  & > h1, & > div {
    z-index: 50;
    position: relative;
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(to right, #1b0880 0%,#042a4a 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1b0880', endColorstr='#042a4a',GradientType=1 );
    opacity: .7;
    z-index: 0;
  }
}

.page-title {
  display: block;
  font-size: 2.5rem;
  font-weight: normal;
  color: #ffffff;
}
</style>