<template>
  <div class="service-teasers">
    <a class="service-card" v-for="service in services" v-bind:href="serviceLink(service.name)" v-bind:style="serviceBg(service.name)">
    <h2 v-html="service.title"></h2>
    </a>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      services: [
        { title: 'Обслуживание механических инженерных систем', name: 'mechanical' },
        { title: 'Монтаж и&nbsp;обслуживание электрических систем зданий', name: 'electrical' },
        { title: 'Техническое обслуживание слаботочных инженерных систем', name: 'mechanical' },
        { title: 'Услуги по&nbsp;эксплуатации ЖКХ', name: 'mechanical' },
        { title: 'Отделочные и&nbsp;ремонтные работы', name: 'mechanical' },
        { title: 'Комплексное обслуживание коммерческой и&nbsp;жилой недвижимости', name: 'mechanical' }
      ]
    }
  },
  methods: {
    serviceLink: function (name) {
      return '/services/' + name
    },
    serviceBg: function (name) {
      return 'background-image: url(/img/bg-services-' + name + '.jpg)'
    }
  }
}
</script>

<style lang="scss">
.service-teasers {
  margin: 0 -1px;
  display: flex;
  flex-wrap: wrap;
}

.service-card {
  display: flex;
  position: relative;
  flex-grow: 1;
  width: 33%;
  border: 1px solid #ffffff;
  // background: linear-gradient(to right, #1b0880 0%,#042a4a 100%);
  // filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1b0880', endColorstr='#042a4a',GradientType=1 );
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  padding: 2rem;

  h2 {
    position: relative;
    z-index: 50;
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(to right, #1b0880 0%,#042a4a 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1b0880', endColorstr='#042a4a',GradientType=1 );
    opacity: .7;
    z-index: 0;
  }

  &:hover:before {
    background: #0c0d29;
    opacity: .8;
  }

  h2 {
    color: #fffcd4;
    font-size: 1rem;
    font-weight: bold;
  }
}
</style>