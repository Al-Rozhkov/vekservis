import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    pageTitle: 'Эксплуатация объектов государственной и&nbsp;коммерческой недвижимости по&nbsp;всей России'
  },
  mutations: {
    changeTitle (state, newTitle) {
      state.pageTitle = newTitle
    }
  }
})

export default store
