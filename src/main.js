// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import HelloWorld from './components/HelloWorld'
import Home from './components/Home'
import Users from './components/Users'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios=axios
Vue.use(VueRouter)
Vue.use(VueResource)

//axois的默认设置

//配置路由
const router =new VueRouter({
  routes:[
    {path:"/home",component:Home},
    {path:"/helloworld",name:"helloLink",component:HelloWorld},
    {path:"/users",component:Users},
    {path:"/*",redirect:"/home"},
  ],
  mode:"history",
})

//全局守卫
router.beforeEach((to,from,next)=>{
  next();
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
