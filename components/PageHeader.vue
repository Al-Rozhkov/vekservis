<template>
  <header class="header container" :class="headerClass" :style="headerStyle">
    <slot />
  </header>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: null
    },

    position: {
      type: String,
      default: 'center center'
    },

    default: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    headerStyle () {
      return {
        'background-image': this.image ? `url(/img/bg-${this.image}.jpg)` : `url(/img/bg-${this.$route.name}.jpg)`,
        'background-position': this.position
      }
    },
    headerClass () {
      return this.default ? 'ph-index' : `ph-${this.$route.name}`
    }
  }
}
</script>

<style lang="scss">
.ph-index,
.ph-blue {
  background-color: #042a4a;
  &:before {
    background-image: linear-gradient(to right, #042a4a 0%, #087380 100%);
    opacity: .5;
  }
}

.ph-purple {
  background-color: #1b0880;
  &:before {
    background-image: linear-gradient(to right, #1b0880 0%, #042a4a 100%);
  }
}

.ph-orange {
  background-color: #921800;
  &:before {
    background-image: linear-gradient(to right, #921800 0%, #d96100 100%);
  }
}

.ph-teal {
  background-color: #00887d;
  &:before {
    background-image: linear-gradient(to right, #00887d 0%, #006983 100%);
  }
}

.header.ph-clients {
  background-position: 50% 40%;
  min-height: 300px;
}
</style>
