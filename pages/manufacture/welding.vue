<template>
  <div>
    <page-header>
      <header-submenu :menu="menu"/>
      <h1 class="page-title">Услуги полуавтоматической сварки</h1>
    </page-header>
    <section class="container">
      <h2>ООО «ВЭК Сервис» предлагает услуги полуавтоматической сварки (MIG).</h2>
      <div class="row">
        <div class="col-4">
          <p class="lead">Производим сварку изделий из металла до 3,5 метров на сварочном столе собственного производства.</p>
        </div>
        <div class="col-4">
          <p class="lead">Выпускаемые нами изделия соответствуют высоким стандартам качества.</p>
        </div>
        <div class="col-4">
          <p class="lead">Гарантируем повторяемость качества при производстве больших серий в сжатые сроки.</p>
        </div>
      </div>
      <p>Сварные детали нашли свое применение в огромном количестве изделий, механизмов и строений. Во многих случаях они подвергаются различным нагрузкам и поэтому должны быть прочными и надежными. На этих фото наглядно изображен некачественный и качественный сварные швы. Заказывая услуги сварки, всегда нужно быть уверенным, что для вас выполняют работу профессионалы.</p>
      <p>Для расчета стоимости вашего заказа просим прикрепить имеющуюся документацию на изделия и сообщите нам, как с вами связаться.</p>
      <p>После сварки деталей предлагаем вам воспользоваться услугами абразивоструйной очистки и полимерного покрытия изделий.</p>
    </section>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
import HeaderSubmenu from '~/components/HeaderSubmenu.vue'
// import NodeSections from '~/components/NodeSections.vue'

import subpagesData from '~/data/manufacture.json'

export default {
  data () {
    return {
      menu: subpagesData
    }
  },
  head: {
    title: 'Услуги полуавтоматической сварки. ВЭК СЕРВИС',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'ВЭК СЕРВИС производит сварку изделий из металла до 3,5м на сварочном столе собственного производства. Гарантирует повторяемость качества при производстве больших серий в сжатые сроки.'
      }
    ]
  },
  components: {
    PageHeader,
    HeaderSubmenu
  }
}
</script>

<style>

</style>
