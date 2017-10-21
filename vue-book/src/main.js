import Vue from 'vue'
import App from './App.vue'
import router from './router' //默认引用时，如果是index.js可以省略
/*
* runtime+compiler 支持编译template,然后再将template编译成render函数
* runtime 不支持编译template
* */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
