<template>
  <header class="header container" :class="headerClass" :style="headerBg">
    <slot></slot>
  </header>
</template>

<script>
export default {
  computed: {
    headerBg() {
      return `background-image: url(/img/bg-${this.$route.name}.jpg)`
    },
    headerClass () {
      return 'ph-' + this.$route.name
    }
  }
}
</script>

<style lang="scss">
.header,
.ph-purple,
.ph-services-lowvoltage,
.ph-services-electrical {
  background-color: #1b0880;
  &:before { background-image: linear-gradient(to right, #1b0880 0%,#042a4a 100%); }
}

.ph-index,
.ph-blue,
.ph-services,
.ph-advantages {
  background-color: #042a4a;
  &:before { background-image: linear-gradient(to right, #042a4a 0%,#087380 100%); }
}

.ph-clients,
.ph-orange,
.ph-services-zhkh {
  background-color: #921800;
  &:before { background-image: linear-gradient(to right, #921800 0%,#d96100 100%); }
}

.ph-contact,
.ph-teal {
  background-color: #00887d;
  &:before { background-image: linear-gradient(to right, #00887d 0%,#006983 100%); }
}

header.header.ph-clients,
header.header.ph-manufacture-welding {
  background-position: 50% 40%;
  min-height: 300px;
}

header.header.ph-position-bottom,
header.header.ph-contact {
  background-position: bottom center;
}

header.header.ph-position-center {
  background-position: center center;
}
</style>