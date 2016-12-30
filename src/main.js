import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'

Vue.use(MintUI)
/*
vue-router
**/
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import {routes} from './routers'
const router = new VueRouter({
  routes
})
/*
vux
**/
import store from './store/states.js'
/*
样式引入
**/
import './assets/css/layout.scss'
import './assets/css/fonts.css'
window.rootApp=new Vue({
  el: '#app',
  router,
  store,
  //主组件方法
  methods:{
    //路由
    goto:function(value){
      this.$router.push('/'+value);
    }

  },
  render: h => h(App)
})
