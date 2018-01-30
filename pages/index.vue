<template>
  <div>
    <page-header>
      <h1 class="page-title">Обслуживание и&nbsp;управление объектами коммерческой и&nbsp;государственной недвижимости по&nbsp;всей России</h1>
      <ul class="adv-grid">
        <li>Единая стоимость работ для клиентов из&nbsp;любого региона России</li>
        <li>Комплексное обслуживание зданий и&nbsp;сооружений</li>
        <li>Страхование работ по&nbsp;желанию Заказчика</li>
        <li>Гарантия 1&nbsp;год на&nbsp;выполненные работы</li>
      </ul>
    </page-header>
    <section class="container">
      <h2>Комплексный подход</h2>
      <div class="row">
        <p class="col-4">Это наш основополагающий принцип к&nbsp;решению задач, поставленных клиентом. Особенность и&nbsp;выгода такого подхода очевидна:</p>
        <ul class="col-4">
          <li>единый подрядчик;</li><li>единая ответственность;</li><li>единая служба поддержки;</li><li>соблюдение единых стандартов обслуживания;</li>
        </ul>
        <ul class="col-4">
          <li>экономия времени на&nbsp;контроль и&nbsp;обработку информации;</li><li>сокращение штатной численности клиента;</li><li>оптимизация доходной части;</li><li>дополнительные услуги на&nbsp;безвозмездной основе.</li>
        </ul>
      </div>
      <div class="service-teasers">
        <nuxt-link class="service-card" v-for="service in services" :key="service.name" :to="'/services/' + service.name" v-bind:style="'background-image: url(/img/small/bg-services-' + service.name + '.jpg)'">
          <h2 v-html="service.title"></h2>
        </nuxt-link>
      </div>
      <h2><nuxt-link to="/clients">Клиенты</nuxt-link></h2>
      <div class="row">
        <p class="col-4 offset-1">На&nbsp;данный момент компания ВЭК СЕРВИС осуществляет обслуживание объектов федеральных сетевых компаний более чем в&nbsp;40&nbsp;городах и&nbsp;30&nbsp;регионах&nbsp;РФ.</p>
        <p class="col"><span class="lead">300+</span><br />объектов</p>
        <p class="col-4"><span class="lead">100&thinsp;000+ м<sup>2</sup></span><br />обслуживаемых площадей</p>
      </div>
      <clients/>
    </section>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
import Clients from '~/components/Clients.vue'

export default {
  asyncData ({ env }) {
    return {
      services: env.services
    }
  },
  components: {
    PageHeader,
    Clients
  }
}
</script>

<style lang="scss">
@import "~assets/scss/init.scss";

header.header {
  padding-top: 3rem;
  padding-bottom: 2rem;

  @include media-breakpoint-up(lg) {
    h1 {
      float: left;
      padding-right: 2rem;
    }
  }
}

.adv-grid {
  margin: 4rem 0 0;
  padding: 0;
  color: #ffffff;
  display: flex;
  flex-wrap: wrap;

  list-style-type: none;

  @include media-breakpoint-up(lg) {
    width: 40%;
    float: right;
  }

  li {
    flex-basis: 50%;
    flex-grow: 1;
    font-size: .75rem;
    padding-right: 2rem;
    padding-bottom: 2rem;
  }
}

.service-teasers {
  margin: 3rem -1px 4rem;
  display: flex;
  flex-wrap: wrap;
}

.service-card {
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
