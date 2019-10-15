<template>
  <div class="service-teasers">
    <nuxt-link
      v-for="service in services"
      :key="service.name"
      class="service-card"
      :to="serviceLink(service.name)"
      :style="serviceBg(service.name)"
    >
      <h2 v-html="service.title" />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    services: {
      required: true
    }
  },
  methods: {
    serviceLink: function(name) {
      return '/services/' + name
    },
    serviceBg: function(name) {
      return 'background-image: url(/img/bg-services-' + name + '.jpg)'
    }
  }
}
</script>

<style lang="scss">
.service-teasers {
  margin: 0 -1px;
  display: flex;
  flex-wrap: wrap;
}

.service-card {
  position: relative;
  flex-grow: 1;
  width: 33%;
  border: 1px solid #ffffff;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  padding: 7.5rem 2rem 1.5rem 2rem;

  h2 {
    position: relative;
    z-index: 50;
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(to right, #1b0880 0%, #042a4a 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1b0880', endColorstr='#042a4a',GradientType=1 );
    opacity: 0.7;
    z-index: 0;
  }

  &:hover:before {
    background: #0c0d29;
    opacity: 0.8;
  }

  h2 {
    color: #fffcd4;
    font-size: 1rem;
    font-weight: bold;
  }
}
</style>
