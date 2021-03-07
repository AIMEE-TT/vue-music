import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import http from './api/http'
// 将封装好的http挂载到Vue.prototype
// 就可以在任意组件使用this就可以获取到封装好的文件
Vue.prototype.$http = http

// 图片懒加载
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad, {
  loading: require('./assets/img/singer/top50.png')
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
