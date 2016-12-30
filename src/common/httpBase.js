/*
Created by neho 2016 12 27
**/
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
import config from '../config/setting'
//封装vue-resource
var getAbsUrl = function (_url) {
  return config.baseServerUrl + _url;
}
//成功回调
var successCallback = function (response, successBack) {
  successBack(response.body);
}
//失败回调
var errorBack = function (response, successBack) {
  errorBack(response.body);
}
module.exports = {
  //post请求
  post:function(url, data, successBack, errorBack){
    Vue.http.post(
      getAbsUrl(url),
      data,
      {
        emulateJSON: true,
        //请求头
        headers:null
      }
    ).then(function(response){
      //回调正确
      successCallback(response, successBack);
    },function(response){
      //错误回调
      errorBack(response, errorBack);
    })
  }
}
