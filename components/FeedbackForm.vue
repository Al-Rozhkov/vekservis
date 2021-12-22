<template>
  <client-only>
    <div class="container feedback-form">
      <div class="form-content">
        <h2>Запросите предложение на&nbsp;обслуживание инженерных систем</h2>
        <div class="form-container mb-3">
          <form
            method="post"
            action="https://api.formcake.com/api/form/97f10aee-9328-4347-aab1-bc45871357a4/submission"
          >
            <!-- <div class="mb-3" role="group">
              <label class="label" for="input-name">Ваше имя:</label>
              <b-form-input
                id="input-name"
                name="name"
                v-model="name"
                placeholder="Иван Петров"
                trim
              />
            </div> -->
            <div class="mb-3" role="group">
              <label class="label" for="input-contact">Ваш телефон:</label>
              <b-form-input
                id="input-contact"
                name="contact"
                v-model="contact"
                placeholder="+7 927 222 3333"
                trim
              />
            </div>
            <div class="mb-3" role="group">
              <!-- <label class="label" for="input-email">Электронная почта:</label> -->
              <b-form-textarea
                id="input-text"
                name="text"
                v-model="text"
                placeholder="Ваш вопрос или комментарий"
                rows="3"
              />
            </div>

            <input
              v-for="(key, item) in utm"
              :key="key"
              :name="`utm_${key}`"
              type="hidden"
              :value="item"
            />

            <p class="text-policy">
              Отправляя эту форму вы соглашаетесь на обработку ваших
              персональных данных. Ознакомьтесь с&nbsp;<nuxt-link to="/policy"
                >политикой конфиденциальности.</nuxt-link
              >
            </p>

            <input
              class="btn btn-block"
              :disabled="submitDisabled"
              type="submit"
              value="Отправить"
            />
          </form>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>
import { BFormInput, BFormTextarea } from 'bootstrap-vue'

export default {
  components: {
    BFormInput,
    BFormTextarea,
  },

  data() {
    return {
      name: '',
      contact: '',
      text: '',
    }
  },

  computed: {
    submitDisabled() {
      return this.text.length < 1 || this.contact.length < 6
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
  position: relative;
  padding: 2rem;
  color: $white;
  border-radius: $border-radius-sm;
  background-image: url(/img/bg-form.jpg);
  background-size: cover;
  overflow: hidden;

  &::before {
    background-image: linear-gradient(to right, #042a4a 0%, #087380 100%);
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.7;
    z-index: 0;
  }

  h2 {
    text-align: center;
    max-width: 34rem;
    margin: 0 auto 2rem;
  }
}

.form-content {
  position: relative;
  z-index: 1;
}

.form-container {
  max-width: 30rem;
  margin: 0 auto;
}

.text-policy {
  font-size: 85%;
  color: $gray-200;

  a {
    color: lighten($color: $link-color, $amount: 30%);
  }
}

.btn-block {
  width: 100%;
  display: block;
}
</style>