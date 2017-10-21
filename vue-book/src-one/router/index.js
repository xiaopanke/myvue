import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../containers/Home.vue'
import List from '../containers/List.vue'
import Add from '../containers/Add.vue'

Vue.use(VueRouter)
//路由表
const routes=[
  {path:'/',component:Home},
  {path:'/home',component:Home},
  {path:'/list',component:List},
  {path:'/add',component:Add},
  {path:'*',redirect:'/home'}//配置404，配置不到，就到首页
]

export default new VueRouter({
  routes
})
