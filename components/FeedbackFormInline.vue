<template>
  <client-only>
    <div :id="id" class="container feedback-form">
      <div v-if="!isSubmitted" class="form-content">
        <div class="form-title">
          <slot>
            <h2>Оставить заявку</h2>
          </slot>
        </div>
        <form
          method="post"
          action="https://api.formcake.com/api/form/97f10aee-9328-4347-aab1-bc45871357a4/submission"
        >
          <div class="form-container mb-3">
            <div role="group">
              <b-form-input
                id="input-name"
                v-model="name"
                name="name"
                placeholder="Ваше имя"
                trim
              />
            </div>
            <div role="group">
              <b-form-input
                id="input-contact"
                v-model="contact"
                name="contact"
                placeholder="+7 (9__) ___-____"
                trim
              />
            </div>
            <div role="group">
              <b-form-input
                id="input-email"
                v-model="email"
                name="email"
                placeholder="Ваш email"
                trim
              />
            </div>

            <input
              v-for="(key, item) in utm"
              :key="key"
              :name="`utm_${key}`"
              type="hidden"
              :value="item"
            >

            <div role="group">
              <input
                class="btn btn-light btn-block"
                :disabled="submitDisabled"
                type="submit"
                value="Оставить заявку"
                @click="onSubmit"
              >
            </div>

            <p class="text-policy">
              Отправляя эту форму вы соглашаетесь на обработку ваших
              персональных данных. Ознакомьтесь с&nbsp;<nuxt-link to="/policy">
                политикой конфиденциальности.
              </nuxt-link>
            </p>
          </div>
        </form>
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
      email: '',
      contact: '',
      text: ''
    }
  },

  computed: {
    submitDisabled () {
      return this.name.length < 1 || this.contact.length < 6
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
  padding: 0 1.5rem;
  color: $white;
  border-radius: 1rem;
  background-image: url(/img/bg-form-inline.jpg);
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
    opacity: 0.6;
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
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(4, 1fr);
}

.text-policy {
  grid-column: 1 / 4;
  max-width: 38rem;
  font-size: 85%;
  color: $gray-200;

  a {
    color: lighten($color: $link-color, $amount: 30%);
  }
}

.btn-block {
  width: 100%;
  display: block;
  height: 2.4rem;
}
</style>
