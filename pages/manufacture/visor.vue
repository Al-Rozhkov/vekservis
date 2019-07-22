<template>
  <div>
    <page-header class="ph-teal ph-position-bottom">
      <header-submenu :menu="menu" />
      <h1 class="page-title">Защитный козырек наружного блока кондиционера</h1>
    </page-header>
    <section class="section">
      <div class="row">
        <div class="col-8 offset-1">
          <p
            class="intro"
          >Защитный козырек предназначен для защиты наружного блока кондиционера от&nbsp;осадков, падения снега и&nbsp;наледи с&nbsp;крыш домов. Конструктивно представляет собой силовой каркас с&nbsp;прикрепляемой к&nbsp;нему крышкой посредством резьбовых шпилек и&nbsp;гаек с&nbsp;внутренней стороны козырька. Крышка представляет собой панель из&nbsp;листовой конструкционной стали толщиной 1,5&nbsp;мм. С&nbsp;внутренней стороны крышки приварены резьбовые шпильки М6.</p>
          <p
            class="intro"
          >Силовой каркас и&nbsp;крышка покрыты порошковой полимерной краской. Цвет покрытия любой по&nbsp;таблице RAL. Базовый цвет&nbsp;&mdash; матовый белый.</p>
        </div>
        <div class="col-3">
          <p>
            <span class="lead">3 года</span>
            <br />
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
            <span class="price" @click="sendRequest">3&nbsp;759 руб.</span>
          </p>
          <p>Силовой каркас выполнен сварным из квадратной трубы 20х20х2&nbsp;мм.</p>
          <p>
            <strong>Габаритные размеры:</strong> 1100х560х380&nbsp;мм
          </p>
          <p>
            <strong>Вес:</strong> 13&nbsp;кг
          </p>
          <div class="list-img">
            <img
              v-for="item in 8"
              :key="item"
              :src="`/img/visor/small/l${item}.jpg`"
              v-img="{
                  src: `/img/visor/l${item}.jpg`,
                  group: 'visor-lite',
                  title: 'Защитный козырек Visor Lite'
                }"
              class="gi"
            />
          </div>
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
            <span class="price">5&nbsp;000 руб.</span>
          </h3>
          <p>Силовой каркас выполнен сварным из конструкционной листовой стали толщиной 2&nbsp;мм.</p>
          <p>
            <strong>Габаритные размеры:</strong> 1100х600х260&nbsp;мм
          </p>
          <p>
            <strong>Вес:</strong> 14&nbsp;кг
          </p>
          <div class="list-img">
            <img
              v-for="item in 4"
              :key="item"
              :src="`/img/visor/small/p${item}.jpg`"
              v-img="{
                  src: `/img/visor/p${item}.jpg`,
                  group: 'visor-pro',
                  title: 'Защитный козырек Visor Lite'
                }"
              class="gi"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
import HeaderSubmenu from '~/components/HeaderSubmenu.vue'

import subpagesData from '~/data/manufacture.json'

export default {
  components: {
    PageHeader,
    HeaderSubmenu
  },

  data() {
    return {
      menu: subpagesData
    }
  },

  methods: {
    sendRequest() {
      const http = new XMLHttpRequest()
      const params = JSON.stringify({
        name: 'Vek'
      })
      http.open('POST', 'https://vekservis.now.sh/api/order', true)

      //Send the proper header information along with the request
      http.setRequestHeader('Content-type', 'application/json')

      http.onreadystatechange = function() {
        //Call a function when the state changes.
        if (http.readyState == 4 && http.status == 200) {
          console.log(http.responseText)
        }
      }
      http.send(params)
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
