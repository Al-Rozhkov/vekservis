<template>
  <article v-once>
    <div class="container">
      <ul class="article-submenu">
        <li v-for="(section, index) in sectionsList" :key="index">
          <a :href="'#sec-' + index" v-html="section.title" />
        </li>
      </ul>
    </div>
    <section
      v-for="(section, index) in sectionsList"
      :id="'sec-' + index"
      :key="index"
      class="section"
    >
      <h2 class="section-title" v-html="section.title" />
      <div class="section-body" v-html="section.content" />
    </section>
  </article>
</template>

<script>
export default {
  props: {
    sectionsList: {
      required: true
    }
  }
}
</script>

<style lang="scss">
@import '~assets/scss/init.scss';

ul.article-submenu {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto 2rem;
  padding: 0.5rem 0;

  li {
    padding: 0 2.5rem 2rem 0;

    @include media-breakpoint-between(sm, lg) {
      flex: 0 0 50%;
      max-width: 50%;
    }
    @include media-breakpoint-up(lg) {
      flex: 0 0 25%;
      max-width: 25%;
    }

    a {
      color: $link-color;
      line-height: 1.25;
      display: block;

      &:hover {
        color: $link-hover-color;

        &:before {
          background-color: $link-hover-color;
          opacity: 0.3;
        }
      }

      &:before {
        content: ' ';
        display: block;
        width: 2rem;
        height: 4px;
        background-color: $link-color;
        opacity: 0.15;
        margin-bottom: 0.4rem;
      }
    }
  }
}
</style>
