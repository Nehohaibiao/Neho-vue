import * as types from './mutation-types'

export default {
  /*
  *新请求处理模式 neho 2016-12-29 --begin
  **/
  /*
  数据状态
  **/
  //交易列表
  [types.REFRESH_CONTACT_DATA] (state,obj){
    switch (obj.name) {
      case 'contact':
        state.contactData=obj.value;
        break;
      default:
        console.log(obj);
    }
  },
  /*
  页码数据
  **/
  [types.REFRESH_PAGE_DATA] (state,obj){
      state.pageData[obj.name]=obj.value;
  },
  /*
  页面加载状态
  **/
  [types.REFRESH_PAGE_LOAD] (state,obj){
      state.pageLoad[obj.name]=obj.value;
  },
  /*
  页面数据无
  **/
  [types.REFRESH_PAGE_STATUS] (state,obj){
      state.pageStatus[obj.name]=obj.value;
  },
  /*
  *新请求模式 --end
  **/
}
