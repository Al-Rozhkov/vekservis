<template>
  <div>
    <page-header class="ph-blue ph-position-center">
      <header-submenu :menu="menu" />
      <h1 class="page-title">Пост сварочный ПС5-001</h1>
    </page-header>
    <section class="container">
      <div class="p-3 row">
        <div class="col-6 col-left">
          <p>Пост сварочный ПС5-001 предназначен для ограждения рабочих мест при проведении сварочных, слесарных и&nbsp;других видов работ, и&nbsp;защиты окружающих от&nbsp;излучения, возникающего во&nbsp;время сварки. Возможность установки трех столов, одновременно. Вентиляция состоит из&nbsp;16&nbsp;диффузоров с&nbsp;регулировкой, позволяющих регулировать мощность оттока воздуха и&nbsp;варить в&nbsp;любой зоне сварочного поста.</p>
          <p>Сварочная кабина ПС5-001 представляет конструкцию из&nbsp;сборно-разборного каркаса и&nbsp;закрепленными на&nbsp;нем металлическими панелями:</p>
          <ul>
            <li>каркас из&nbsp;профильной трубы сечением 60&times;60&times;3&nbsp;мм;</li>
            <li>металлические панели толщиной 1&nbsp;мм с&nbsp;ребрами жесткости;</li>
            <li>крепеж М12.</li>
          </ul>
          <p>Сварочный пост изготовлен на&nbsp;современном высокотехнологичном оборудовании: станки лазерной резки, станки листогибочные с&nbsp;ЧПУ, полуавтоматическая сварка.</p>
        </div>

        <div class="col-6 list-img">
          <img
            v-for="item in 5"
            :key="item"
            :src="`/img/welding-post/small/${item}.jpg`"
            v-img="{
            src: `/img/welding-post/${item}.jpg`,
            group: 'welding-post',
            title: 'Сварочный пост'
          }"
            class="gi"
          />
        </div>
      </div>

      <div class="p-3 row">
        <div class="col-6 col-left">
          <h2>Технические характеристики</h2>
          <ul>
            <li>Габаритные размеры: 5,06&times;5,06&times;2,8&nbsp;м</li>
            <li>Масса: 900&nbsp;кг</li>
            <li>Стационарный</li>
            <li>Сборно-разборный</li>
            <li>Плоская крыша</li>
            <li>Возможность установки вытяжной вентиляции (под заказ)</li>
            <li>Установка сварочных штор (под заказ)</li>
            <li>Возможность установки кран-балки (под заказ)</li>
            <li>Возможность покраска в&nbsp;любой цвет по&nbsp;таблице RAL.</li>
          </ul>
        </div>

        <div class="col-5">
          <h2>Стоимость</h2>
          <dl>
            <dt>Сварочный пост неокрашенный стандартная комплектация:</dt>
            <dd>
              <span class="price-large">290 000,00 рублей</span>
            </dd>
          </dl>

          <h4>Дополнительно</h4>
          <dl>
            <dt>Покраска</dt>
            <dd class="dd">
              <span class="price">40 296,00 рублей</span>
            </dd>
            <dt>Установка вентиляции в сборе</dt>
            <dd class="dd">
              <span class="price">70 000,00 рублей</span>
            </dd>
            <dt>Завесы(Шторы) на 5 секций размером 1,76х2,44 м</dt>
            <dd class="dd">
              <span class="price">75 190,00 рублей</span>
            </dd>
          </dl>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PageHeader from "~/components/PageHeader.vue";
import HeaderSubmenu from "~/components/HeaderSubmenu.vue";
// import NodeSections from '~/components/NodeSections.vue'

import subpagesData from "~/data/manufacture.json";

export default {
  data() {
    return {
      menu: subpagesData
    };
  },
  head: {
    title: "Пост сварочный ПС5-001. ВЭК СЕРВИС",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Сварочный пост предназначен для ограждения рабочих мест при проведении сварочных, слесарных и других видов работ, и защиты окружающих от излучения, возникающего во время сварки."
      }
    ]
  },
  components: {
    PageHeader,
    HeaderSubmenu
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/init.scss";

.price,
.price-large {
  background: $yellow;
}

.price-large {
  font-size: 1.25rem;
  font-weight: bold;
}

.dd {
  margin-bottom: 1rem;
}
</style>
