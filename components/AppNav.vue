<template>
  <div class="leader container">
    <logo />
    <ul class="main-menu" @keyup.enter="onEnter" tabindex="0">
      <li>
        <nuxt-link to="/services"> Услуги </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/clients"> Опыт и клиенты </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/manufacture"> Производство </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/advantages"> Преимущества </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/contact"> Контакты </nuxt-link>
      </li>
    </ul>
    <div class="leader-right">
      <div class="phone">
        +7(8412) 20-73-18
      </div>
      <nuxt-link class="btn btn-sm btn-primary mb-1" to="#feedback-form">
        Оставьте заявку
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/AppLogo.vue'
export default {
  components: {
    Logo
  },
  methods: {
    onEnter () {
      debugger
    }
  }
}
</script>

<style lang="scss">
@import '~assets/scss/init.scss';

.leader {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  padding-top: 1.5rem;
  padding-bottom: 0.5rem;
}

.leader-right {
  margin-left: auto;
  padding-left: 2rem;
  text-align: right;
}

.phone {
  font-size: 1.5rem;
  line-height: 1.75;
  margin-bottom: 0.25rem;
}

.logo {
  margin-left: 0;
  margin-right: 2rem;
  // width: 242px;

  a {
    display: block;
  }

  @include media-breakpoint-up(lg) {
    margin-left: -51px;
  }
}

.main-menu {
  list-style-type: none;
  padding: 0;
  margin: 0.2rem 0 0.5rem;

  @include media-breakpoint-down(lg) {
    flex-grow: 1;
  }

  li {
    display: inline-block;
    margin-right: 1.25rem;
    padding: 0.5rem 0;
  }
}
</style>
