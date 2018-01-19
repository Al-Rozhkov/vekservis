<template>
  <div>
    <page-header>
      <h1 class="page-title">Эксплуатация объектов государственной и&nbsp;коммерческой недвижимости по&nbsp;всей России</h1>
      <ul class="adv-grid">
        <li>Единая стоимость работ для клиентов из&nbsp;любого региона России</li>
        <li>Комплексное обслуживание зданий и&nbsp;сооружений</li>
        <li>Страхование работ по&nbsp;желанию Заказчика</li>
        <li>Гарантия 1&nbsp;год на&nbsp;выполненные работы</li>
      </ul>
    </page-header>
    <section class="container">
      <h2>Комплексный подход</h2>
      <p>Это наш основополагающий принцип к&nbsp;решению задач, поставленных клиентом. Особенность и&nbsp;выгода такого подхода очевидна:</p>
      <div class="service-teasers">
        <nuxt-link class="service-card" v-for="service in services" :key="service.name" :to="'/services/' + service.name" v-bind:style="serviceBg(service.name)">
          <h2 v-html="service.title"></h2>
        </nuxt-link>
      </div>
      <clients :clientsList="clients" :clientsNum="12"/>
    </section>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
import Clients from '~/components/Clients.vue'
// import Services from '~/components/Services.vue'

export default {
  asyncData ({ env }) {
    return {
      services: env.services,
      clients: env.clients
    }
  },
  methods: {
    serviceBg: function (name) {
      return 'background-image: url(/img/bg-services-' + name + '.jpg)'
    }
  },
  components: {
    PageHeader,
    Clients
  }
}
</script>

<style lang="scss">
header.header {
  padding-top: 3rem;
  padding-bottom: 2rem;

  h1 {
    float: left;
    padding-right: 2rem;
  }
}

.adv-grid {
  margin: 4rem 0 0;
  padding: 0;
  color: #ffffff;
  display: flex;
  flex-wrap: wrap;

  list-style-type: none;

  width: 40%;
  float: right;

  li {
    flex-basis: 50%;
    flex-grow: 1;
    font-size: .75rem;
    padding-right: 2rem;
    padding-bottom: 2rem;
  }
}

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
    background-color: #0a2158;
    opacity: .7;
    z-index: 0;
  }

  &:hover:before {
    background: #0c0d29;
    opacity: .8;
  }

  h2 {
    color: #fffcd4;
    font-size: 1rem;
    font-weight: bold;
  }
}
</style>
