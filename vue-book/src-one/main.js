import Vue from 'vue';//引入vue
import App from './App.vue'//引入根组件
import router from './router' //引入路由
import './common/index.less' //公共样式
import VueAwesomeSwiper from 'vue-awesome-swiper'
require('swiper/dist/css/swiper.css')
Vue.use(VueAwesomeSwiper) //使用轮播图插件

new Vue({
  el:'#app',
  router,
  render:h=>h(App)
})
