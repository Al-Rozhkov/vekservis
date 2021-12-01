<template>
  <div>
    <page-header class="ph-teal ph-position-bottom">
      <header-submenu :menu="menu" />
      <h1 class="page-title">
        Защитный козырек наружного блока кондиционера
      </h1>
    </page-header>
    <section class="section">
      <div class="row">
        <div class="col-8 offset-1">
          <p class="intro">
            Защитный козырек предназначен для защиты наружного блока
            кондиционера от&nbsp;осадков, падения снега и&nbsp;наледи
            с&nbsp;крыш домов. Конструктивно представляет собой силовой каркас
            с&nbsp;прикрепляемой к&nbsp;нему крышкой посредством резьбовых
            шпилек и&nbsp;гаек с&nbsp;внутренней стороны козырька. Крышка
            представляет собой панель из&nbsp;листовой конструкционной стали
            толщиной 1,5&nbsp;мм. С&nbsp;внутренней стороны крышки приварены
            резьбовые шпильки М6.
          </p>
          <p class="intro">
            Силовой каркас и&nbsp;крышка покрыты порошковой полимерной краской.
            Цвет покрытия любой по&nbsp;таблице RAL. Базовый цвет&nbsp;&mdash;
            матовый белый.
          </p>
        </div>
        <div class="col-3">
          <p>
            <span class="lead">3 года</span>
            <br >
            <span>гарантии на&nbsp;лакокрасочное покрытие</span>
          </p>
        </div>
      </div>

      <div class="row p-3">
        <div class="col-7">
          <img
            src="/img/visor/visor-lite.jpg"
            alt="Защитный козырек наружного блока кондиционера Visor Lite"
            class="img"
          />
        </div>

        <div class="col-5">
          <h2 class="lead">
            Visor Lite
            <span class="small">v.1.0</span>
          </h2>
          <p>
            <span class="price">3&nbsp;759 руб.</span>
          </p>
          <p>
            Силовой каркас выполнен сварным из квадратной трубы 20х20х2&nbsp;мм.
          </p>
          <p><strong>Габаритные размеры:</strong> 1100х560х380&nbsp;мм</p>
          <p><strong>Вес:</strong> 13&nbsp;кг</p>
          <div class="list-img">
            <img
              v-for="item in 8"
              :key="item"
              v-img="{
                src: `/img/visor/l${item}.jpg`,
                group: 'visor-lite',
                title: 'Защитный козырек Visor Lite'
              }"
              :src="`/img/visor/small/l${item}.jpg`"
              class="gi"
            />
          </div>
          <p>
            <button class="btn btn-yellow" @click="openModel('Visor Lite')">
              Заказать
            </button>
          </p>
        </div>
      </div>

      <div class="row p-3">
        <div class="col-7">
          <img
            src="/img/visor/visor-pro-lite.jpg"
            alt="Защитный козырек наружного блока кондиционера Visor Pro Lite"
            class="img"
          />
        </div>
        <div class="col-5">
          <h2 class="lead">
            Visor Pro Lite
            <span class="small">v.1.0</span>
          </h2>
          <h3>
            <span class="price">5&nbsp;500 руб.</span>
          </h3>
          <p>
            Силовой каркас выполнен сварным из конструкционной листовой стали
            толщиной 2&nbsp;мм.
          </p>
          <p><strong>Габаритные размеры:</strong> 1100х600х260&nbsp;мм</p>
          <p><strong>Вес:</strong> 14&nbsp;кг</p>
          <div class="list-img">
            <img
              v-for="item in 4"
              :key="item"
              v-img="{
                src: `/img/visor/p${item}.jpg`,
                group: 'visor-pro',
                title: 'Защитный козырек Visor Lite'
              }"
              :src="`/img/visor/small/p${item}.jpg`"
              class="gi"
            />
          </div>
          <p>
            <button class="btn btn-yellow" @click="openModel('Visor Pro Lite')">
              Заказать
            </button>
          </p>
        </div>
      </div>
    </section>

    <order-modal
      :selected-model="selectedModel"
      title="Заказ защитного козырька"
    />
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
import HeaderSubmenu from '~/components/HeaderSubmenu.vue'
import OrderModal from '~/components/OrderModal.vue'

import subpagesData from '~/data/manufacture.js'

export default {
  components: {
    PageHeader,
    HeaderSubmenu,
    OrderModal
  },

  data() {
    return {
      menu: subpagesData,
      selectedModel: ''
    }
  },

  methods: {
    openModel(model) {
      if (model) {
        this.selectedModel = model
      }
      this.$modal.show('order')
    }
  },

  head: {
    title: 'Защитный козырек наружного блока кондиционера. ВЭК СЕРВИС',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Защитный козырек предназначен для защиты наружного блока кондиционера от осадков, падения снега и наледи с крыш домов.'
      }
    ]
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/init.scss';

.intro {
  max-width: 860px;
}

.price {
  background: $yellow;
  font-size: 1.5rem;
  font-weight: bold;
}

.gallery {
  padding: 1rem;
  margin-left: 50%;
}

.gi {
  max-width: 50%;
}
</style>
