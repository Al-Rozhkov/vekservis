<template>
  <article v-once>
    <div class="container">
      <ul class="article-submenu">
        <li v-for="(section, index) in sectionsList" :key="index">
          <a v-bind:to="'#sec-' + index" v-html="section.title"></a>
        </li>
      </ul>
    </div>
    <section v-for="(section, index) in sectionsList" :key="index" :id="'sec-' + index" class="container">
      <h2>{{ section.title }}</h2>
      <div v-html="section.content"></div>
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
@import "~assets/scss/_variables.scss";

ul.article-submenu {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto 2rem;
  padding: 1rem 0;
  
  li {
    flex: 0 0 25%;
    max-width: 25%;
    padding: 0 3rem 2rem 0;
    
    a {
      color: $link-color;

      &:hover {
        color: $link-hover-color;
      }
    }
  }
}
</style>