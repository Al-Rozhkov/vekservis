<template>
  <div class="logo">
    <nuxt-link to="/">
      <img src="~assets/img/logo.png" />
    </nuxt-link>
  </div>
</template>

<script>
/* <div v-if="front" class="logo">
    <img src="~assets/img/logo.png" />
  </div>
  <div v-else class="logo">
    <a href="/">
      <img src="~assets/img/logo.png" />
    </a>
  </div>

export default {
  computed: {
    front: function () {
      let result = false
      if (this.$route.name === 'index') { result = true }
      return result
    }
  }
} */
</script>

<style>
.logo {
  margin-left: -51px;
  margin-right: 3rem;
  width: 184px;
}
.logo a {
  display: block;
}
</style>
