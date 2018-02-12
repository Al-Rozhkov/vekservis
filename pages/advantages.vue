<template>
  <div>
    <page-header>
      <h1 class="page-title">Преимущества</h1>
    </page-header>
    <section class="container">
      <p>Прозрачность и&nbsp;открытость политики компании ВЭК СЕРВИС позволяет Клиентам получать качественный сервис по&nbsp;оптимальной цене, осуществлять полноценный контроль затрат и&nbsp;оптимизировать расходы с&nbsp;учетом потребностей Клиента. Использование в&nbsp;деятельности ВЭК СЕРВИС политики открытости является одной из&nbsp;важных целей на&nbsp;пути построения максимально взаимовыгодного сотрудничества с&nbsp;Клиентами.</p>
      <p>Мы&nbsp;уделяем особое внимание техническому обслуживанию инженерных систем зданий и&nbsp;сооружений. Все подразделения ВЭК СЕРВИС придерживаются единым стандартам управления эксплуатацией от&nbsp;оказания услуг до&nbsp;контроля качества.</p>
    </section>
    <section class="section">
      <h2 class="section-title">Свидетельство СРО</h2>
      <div class="section-body">
        <img v-img="{ src: '/docs/svidetelstvo_1.jpg', group: 'docs', title: 'Свидетельство СРО' }" src="/docs/small/svidetelstvo_1.jpg" alt="Свидетельство СРО"/>
      </div>
    </section>
    <section class="section">
      <h2 class="section-title">Свидетельство о&nbsp;допуске к&nbsp;работам</h2>
      <div class="section-body">
        <img v-img="{ src: '/docs/dopusk_1.jpg', group: 'docs', title: 'Свидетельство о допуске к работам' }" src="/docs/small/dopusk_1.jpg" alt="Свидетельство о допуске к работам"/>
        <img v-img="{ src: '/docs/dopusk_2.jpg', group: 'docs', title: 'Свидетельство о допуске к работам' }" src="/docs/small/dopusk_2.jpg" alt="Свидетельство о допуске к работам"/>
        <img v-img="{ src: '/docs/dopusk_3.jpg', group: 'docs', title: 'Свидетельство о допуске к работам' }" src="/docs/small/dopusk_3.jpg" alt="Свидетельство о допуске к работам"/>
        <img v-img="{ src: '/docs/dopusk_4.jpg', group: 'docs', title: 'Свидетельство о допуске к работам' }" src="/docs/small/dopusk_4.jpg" alt="Свидетельство о допуске к работам"/>
        <img v-img="{ src: '/docs/dopusk_5.jpg', group: 'docs', title: 'Свидетельство о допуске к работам' }" src="/docs/small/dopusk_5.jpg" alt="Свидетельство о допуске к работам"/>
        <img v-img="{ src: '/docs/dopusk_6.jpg', group: 'docs', title: 'Свидетельство о допуске к работам' }" src="/docs/small/dopusk_6.jpg" alt="Свидетельство о допуске к работам"/>
      </div>
    </section>
    <section class="section">
      <h2 class="section-title">Свидетельство МЧС</h2>
      <div class="section-body">
        <img v-img="{ src: '/docs/mchs_1.jpg', group: 'docs', title: 'Свидетельство МЧС' }" src="/docs/small/mchs_1.jpg" alt="Свидетельство МЧС"/>
        <img v-img="{ src: '/docs/mchs_2.jpg', group: 'docs', title: 'Свидетельство МЧС' }" src="/docs/small/mchs_2.jpg" alt="Свидетельство МЧС"/>
      </div>
    </section>
    <section class="section">
      <h2 class="section-title">Сертификат соответствия</h2>
      <div class="section-body">
        <img v-img="{ src: '/docs/sert-1.png', group: 'docs', title: 'Сертификат соответствия' }" src="/docs/small/sert-1.png" alt="Сертификат соответствия"/>
        <img v-img="{ src: '/docs/sert-2.png', group: 'docs', title: 'Сертификат соответствия' }" src="/docs/small/sert-2.png" alt="Сертификат соответствия"/>
        <img v-img="{ src: '/docs/sert-3.png', group: 'docs', title: 'Сертификат соответствия' }" src="/docs/small/sert-3.png" alt="Сертификат соответствия"/>
        <img v-img="{ src: '/docs/sert-4.png', group: 'docs', title: 'Сертификат соответствия' }" src="/docs/small/sert-4.png" alt="Сертификат соответствия"/>
        <img v-img="{ src: '/docs/sert-5.png', group: 'docs', title: 'Сертификат соответствия' }" src="/docs/small/sert-5.png" alt="Сертификат соответствия"/>
        <img v-img="{ src: '/docs/sert-6.png', group: 'docs', title: 'Сертификат соответствия' }" src="/docs/small/sert-6.png" alt="Сертификат соответствия"/>
      </div>
    </section>
    <section class="section">
      <h2 class="section-title">Рекомендации</h2>
      <div class="section-body">
        <img v-img="{ src: '/docs/VTB.jpg', group: 'docs' }" src="/docs/small/VTB.jpg"/>
        <img v-img="{ src: '/docs/pismo_1.jpg', group: 'docs' }" src="/docs/small/pismo_1.jpg"/>
        <img v-img="{ src: '/docs/pismo_2.jpg', group: 'docs' }" src="/docs/small/pismo_2.jpg"/>
      </div>
    </section>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'

import Vue from 'vue'
import VueImg from 'v-img'

Vue.use(VueImg)

export default {
  head: {
    title: 'Опыт и клиенты. ВЭК СЕРВИС. Эксплуатация объектов государственной и коммерческой недвижимости'
  },
  components: {
    PageHeader
  }
}
</script>

<style>
.section-body img {
  margin: 0 .5rem .5rem;
  opacity: 1;
}

.section-body img:hover {
  opacity: .7;
}
</style>