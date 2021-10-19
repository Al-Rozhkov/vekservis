<template>
  <div>
    <page-header class="ph-orange">
      <header-submenu :menu="services" />
      <h1 class="page-title">Услуги по&nbsp;эксплуатации ЖКХ</h1>
    </page-header>
    <section class="container">
      <div class="page-body">
        <p>
          Компания ВЭК СЕРВИС предлагает услуги по&nbsp;эксплуатации
          и&nbsp;управлению объектов ЖКХ. Нашими клиентами являются различные
          организации жилищно-коммунальных хозяйств (ТСЖ, ЖК, МУП ЖСК)
        </p>
        <h2>
          ВЭК СЕРВИС предлагает выполнение следующих работ в&nbsp;сфере
          обслуживания ЖКХ:
        </h2>
        <ul>
          <li>
            комплексное обслуживание зданий от&nbsp;многоквартирного ЖКХ
            до&nbsp;элитных жилых комплексов, включая текущий ремонт жилых
            домов, отдельных инженерных систем и&nbsp;оборудования;
          </li>
          <li>Проведение аварийно-восстановительных работ;</li>
          <li>
            уборку внутренних помещений и&nbsp;прилегающих территорий
            (в&nbsp;том числе вывоз снега и&nbsp;бытовых отходов);
          </li>
          <li>
            услуги по&nbsp;озеленению территории, в&nbsp;том числе устройство
            клумб, газонов и&nbsp;посадка деревьев;
          </li>
          <li>
            благоустройство прилегающей территории (оборудование детских
            и&nbsp;спортивных площадок, организация парковок, дорожек, прочих
            малых архитектурных форм. Планирование и&nbsp;проведение земляных
            работ, асфальтирования, освещения и&nbsp;пр.).
          </li>
        </ul>
      </div>
    </section>

    <div class="container feedback-form">
      <feedback-form />
    </div>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
import HeaderSubmenu from '~/components/HeaderSubmenu.vue'
import FeedbackForm from '../components/FeedbackForm.vue'

import servicesData from '~/data/services.json'

export default {
  components: {
    PageHeader,
    HeaderSubmenu,
    FeedbackForm,
  },
  data() {
    return {
      services: servicesData,
    }
  },
  head: {
    title: 'Услуги по эксплуатации ЖКХ. ВЭК СЕРВИС',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'ВЭК СЕРВИС предлагает комплексное обслуживание зданий от многоквартирного ЖКХ до элитных жилых комплексов, включая текущий ремонт жилых домов, отдельных инженерных систем и оборудования, уборку внутренних помещений и благоустройство прилегающих территорий.',
      },
    ],
  },
}
</script>

<style></style>
