<template>
  <client-only>
    <modal
      name="order"
      width="400"
      :min-width="320"
      :max-width="400"
      height="auto"
      :pivot-y="0.2"
    >
      <div class="order">
        <h2 class="mt-0">
          {{ title }}
        </h2>
        <div class="group" role="group">
          <label class="label" for="input-name">Ваше имя:</label>
          <b-form-input
            id="input-name"
            v-model="name"
            placeholder="Иван Иванов"
            trim
          />
        </div>
        <div class="group" role="group">
          <label class="label" for="input-contact">Ваш телефон или электронная почта:</label>
          <b-form-input
            id="input-contact"
            v-model="contact"
            placeholder="+7 927 222 3333"
            trim
          />
        </div>
        <p class="text-small">
          Отправляя эту форму вы соглашаетесь на обработку ваших персональных
          данных. Ознакомьтесь с&nbsp;<nuxt-link to="/policy">
            политикой конфиденциальности.
          </nuxt-link>
        </p>
        <button :disabled="submitDisabled" class="btn" @click="sendRequest">
          Отправить
        </button>
      </div>
    </modal>
  </client-only>
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
</style>
