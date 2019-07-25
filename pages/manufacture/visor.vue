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
          <p>
            <button class="btn btn-yellow" @click="openModel">Заказать</button>
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
          <p>
            <button class="btn btn-yellow" @click="openModel(true)">Заказать</button>
          </p>
        </div>
      </div>
    </section>

    <no-ssr>
      <modal name="order" width="400" :minWidth="320" :maxWidth="400" height="auto" :pivotY="0.2">
        <div class="order">
          <h2>Заказ защитного козырька</h2>
          <div class="group" role="group">
            <label class="label" for="input-name">Ваше имя:</label>
            <b-form-input id="input-name" v-model="name" placeholder="Иван Иванов" trim></b-form-input>
          </div>
          <div class="group" role="group">
            <label class="label" for="input-contact">Ваш телефон или электронная почта:</label>
            <b-form-input id="input-contact" v-model="contact" placeholder="+7 927 222 3333" trim></b-form-input>
          </div>
          <p class="text-small">
            Отправляя эту форму вы соглашаетесь на обработку ваших персональных данных. Ознакомьтесь с&nbsp;<nuxt-link to="/policy">политикой конфиденциальности.</nuxt-link>
          </p>
          <button :disabled="submitDisabled" @click="sendRequest" class="btn">Отправить</button>
        </div>
      </modal>
    </no-ssr>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
import HeaderSubmenu from '~/components/HeaderSubmenu.vue'
import { BFormInput } from 'bootstrap-vue'

import subpagesData from '~/data/manufacture.json'

export default {
  components: {
    PageHeader,
    HeaderSubmenu,
    BFormInput
  },

  data() {
    return {
      menu: subpagesData,
      selectedModel: false,
      name: '',
      contact: ''
    }
  },

  computed: {
    submitDisabled() {
      return this.name.length < 3 || this.contact.length < 6
    }
  },

  methods: {
    openModel(pro = false) {
      if (pro) {
        this.selectedModel = true
      }
      this.$modal.show('order')
    },

    sendRequest() {
      if (!this.submitDisabled) {
        this.$modal.hide('order')
        const model = this.selectedModel ? 'Visor Pro Lite' : 'Visor Lite'
        const http = new XMLHttpRequest()
        const params = JSON.stringify({
          name: this.name,
          contact: this.contact,
          model: model
        })
        console.log(window.location)
        const ntf = 'ntforder'
        http.open('POST', `https://vekservis.ru/order/${ntf}.php`, true)

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

.order {
  padding: 2rem 1.5rem;
}

.group {
  margin-bottom: 1rem;
}

.btn {
  // background-color: #ffcd2b;
  background-color: $link-color;
  border-color: transparent;
  border-width: 0px;
  border-radius: 6px;
  color: #ffffff;
  cursor: pointer;
  justify-content: center;
  padding-bottom: 0.75rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 0.75rem;
  text-align: center;
  white-space: nowrap;
  font-weight: bold;

  &:hover {
    background-color: darken($link-color, 10%);
  }

  // Disabled comes first so active can properly restyle
  &.disabled,
  &:disabled {
    background-color: #cccccc;
    opacity: $btn-disabled-opacity;
    @include box-shadow(none);
  }
}

.btn-yellow {
  background-color: #ffd30d;
  color: #000000;

  &:hover {
    background-color: darken(#ffd30d, 5%);
  }
}

.label {
  margin-bottom: 0.5rem;
}

.form-control {
  display: block;
  width: 100%;
  height: $input-height;
  padding: $input-padding-y $input-padding-x;
  font-family: $input-font-family;
  @include font-size($input-font-size);
  font-weight: $input-font-weight;
  line-height: $input-line-height;
  color: $input-color;
  background-color: $input-bg;
  background-clip: padding-box;
  border: $input-border-width solid $input-border-color;

  // Note: This has no effect on <select>s in some browsers, due to the limited stylability of `<select>`s in CSS.
  @include border-radius($input-border-radius, 0);

  @include box-shadow($input-box-shadow);
  @include transition($input-transition);

  // Unstyle the caret on `<select>`s in IE10+.
  &::-ms-expand {
    background-color: transparent;
    border: 0;
  }

  // Customize the `:focus` state to imitate native WebKit styles.
  &:focus {
    color: $input-focus-color;
    background-color: $input-focus-bg;
    border-color: $input-focus-border-color;
    outline: 0;
    // Avoid using mixin so we can pass custom focus shadow properly
    @if $enable-shadows {
      box-shadow: $input-box-shadow, $input-focus-box-shadow;
    } @else {
      box-shadow: $input-focus-box-shadow;
    }
  }

  // Placeholder
  &::placeholder {
    color: $input-placeholder-color;
    // Override Firefox's unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526.
    opacity: 1;
  }

  // Disabled and read-only inputs
  //
  // HTML5 says that controls under a fieldset > legend:first-child won't be
  // disabled if the fieldset is disabled. Due to implementation difficulty, we
  // don't honor that edge case; we style them as disabled anyway.
  &:disabled,
  &[readonly] {
    background-color: $input-disabled-bg;
    // iOS fix for unreadable disabled content; see https://github.com/twbs/bootstrap/issues/11655.
    opacity: 1;
  }
}
</style>
