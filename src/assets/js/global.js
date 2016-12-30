/*
Created by Neho
**/
export default{
  //获得浏览器高度
  getClientHeight:function(decade){
      var decadeCount=decade || 0;
      var height = 0;
      var body = window.document.body;
      if (window.innerHeight) {
      height = window.innerHeight;
      } else if (body.parentElement.clientHeight) {
      height = body.parentElement.clientHeight;
      } else if (body && body.clientHeight) {
      height = body.clientHeight;
      }
      return (height-decadeCount)+'px';
  },
  //判断数据是否可以处理
  ifDataWork:function(data){
    if(data == '' || data == null || data == undefined || data == {} || data == []){
      return false;
    }else{
      return true;
    }
  }
}
