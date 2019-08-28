<template>
  <no-ssr>
    <modal name="order" width="400" :minWidth="320" :maxWidth="400" height="auto" :pivotY="0.2">
      <div class="order">
        <h2 class="mt-0">{{ title }}</h2>
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
</template>

<script>
import { BFormInput } from 'bootstrap-vue'

export default {
  components: {
    BFormInput
  },
  
  props: {
    title: {
      type: String,
      required: true
    },
    selectedModel: {
      type: String,
      required: true
    }
  },

  data() {
    return {
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
    sendRequest() {
      if (!this.submitDisabled) {
        this.$modal.hide('order')

        const http = new XMLHttpRequest()
        const sendData = JSON.stringify({
          name: this.name,
          contact: this.contact,
          model: this.selectedModel
        })
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
        http.send(sendData)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/init.scss';

.order {
  padding: 2rem 1.5rem;
}

.group {
  margin-bottom: 1rem;
}

.label {
  margin-bottom: 0.5rem;
}

// Bootstrap form styles
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