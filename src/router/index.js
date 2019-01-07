import Vue from 'vue'
import Router from 'vue-router'

// @为vue封装的，代表src路径
import homeContainer from '../pages/home/index.vue'
import memberContainer from '../pages/member/index.vue'
import searchContainer from '../pages/search/index.vue'
import shopcarContainer from '../pages/shopcar/index.vue'
import newsList from '../pages/newsInfo/index.vue'
import newsInfo from '../pages/newsInfo/newsInfo.vue'
import photoList from '../pages/photoInfo/index.vue'
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
    {
      path:'/home/newslist',
      component:newsList
    },
    {
      path:'/home/newsInfo/:id',
      component:newsInfo
    },
    {
      path:'/home/photolist',
      component:photoList
    }
  ],
  linkActiveClass:"mui-active"
})
