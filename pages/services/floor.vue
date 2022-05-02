<template>
  <div>
    <page-header class="ph-blue ph-position-bottom">
      <header-submenu :menu="services" />
      <h1 class="page-title">
        Ремонт и&nbsp;устройство промышленных полов
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
            Ремонт всех типов промышленных полов
          </p>
        </div>
        <div class="feat-col col-4">
          <p class="feat">
            Капитальный ремонт промышленных полов
          </p>
        </div>
        <div class="feat-col col-4">
          <p class="feat">
            Реконструкция полов
          </p>
        </div>
        <div class="feat-col col-4">
          <p class="feat">
            Устройство рамп, пандусов, аппарелей
          </p>
        </div>
        <div class="feat-col col-4">
          <p class="feat">
            Устройство полимерных полов
          </p>
        </div>
        <div class="feat-col col-4">
          <p class="feat">
            Устройство тонкослойных полимерных покрытий
          </p>
        </div>
        <div class="feat-col col-4">
          <p class="feat">
            Устройство бетонных полов
          </p>
        </div>
        <div class="feat-col col-4">
          <p class="feat">
            Устройство топинговых полов
          </p>
        </div>
        <div class="feat-col col-4">
          <p class="feat">
            Устройство полеуретан-цементных полов
          </p>
        </div>
        <div class="feat-col col-4">
          <p class="feat">
            Устройство полов с железнением
          </p>
        </div>
      </div>

      <div class="p-3 list-img">
        <nuxt-img
          v-for="item in 4"
          :key="item"
          v-img="{
            src: `/img/floor/done_${item}.jpg`,
            group: 'floor',
            title: 'Образцы полов',
          }"
          :src="`/floor/done_${item}.jpg`"
          preset="square160"
        />
      </div>

      <h2>Почему нам доверяют?</h2>

      <section class="row">
        <div class="col-4">
          <div class="b">
            <UilFileCheckAlt size="2rem" />
          </div>
          <h3>Заключаем реальный договор</h3>
          <p>По договору вы получаете гарантию на работу</p>
        </div>
        <div class="col-4">
          <div class="b">
            <UilMoneyStack size="2rem" />
          </div>
          <h3>Оплата по факту</h3>
          <p>Вы видите за что платите</p>
        </div>
        <div class="col-4">
          <div class="b">
            <UilStar size="2rem" />
          </div>
          <h3>Лучшую цену</h3>
          <p>
            Мы работаем с крупными поставщиками стройматериалов и имеем хорошие
            скидки
          </p>
        </div>
        <div class="col-4">
          <div class="b">
            <UilRulerCombined size="2rem" />
          </div>
          <h3>Внимание к мелочам</h3>
          <p>
            Мы соблюдаем все технологии а также используем свои наработки для
            улучшения эксплуатационных свойств
          </p>
        </div>
        <div class="col-4">
          <div class="b">
            <UilShoppingCartAlt size="2rem" />
          </div>
          <h3>Закупим и доставим материалы</h3>
          <p>
            Всю работу по подбору, закупки и доставки берем на себя. (если это
            требуется)
          </p>
        </div>
        <div class="col-4">
          <div class="b">
            <UilHourglass size="2rem" />
          </div>
          <h3>Выполняем все работы в срок</h3>
          <p>
            Нам не интересно затягивать сроки т.к. нам попросту за это не платят
          </p>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
import HeaderSubmenu from '~/components/HeaderSubmenu.vue'
import { UilFileCheckAlt, UilMoneyStack, UilStar, UilRulerCombined, UilShoppingCartAlt, UilHourglass } from '@iconscout/vue-unicons'

import servicesData from '~/data/services.json'

export default {
  components: {
    PageHeader,
    HeaderSubmenu,
    UilFileCheckAlt,
    UilMoneyStack,
    UilStar,
    UilRulerCombined,
    UilShoppingCartAlt,
    UilHourglass,
  },

  data() {
    return {
      services: servicesData,
    }
  },

  head: {
    title: 'Ремонт и устройство промышленных полов. ВЭК СЕРВИС',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Ремонтируем промышленные полы всех типов с гарантией до 3 лет. Работаем по всей России.',
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

  &::before {
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

.col-4 {
  padding-right: 2rem;
}

h3 {
  margin-bottom: 0.5rem;
}

.b {
  width: 4rem;
  height: 4rem;
  padding: 0.5rem;
  background: $yellow;
  border-radius: 50%;
  margin-top: 2rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
