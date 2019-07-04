<template>
  <header class="header container" :class="headerClass" :style="headerBg">
    <slot></slot>
  </header>
</template>

<script>
export default {
  computed: {
    headerBg: function () {
      return 'background-image: url(/img/bg-' + this.$route.name + '.jpg)'
    },
    headerClass: function () {
      return 'ph-' + this.$route.name
    }
  }
  /* props: {
    headerClass: {
      type: String
    }
  } */
}
</script>

<style lang="scss">
.ph-services-lowvoltage,
.ph-services-electrical {
  background-color: #1b0880;
  &:before { background-image: linear-gradient(to right, #1b0880 0%,#042a4a 100%); }
}

.ph-index,
.ph-services,
.ph-advantages,
.ph-manufacture {
  background-color: #042a4a;
  &:before { background-image: linear-gradient(to right, #042a4a 0%,#087380 100%); }
}

.ph-clients,
.ph-services-zhkh {
  background-color: #921800;
  &:before { background-image: linear-gradient(to right, #921800 0%,#d96100 100%); }
}

.ph-contact,
.ph-services-mechanical,
.ph-services-finishing,
.ph-services-commercial {
  background-color: #921800;
  &:before { background-image: linear-gradient(to right, #00887d 0%,#006983 100%); }
}

header.header.ph-clients {
  background-position: 50% 40%;
  min-height: 300px;
}

header.header.ph-contact {
  background-position: bottom center;
}
</style>