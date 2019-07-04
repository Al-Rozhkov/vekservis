<template>
  <div>
    <page-header>
      <h1 class="page-title">Опыт и&nbsp;клиенты</h1>
    </page-header>
    <section class="container">
      <h2>Целевые объекты обслуживания</h2>
      <p>На данный момент компания ВЭК СЕРВИС осуществляет обслуживание объектов федеральных сетевых компаний  более чем в 40 городах, 30 регионах РФ.</p>
      <p>Астрахань, Альметьевск, Армавир, Белгород, Брянск, Волгоград, Воронеж, Екатеринбург, Иваново, Калуга, Краснодар, Красноярск, Курск, Липецк, Москва, Набережные Челны, Нижний Новгород, Новомосковск, Новосибирск, Пенза, Рязань, Ростов-на-Дону, Санкт-Петербург, Самара, Саранск, Саратов, Саров, Ставрополь, Сургут, Смоленск, Сочи, Тверь, Тольятти, Туапсе, Тула, Ульяновск, Уфа, Оренбург, Череповец, Челябинск, Ярославль.</p>
    </section>
    <div class="map container">
      <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A20bcb002aecccc07a1bfc757d5df714f534acb8f9e8ddc6b5ac80f05d24b1c56&amp;width=100%&amp;height=440&amp;lang=ru_RU&amp;scroll=true"></script>
    </div>
    <section class="container">
      <h2>Клиенты</h2>
      <clients />
    </section>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
import Clients from '~/components/Clients.vue'

export default {
  head: {
    title: 'Опыт и клиенты. ВЭК СЕРВИС. Эксплуатация объектов государственной и коммерческой недвижимости',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Компания ВЭК СЕРВИС осуществляет обслуживание объектов федеральных сетевых компаний более чем в 40 городах и 30 регионах РФ.'
      }
    ]
  },
  components: {
    PageHeader,
    Clients
  }
}
</script>