<template>
  <client-only>
    <div :id="id" class="container feedback-form">
      <div v-if="!isSubmitted" class="form-content">
        <div class="form-title">
          <slot>
            <h2>
              Запрос стоимости услуг
            </h2>
          </slot>
        </div>
        <div class="form-container mb-3">
          <form
            method="post"
            action="https://api.formcake.com/api/form/97f10aee-9328-4347-aab1-bc45871357a4/submission"
          >
            <div class="mb-3" role="group">
              <label class="label" for="input-name">Ваше имя:</label>
              <b-form-input
                id="input-name"
                v-model="name"
                name="name"
                placeholder="Имя"
                required
                trim
              />
            </div>
            <div class="mb-3" role="group">
              <label class="label" for="input-subject">Тема запроса:</label>
              <b-form-input
                id="input-subject"
                v-model="subject"
                name="subject"
                placeholder="Тема запроса"
                required
                trim
              />
            </div>
            <div class="mb-3" role="group">
              <label class="label" for="input-contact">Ваш телефон:</label>
              <b-form-input
                id="input-contact"
                v-model="contact"
                name="contact"
                placeholder="+7 927 222 3333"
                trim
              />
            </div>
            <!-- <div class="mb-3" role="group">
              <b-form-textarea
                id="input-text"
                v-model="text"
                name="text"
                placeholder="Ваш вопрос или комментарий"
                rows="3"
              />
            </div> -->

            <input
              v-for="(key, item) in utm"
              :key="key"
              :name="`utm_${key}`"
              type="hidden"
              :value="item"
            >

            <p class="text-policy">
              Отправляя эту форму вы соглашаетесь на обработку ваших
              персональных данных. Ознакомьтесь с&nbsp;<nuxt-link to="/policy">
                политикой конфиденциальности.
              </nuxt-link>
            </p>

            <input
              class="btn btn-block"
              :disabled="submitDisabled"
              type="submit"
              value="Отправить"
              @click="onSubmit"
            >
          </form>
        </div>
      </div>

      <div v-else class="form-confirmation">
        <h2>
          Спасибо за вашу заявку! Наш менеджер свяжется с вами в ближайшее
          время.
        </h2>
      </div>
    </div>
  </client-only>
</template>

<script>
import { BFormInput } from 'bootstrap-vue'

export default {
  components: {
    BFormInput
    // BFormTextarea
  },

  props: {
    id: {
      type: String,
      default: 'feedback-form'
    },
    isSubmitted: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      name: '',
      subject: '',
      contact: '',
      text: ''
    }
  },

  computed: {
    submitDisabled () {
      return this.name.length < 1 || this.subject.length < 3 || this.contact.length < 6
    },

    utm () {
      const { query } = this.$route
      const res = {}

      for (const key in query) {
        if (key.startsWith('utm_')) {
          res[key] = query[key]
        }
      }
      return res
    }
  },

  methods: {
    onSubmit () {
      // eslint-disable-next-line no-undef
      ym(45245817, 'reachGoal', 'zayavka')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/init.scss';

.feedback-form {
  position: relative;
  padding: 0.75rem 2rem 2rem;
  color: $white;
  border-radius: $border-radius-sm;
  background-image: url(/img/bg-form.jpg);
  background-size: cover;
  overflow: hidden;

  &::before {
    background-image: linear-gradient(
      to right,
      $link-color 0%,
      $dark-blue 100%
    );
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
}

.form-content {
  position: relative;
  z-index: 1;
}

.form-title {
  text-align: center;
  max-width: 34rem;
  margin: 0 auto 2rem;
}

.form-confirmation {
  min-height: 200px;
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
