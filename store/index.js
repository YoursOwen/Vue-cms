import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

import getters from './getters'
import mutations from './mutations'

const state = {

  car:JSON.parse(localStorage.getItem('car') || '[]'),
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
})