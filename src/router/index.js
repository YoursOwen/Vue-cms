import Vue from 'vue'
import Router from 'vue-router'

// @为vue封装的，代表src路径
import homeContainer from '../pages/home/index.vue'
import memberContainer from '../pages/member/index.vue'
import searchContainer from '../pages/search/index.vue'
import shopcarContainer from '../pages/shopcar/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      component: homeContainer
    },
    {
      path: '/member',
      component: memberContainer
    },
    {
      path: '/search',
      component: searchContainer
    },
    {
      path: '/shopcar',
      component: shopcarContainer
    },
  ],
  linkActiveClass:"mui-active"
})
