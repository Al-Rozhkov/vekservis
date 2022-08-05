<template>
  <main>
    <page-header class="ph-blue ph-position-center">
      <h1 class="page-title">
        Собственное производство и&nbsp;разработки компании «ВЭК&nbsp;СЕРВИС»
      </h1>
    </page-header>
    <section class="container">
      <div class="row">
        <div class="col-8 col-left">
          <p>
            За&nbsp;годы работы в&nbsp;компании налажено собственное
            металлообрабатывающее производство. Мы&nbsp;тщательно контролируем
            всю последовательность действий, начиная c&nbsp;проверки качества
            комплектующих и&nbsp;заканчивая процессом установки
            и&nbsp;обслуживания готовой продукции. Опыт сотрудников ВЭК СЕРВИС
            позволяет гарантировать качество выполняемых работ даже для больших
            серий и&nbsp;сжатых сроков.
          </p>
        </div>

        <div class="col-4">
          <h3 class="mt-0">
            Наши партнеры
          </h3>
          <p>
            <a target="_blank" href="https://www.rse-athletics.com/">Russian Sports Equipment</a>
          </p>
        </div>
      </div>

      <div class="row card-teasers">
        <card-link
          v-for="item in menu.list"
          :key="item.name"
          :item="item"
          :section="menu.section"
        />
      </div>
    </section>
  </main>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
import CardLink from '~/components/CardLink.vue'

import subpagesData from '~/data/manufacture.js'

export default {
  components: {
    PageHeader,
    CardLink
  },
  data () {
    return {
      menu: subpagesData
    }
  },
  head: {
    title: 'Собственное производство и разработки компании «ВЭК СЕРВИС',
  }
}
</script>
