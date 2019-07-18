<template>
  <main>
    <page-header class="ph-blue ph-position-center">
      <h1 class="page-title">Собственное производство и&nbsp;разработки компании «ВЭК&nbsp;СЕРВИС»</h1>
    </page-header>
    <section class="container">
      <article class="intro">
        <p>За&nbsp;годы работы в&nbsp;компании налажено собственное металлообрабатывающее производство. Мы&nbsp;тщательно контролируем всю последовательность действий, начиная c&nbsp;проверки качества комплектующих и заканчивая процессом установки и обслуживания готовой продукции. Опыт сотрудников &laquo;ВЭК&nbsp;Сервис&raquo; позволяет гарантировать качество выполняемых работ даже для больших серий и&nbsp;сжатых сроков.</p>
      </article>

      <div class="row manufacture-teasers">
        <card-link
          v-for="item in menu.list" :key="item.name"
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

import subpagesData from '~/data/manufacture.json'

export default {
  data () {
    return {
      menu: subpagesData
    }
  },
  head: {
    title: 'Собственное производство и разработки компании «ВЭК СЕРВИС'
  },
  components: {
    PageHeader,
    CardLink
  }
}
</script>

<style lang="scss" scoped>
.intro {
  max-width: 860px;
}

.manufacture-teasers {
  margin: 3rem -1px 4rem;
}
</style>
