<template>
  <div>
    <page-header>
      <h1 class="page-title">Контактная информация</h1>
    </page-header>
    <section class="container">
      <h2>Основной офис</h2>
      <p>ООО «ВЭК СЕРВИС» 440000, Пензенская область, г. Пенза, ул. Ставского 4, оф. 4</p>
      <p>Телефон: 8(8412) 20-73-18.</p>
      <p>Технический отдел: 8 909 319 04 59.</p>
      <p>Электронная почта: <a href="mailto:info@vekservis.ru">info@vekservis.ru</a></p>
    </section>
    <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A817b9eca6bc4a7408f190ca30840d872d2fb659e69b36f6135b7958f7c8a8ff9&amp;width=100%25&amp;height=460&amp;lang=ru_RU&amp;scroll=true"></script>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'

export default {
  head: {
    title: 'Контактная информация. Компания «ВЭК СЕРВИС». Эксплуатация объектов государственной и коммерческой недвижимости',
    meta: [
      { hid: 'description', name: 'description', content: 'ООО «ВЭК СЕРВИС» 440000, Пензенская область, г. Пенза, ул. Ставского 4, оф. 4. Телефон: 8(8412) 20-73-18. Телефон технического отдел: 8 (909) 319-04-59.' }
    ]
  },
  components: {
    PageHeader
  }
}
</script>

<style>

</style>