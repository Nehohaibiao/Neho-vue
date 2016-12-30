import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

const state = {
  /*
  *新请求处理模式 neho 2016-12-29 --begin
  **/
  /*
  数据状态
  **/
  contactData:[],
  /*
  页码数据
  **/
  pageData:{},
  /*
  页面加载状态
  **/
  pageLoad:{
    contact:true
  },
  /*
  页面数据无
  **/
  pageStatus:{
    contact:false
  }
  /*
  *新请求模式 --end
  **/
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
