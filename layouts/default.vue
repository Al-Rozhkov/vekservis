<template>
  <div>
    <app-nav />

    <nuxt class="section" />

    <div class="container">
      <feedback-form />
    </div>

    <app-footer />
  </div>
</template>

<script>
import AppNav from '~/components/AppNav.vue'
import AppFooter from '~/components/AppFooter.vue'
import FeedbackForm from '~/components/FeedbackForm.vue'

export default {
  components: {
    AppNav,
    AppFooter,
    FeedbackForm
  }
}
</script>
