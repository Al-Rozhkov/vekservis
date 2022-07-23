<template>
  <div>
    <page-header default>
      <h1 class="page-title">
        Спасибо за вашу заявку! Наш&nbsp;менеджер свяжется с&nbsp;вами в&nbsp;ближайшее время.
      </h1>
    </page-header>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'

export default {
  components: {
    PageHeader
  },
  head: {
    title: 'Заявка получена'
  }
}
</script>
