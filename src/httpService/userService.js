import httBase from '../common/httpBase';
//请求模块
module.exports = {
  //用户模块
  getContact: function (data, success) {
    httBase.post("", data, success);
  }
}
