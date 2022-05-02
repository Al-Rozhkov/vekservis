<template>
  <div>
    <page-header class="ph-blue ph-position-bottom">
      <header-submenu :menu="services" />
      <h1 class="page-title">
        Комплексная уборка помещений и&nbsp;территорий
      </h1>
    </page-header>

    <section class="container">
      <div class="list-cols">
        <!-- <div class="feat-col col-4">
          <p class="feat">Коммерческие объекты</p>
        </div>
        <div class="feat-col col-4">
          <p class="feat">Промышленные предприятия</p>
        </div>
        <div class="feat-col col-4">
          <p class="feat">Послестроительная уборка</p>
        </div> -->
        <div class="feat-col col-4">
          <p class="feat">
            Ежедневная контрактная уборка внутренних помещений и прилегающих
            территорий
          </p>
        </div>
        <div class="feat-col col-4">
          <p class="feat">
            Мойка окон, фасадов, стеклянных поверхностей
          </p>
        </div>
        <div class="feat-col col-4">
          <p class="feat">
            Послестроительная уборка
          </p>
        </div>
        <div class="feat-col col-4">
          <p class="feat">
            Очистка сложных поверхностей спецсредствами
          </p>
        </div>
        <div class="feat-col col-4">
          <p class="feat">
            Химчистка ковровых покрытий
          </p>
        </div>
        <div class="feat-col col-4">
          <p class="feat">
            Механизированная и ручная уборка
          </p>
        </div>
        <div class="feat-col col-4">
          <p class="feat">
            Уборка и вывоз снега
          </p>
        </div>
        <div class="feat-col col-4">
          <p class="feat">
            Услуги альпинистов
          </p>
        </div>
        <div class="feat-col col-4">
          <p class="feat">
            Благоустройство территорий, садовнические работы
          </p>
        </div>
      </div>

      <h2>5 причин, почему выбирают нас:</h2>

      <section class="row">
        <div class="col-5">
          <img class="img" src="/img/cleaning.jpg">
        </div>
        <div class="col-7">
          <h3>1. Профессиональные уборщики</h3>
          <p>
            Все наши сотрудники прошли отбор и обучение по специальной программе
          </p>
          <h3>2. Квалифицированные менеджеры</h3>
          <p>Средний стаж работы в данной области более 7 лет.</p>
          <h3>3. Сертифицированные средства</h3>
          <p>
            Cредства для уборки известных производителей, абсолютно безвредных
            для людей и животных
          </p>
          <h3>4. Профессиональное оборудование</h3>
          <p>Качественное оборудование для химчистки марки Karcher</p>
          <h3>5. Высокие стандарты уборки</h3>
          <p>Четкий регламент проведения уборки гарантирует полную чистоту помещения</p>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
import HeaderSubmenu from '~/components/HeaderSubmenu.vue'
// import NodeSections from '~/components/NodeSections.vue'

import servicesData from '~/data/services.json'

export default {
  components: {
    PageHeader,
    HeaderSubmenu,
  },

  data() {
    return {
      services: servicesData,
    }
  },

  head: {
    title: 'Комплексная уборка помещений и территорий. ВЭК СЕРВИС',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'ВЭК СЕРВИС выполняет уборку коммерческих объектов, промышленных предприятий, а также осуществляет послестроительную уборку.',
      },
    ],
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/init.scss';

.list-cols {
  padding: 2rem 0;
}

.feat-col {
  padding-right: 1.5rem;
}

.feat {
  font-size: 1.2rem;
  position: relative;
  margin-bottom: 2rem;

  &:before {
    content: ' ';
    display: block;
    width: 2rem;
    height: 4px;
    background-color: rgba(#000000, 0.5);
    opacity: 0.15;
    margin-bottom: 0.4rem;
  }
}

.img {
  border-radius: $border-radius-sm;
}

.col-5 {
  padding-right: 2rem;
}

h3 {
  margin-bottom: 0.5rem;
}
</style>
