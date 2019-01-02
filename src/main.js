import Vue from 'vue'
import App from './App'
import router from './router'
import less from 'less'

// 引入Mint框架
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(Mint)

// 引用mui框架
// import './lib/mui/js/mui'   不需要引入，引入会报错
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: c => c(App)
})
