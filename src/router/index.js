import Vue from 'vue'
import Router from 'vue-router'

// @为vue封装的，代表src路径
import homeContainer from '../components/home/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: homeContainer
    }
  ]
})
