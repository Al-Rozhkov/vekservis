<template>
  <div>
    <page-header>
      <h1 class="page-title">
        Техническая поддержка и&nbsp;аутсорсинг непрофильных функций предприятий<br>
        Maintain and support Facilities
      </h1>
      <ul class="adv-grid">
        <li class="li">
          Единая стоимость работ на&nbsp;весь период договора
        </li>
        <li class="li">
          Комплексное обслуживание зданий и&nbsp;сооружений
        </li>
        <li class="li">
          Страхование работ по&nbsp;желанию Заказчика
        </li>
        <li class="li">
          Гарантия 1&nbsp;год на&nbsp;выполненные работы
        </li>
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

      <services-list class="mb-3" />

      <!-- <div class="row card-teasers">
        <card-link
          v-for="item in manufacture.list"
          :key="item.name"
          :item="item"
          :section="manufacture.section"
        />
      </div> -->

      <h2>
        <nuxt-link to="/clients">
          Клиенты
        </nuxt-link>
      </h2>
      <div class="row mb-3">
        <p class="col-4 offset-1">
          На&nbsp;данный момент компания ВЭК СЕРВИС осуществляет обслуживание
          объектов федеральных сетевых компаний более чем в&nbsp;40&nbsp;городах
          и&nbsp;30&nbsp;регионах&nbsp;РФ.
        </p>
        <p class="col">
          <span class="lead">300+</span>
          <br>объектов
        </p>
        <p class="col-4">
          <span class="lead"> 500&thinsp;000+ м<sup>2</sup></span>
          <br>обслуживаемых площадей
        </p>
      </div>
      <div class="row">
        <p class="col-3 offset-1">
          Компания обслуживает более 300 объектов недвижимости, в&nbsp;том числе:
        </p>
        <ul class="col-4">
          <li>Торговые центры</li>
          <li>Продуктовые гипермаркеты, супермаркеты и&nbsp;магазины у&nbsp;дома</li>
          <li>Рестораны, кафе, столовые, пекарни</li>
          <li>Банки и&nbsp;страховые компании</li>
          <li>Офисные и&nbsp;административные здания</li>
        </ul>
        <ul class="col-4">
          <li>DIY сети</li>
          <li>Распределительные центры и&nbsp;складские логистические площадки</li>
          <li>Производственные и&nbsp;промышленные комплексы</li>
          <li>Нефтегазовая отрасль</li>
        </ul>
      </div>

      <clients />
    </section>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
// import CardLink from '~/components/CardLink.vue'
import ServicesList from '~/components/ServicesList.vue'
import Clients from '~/components/Clients.vue'

export default {
  components: {
    PageHeader,
    ServicesList,
    Clients
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/init.scss';

.page-title {
  max-width: 40rem;
}

header.header {
  padding-top: 3rem;
  padding-bottom: 2rem;

  @include media-breakpoint-up(lg) {
    h1.page-title {
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

  .li {
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
