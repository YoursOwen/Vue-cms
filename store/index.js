import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

import getters from './getters'
import mutations from './mutations'

const state = {
  phoneCount:0,
  car:[],
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
})