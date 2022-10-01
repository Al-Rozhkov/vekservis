<template>
  <div class="card-hover">
    <div class="card-hover-backdrop" />
    <div class="card-hover-box">
      <img class="card-hover-img" :src="`/img/icons-hr/${iconName}.png`">
      <p class="card-hover-title">
        <slot />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/init.scss';

.card-hover {
  position: relative;
  margin-bottom: 1rem;
  overflow: hidden;
  border-radius: 0.5rem;
  padding: 2.5rem 1rem 2rem;
  background: rgba($white, 0);
  box-shadow: 0 0.25rem 0.2rem 0 transparent;
  transition-delay: 0.2s;
  transition: all 0.25s ease-in-out;

  &-box {
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 10;
  }

  &-title {
    position: relative;
    margin: 2.5rem auto 0;
    text-align: center;
    transition: all 0.3s ease;
    transition-delay: 0.1s;
    will-change: transform;

    &::after {
      position: absolute;
      content: '';
      width: 0;
      height: 4px;
      background-color: rgba($blue, 20%);
      left: 50%;
      bottom: -10px;
      transition: all 0.25s ease-in-out;
    }
  }

  &-img {
    max-width: 3.25rem;
    height: auto;
    display: block;
    margin: -1rem auto 0;
    transition-delay: 0.32s;
    transition: all 0.25s ease-in-out;
    will-change: transform;
  }

  &-backdrop {
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -50px;

    width: 100px;
    height: 100px;
    border-radius: 100%;
    border: 1px solid rgba($dark, 5%);
    box-shadow: 0 0.25rem 0.4rem 0 rgba(44, 71, 146, 0.25);
    background-color: rgba($blue, 1%);
    transition: all 0.45s ease;
    // transition-delay: 0.1s;
    will-change: transform;
    z-index: 0;
  }

  &:hover {
    background: $white;
    box-shadow: 0 0.25rem 4rem 0 rgba($blue, 25%);

    .card-hover-title::after {
      width: 100%;
      left: 0;
    }

    .card-hover-backdrop {
      background: rgba($blue, 5%);
      box-shadow: 0 0.25rem 1rem 0 rgba($blue, 25%);
      transform: translateY(-2rem) scale(6);
    }

    .card-hover-img {
      transform: translateY(1.5rem) scale(1.5);
    }

    .card-hover-title {
      transform: translateY(0.75rem);
    }
  }
}
</style>
