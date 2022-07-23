<template>
  <div>
    <page-header class="ph-orange" image="contact" position="bottom center">
      <h1 class="page-title">
        Офис в Москве
      </h1>
    </page-header>
    <section class="container">
      <p>
        г.&nbsp;Москва, ул.&nbsp;Космонавта Волкова 6А
      </p>
      <p>Телефон: 8&nbsp;800&nbsp;600-00-65</p>
    </section>
    <section class="container">
      <script
        type="text/javascript"
        charset="utf-8"
        async
        src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A1bb61dd3b445270b75ff45b01f52edb119e9766509c5e89a3f73e5bb30212a3c&amp;width=100%25&amp;height=460&amp;lang=ru_RU&amp;scroll=true"
      />
    </section>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'

export default {
  components: {
    PageHeader
  },
  head: {
    title:
      'Контактная информация. Компания «ВЭК СЕРВИС». Эксплуатация объектов государственной и коммерческой недвижимости в Москве',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'ООО «ВЭК СЕРВИС» г. Москва, ул. Космонавта Волкова 6А. Телефон: 8 800 600-00-65.'
      }
    ]
  }
}
</script>
