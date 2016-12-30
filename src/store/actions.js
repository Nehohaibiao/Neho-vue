import * as types from './mutation-types'

export default {
  /*
  *新请求处理模式 neho 2016-12-29 --begin
  **/
  /*
  数据状态
  **/
  //交易列表
  refreshContactData({commit}, obj){
    commit(types.REFRESH_CONTACT_DATA, obj)
  },
  /*
  页码数据
  **/
  refreshPageData({commit}, obj){
    commit(types.REFRESH_PAGE_DATA, obj)
  },
  /*
  页面加载状态
  **/
  refreshPageLoad({commit}, obj){
    commit(types.REFRESH_PAGE_LOAD, obj)
  },
  /*
  页面数据无
  **/
  refreshPageStatus({commit}, obj){
    commit(types.REFRESH_PAGE_STATUS, obj)
  },
  /*
  *新请求模式 --end
  **/
}
