<template>
  <div>
    <page-header class="ph-position-bottom">
      <header-submenu :menu="menu" />
      <h1 class="page-title">Услуги полуавтоматической сварки</h1>
    </page-header>

    <section class="container">
      <h2>ООО «ВЭК Сервис» предлагает услуги полуавтоматической сварки (MIG).</h2>
      <div class="list-cols welding-cols">
        <div class="welding-col col-4">
          <p
            class="welding-p"
          >Производим сварку изделий из&nbsp;металла до&nbsp;3,5 метров на&nbsp;сварочном столе собственного производства.</p>
        </div>
        <div class="welding-col col-4">
          <p class="welding-p">Выпускаемые нами изделия соответствуют высоким стандартам качества.</p>
        </div>
        <div class="welding-col col-4">
          <p
            class="welding-p"
          >Гарантируем повторяемость качества при производстве больших серий в&nbsp;сжатые сроки.</p>
        </div>
      </div>
      <div class="p-3 list-img welding-imgs">
        <img
          v-for="item in 10"
          :key="item"
          :src="`/img/welding/small/${numPad(item)}.jpg`"
          v-img="{
            src: `/img/welding/${numPad(item)}.jpg`,
            group: 'welding',
            title: 'Образцы сварочных работ'
          }"
          class="gi"
        />
      </div>

      <section class="row">
        <div class="col-5 welding-scheme">
          <img class="img" src="/img/welding/welding-scheme.png" />
        </div>
        <div class="col-7">
          <p>
            Сварные детали нашли свое применение в&nbsp;огромном количестве изделий, механизмов и&nbsp;строений. Во&nbsp;многих случаях они подвергаются различным нагрузкам и&nbsp;поэтому должны быть прочными и&nbsp;надежными. При некачественном выполнении сварочных работ в&nbsp;месте шва возникают трещины, полости или даже участки неполного проплавления, что значительно снижает срок службы и&nbsp;прочность конструкции. Если для вас важна надежность сварочного шва,
            <a
              href="mailto:info@vekservis.ru"
            >обращайтесь к&nbsp;специалистам</a> «ВЭК СЕРВИС».
          </p>
          <p>Для расчета стоимости вашего заказа просим прикрепить имеющуюся документацию на&nbsp;изделия и&nbsp;сообщить нам, как с&nbsp;вами связаться.</p>
          <p>После сварки деталей предлагаем вам воспользоваться услугами абразивоструйной очистки и&nbsp;полимерного покрытия изделий.</p>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import PageHeader from "~/components/PageHeader.vue";
import HeaderSubmenu from "~/components/HeaderSubmenu.vue";
// import NodeSections from '~/components/NodeSections.vue'

import subpagesData from "~/data/manufacture.json";

export default {
  data() {
    return {
      menu: subpagesData
    };
  },
  methods: {
    numPad(d) {
      return d < 10 ? "0" + d.toString() : d.toString();
    }
  },
  head: {
    title: "Услуги полуавтоматической сварки. ВЭК СЕРВИС",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "ВЭК СЕРВИС производит сварку изделий из металла до 3,5м на сварочном столе собственного производства. Гарантирует повторяемость качества при производстве больших серий в сжатые сроки."
      }
    ]
  },
  components: {
    PageHeader,
    HeaderSubmenu
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/init.scss";

.welding-cols {
  padding: 2rem 0;
}

.welding-col {
  padding-right: 1.5rem;
}

.welding-p {
  font-size: 1.2rem;
  position: relative;

  &:before {
    content: " ";
    display: block;
    width: 2rem;
    height: 4px;
    background-color: rgba(#000000, 0.5);
    opacity: 0.15;
    margin-bottom: 0.4rem;
  }
}

@include media-breakpoint-up(lg) {
  .welding-scheme {
    padding: 0 4rem 0 5rem;
  }
}

.welding-imgs {
  max-width: 1050px;
}

.gi {
  max-width: 50%;
}
</style>
