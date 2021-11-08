<template>
  <no-ssr>
    <div class="container feedback-form">
      <form
        method="post"
        action="https://api.formcake.com/api/form/97f10aee-9328-4347-aab1-bc45871357a4/submission"
      >
        <h2>Запросите предложение на&nbsp;обслуживание инженерных систем</h2>

        <div class="row mb-3">
          <div class="col-4 px-2" role="group">
            <label class="label" for="input-name">Ваше имя:</label>
            <b-form-input
              id="input-name"
              name="name"
              v-model="name"
              placeholder="Иван Петров"
              trim
            />
          </div>
          <div class="col-4 px-2" role="group">
            <label class="label" for="input-contact">Ваш телефон:</label>
            <b-form-input
              id="input-contact"
              name="contact"
              v-model="contact"
              placeholder="+7 927 222 3333"
              trim
            />
          </div>
          <div class="col-4 px-2" role="group">
            <label class="label" for="input-email">Электронная почта:</label>
            <b-form-input id="input-email" name="email" v-model="email" trim />
          </div>
        </div>

        <input
          v-for="(key, item) in utm"
          :key="key"
          :name="`utm_${key}`"
          type="hidden"
          :value="item"
        />

        <p class="text-small">
          Отправляя эту форму вы соглашаетесь на обработку ваших персональных
          данных. Ознакомьтесь с&nbsp;<nuxt-link to="/policy"
            >политикой конфиденциальности.</nuxt-link
          >
        </p>

        <input
          class="btn"
          :disabled="submitDisabled"
          type="submit"
          value="Отправить"
        />
      </form>
    </div>
  </no-ssr>
</template>

<script>
import { BFormInput } from 'bootstrap-vue'

export default {
  components: {
    BFormInput,
  },

  data() {
    return {
      name: '',
      contact: '',
      email: '',
    }
  },

  computed: {
    submitDisabled() {
      return this.name.length < 3 || this.contact.length < 6
    },
    utm() {
      const { query } = this.$route
      const res = {}

      for (let key in query) {
        if (key.startsWith('utm_')) res[key] = query[key]
      }
      return res
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/init.scss';

.feedback-form {
  padding-bottom: 1.5rem;
  background: lighten($blue, 43%);
  border-radius: $border-radius-sm;
}
</style>