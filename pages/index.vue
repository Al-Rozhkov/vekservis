<template>
  <div>
    <page-header>
      <h1 class="page-title">
        Обслуживание и&nbsp;управление объектами коммерческой
        и&nbsp;государственной недвижимости по&nbsp;всей России
      </h1>
      <ul class="adv-grid">
        <li>
          Единая стоимость работ для клиентов из&nbsp;любого региона России
        </li>
        <li>Комплексное обслуживание зданий и&nbsp;сооружений</li>
        <li>Страхование работ по&nbsp;желанию Заказчика</li>
        <li>Гарантия 1&nbsp;год на&nbsp;выполненные работы</li>
      </ul>
    </page-header>
    <section class="container">
      <h2>Комплексный подход</h2>
      <div class="row">
        <p class="col-4">
          Это наш основополагающий принцип к&nbsp;решению задач, поставленных
          клиентом. Особенность и&nbsp;выгода такого подхода очевидна:
        </p>
        <ul class="col-4">
          <li>единый подрядчик;</li>
          <li>единая ответственность;</li>
          <li>единая служба поддержки;</li>
          <li>соблюдение единых стандартов обслуживания;</li>
        </ul>
        <ul class="col-4">
          <li>
            экономия времени на&nbsp;контроль и&nbsp;обработку информации;
          </li>
          <li>сокращение штатной численности клиента;</li>
          <li>оптимизация доходной части;</li>
          <li>дополнительные услуги на&nbsp;безвозмездной основе.</li>
        </ul>
      </div>

      <div class="row card-teasers">
        <card-link
          v-for="item in services.list"
          :key="item.name"
          :item="item"
          :section="services.section"
        />
        <div style="width: 100%; height: 1rem;" />
        <card-link
          v-for="item in manufacture.list"
          :key="item.name"
          :item="item"
          :section="manufacture.section"
        />
      </div>

      <h2>
        <nuxt-link to="/clients">
          Клиенты
        </nuxt-link>
      </h2>
      <div class="row">
        <p class="col-4 offset-1">
          На&nbsp;данный момент компания ВЭК СЕРВИС осуществляет обслуживание
          объектов федеральных сетевых компаний более чем в&nbsp;40&nbsp;городах
          и&nbsp;30&nbsp;регионах&nbsp;РФ.
        </p>
        <p class="col">
          <span class="lead">300+</span>
          <br >объектов
        </p>
        <p class="col-4">
          <span class="lead">
            200&thinsp;000+ м
            <sup>2</sup>
          </span>
          <br >обслуживаемых площадей
        </p>
      </div>
      <clients />
    </section>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
import CardLink from '~/components/CardLink.vue'
import Clients from '~/components/Clients.vue'

import servicesData from '~/data/services.json'
import manufactureData from '~/data/manufacture.json'

export default {
  components: {
    PageHeader,
    CardLink,
    Clients
  },
  data() {
    return {
      services: servicesData,
      manufacture: manufactureData
    }
  }
}
</script>

<style lang="scss">
@import '~assets/scss/init.scss';

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
    @include media-breakpoint-up(lg) {
      flex: 1 1 50%;
      max-width: 50%;
    }
    font-size: 0.75rem;
    padding-right: 2rem;
    padding-bottom: 2rem;
  }
}
</style>
