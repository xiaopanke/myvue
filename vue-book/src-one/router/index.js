import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../containers/Home.vue'
import List from '../containers/List.vue'
import Add from '../containers/Add.vue'
import Update from '../containers/Update.vue'

Vue.use(VueRouter)
//路由表
const routes=[
  {path:'/',component:Home},
  {path:'/home',component:Home},
  {path:'/list',component:List},
  {path:'/add',component:Add},
  {path:'/update/:id',component:Update,name:'update'},
  {path:'*',redirect:'/home'}//配置404，配置不到，就到首页
]

export default new VueRouter({
  routes
})
