import Vue from 'vue'
import App from './App'
import router from './router'

// 安装引入Vue-resource
import vueRource from 'vue-resource'
// 安装Vue-resource
Vue.use(vueRource)

Vue.http.options.root = 'http://vue.lovegf.cn:8899'
// Post请求不支持application，转化为传统表单格式
Vue.http.options.emulateJSON = true;

// 引入Mint框架
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)

//导入moment，使用过滤器filter
import moment from 'moment'
Vue.filter('timeFliter', function (value) {
  return moment(value).format('YYYY-MM-DD HH:mm:ss')
})

// 引用mui框架
// import './lib/mui/js/mui'   不需要引入，引入会报错
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'

//定义全局的评论组件，多个地方会用的到建议定义全局
import comment from './components/comment/index.vue'
//第一个参数是组件名，第二个参数是引用的模板
Vue.component('comment',comment)

// lazy load
import { Lazyload } from 'mint-ui'
Vue.use(Lazyload)



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: c => c(App)
})
