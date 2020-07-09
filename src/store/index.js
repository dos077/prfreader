import Vue from 'vue'
import Vuex from 'vuex'
import alias from './alias'
import galleries from './galleries'
import profolio from './profolio'
import profile from './profile'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    alias,
    profile,
    galleries,
    profolio
  }
})
