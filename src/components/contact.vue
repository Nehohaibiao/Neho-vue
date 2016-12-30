<template>
  <div id="contact">
    <div class="neho-header">
      <mt-header fixed title="联系人">
      </mt-header>
    </div>
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" ref="loadmore">
      <div class="neho-container" :style="{height:clientHeight}">
        <div class="neho-row reset">
          <div class="neho-col-10 reset">
            <!--内容单元-->
            <mt-cell-swipe v-for="item in items"
              :title="item.name"
              :right="[
                {
                  content: 'Delete',
                  style: { background: 'red', color: '#fff' },
                  handler: () => this.$messagebox('delete')
                }
              ]">
              <img slot="icon" src="../assets/logo.png" width="24" height="24"/>
              </mt-cell-swipe>
              <!--内容单元 end-->
          </div>
        </div>
      </div>
    </mt-loadmore>
    <div name="support">
      <!--popup-->
      <mt-popup
        v-model="popupVisible"
        position="top">
        <div calss="neho-row">
          <div class="neho-col-10 reset">
            <div class="contact-search">
              <mt-search>
                v-model="value"
                cancel-text="取消"
                placeholder="搜索">
              </mt-search>
            </div>
          </div>
        </div>
      </mt-popup>
    </div>
  </div>
</template>

<style>
/*search*/
.contact-search{
  height:50px
}
.mint-search{
  height:100%
}
.mint-popup-top{
  width:100%
}
.mint-searchbar{
  background-color: rgb(128,128,128)
}
</style>

<script>
  import neho from '../assets/js/global.js'
  import userService from '../httpService/userService.js'
  export default{
    data(){
      return{
        clientHeight:'300px',
        items:[
          {name:'邓海标'}
        ],
        popupVisible:false
      }
    },
    methods:{
      //下拉组件
      loadTop(contactTop){
        this.popupVisible=true;
        this.$refs.loadmore.onTopLoaded(contactTop);
      },
      //上划组件
      loadBottom(contactBottom) {
        //上拉获取数据
        this.getContact();
        this.allLoaded = true;// 若数据已全部获取完毕
        this.$refs.loadmore.onBottomLoaded(contactBottom);
      },
      //获取服务器数据
      getContact:function(){
        var self=this;
        var contactPage={};
        if(!this.$store.state.pageLoad.contact){
          contactPage={
            pageIndex:1,
            pageSize:15
          }
        }else{
            contactPage={
              pageIndex:parseInt(this.$store.state.pageData.contact.pageIndex)+1,
              pageSize:this.$store.state.pageData.contact.pageSize
          }
        }
        userService.getContact(contactPage,function(res){
          //回调数据处理
          var contact_data=res.data;
          var contact_page=res.page;
          //数据判断
          if(contact_page.dataCout==0){
            //显示无数据状态
            self.$store.dispatch('refreshPageStatus',{name:'contact',value:true});
            //设置加载状态为true
            self.$store.dispatch('refreshPageLoad',{name:'contact',value:true});
          }else{
            //有数据的情况下
            if(contactPage.pageIndex<contact_page.pageCount+1){
              /*
              请求页码少于服务器页码
              **/
              //页码更新
              self.$store.dispatch('refreshPageData',{name:'contact',value:contact_page});
              //数据更新
              /*请求页码为1的时候*/
              if(cashPage.pageIndex==1){
                self.$store.dispatch('refreshCashData',{name:'cash',value:cash_data});
              }else{
                var tempContactData=self.$store.state.contactData;
                tempContactData=tempContactData.concat(contact_data);
                self.$store.dispatch('refreshContactData',{name:'contact',value:tempContactData});                
              }
              //设置加载状态为true
              self.$store.dispatch('refreshPageLoad',{name:'contact',value:true});
            }else{
              /*
              请求页码大于于服务器页码
              **/
            }
          }
        })
      }
    },
    created:function(){
      //计算浏览器高度
      this.clientHeight=neho.getClientHeight(95);
      //获取页码数据
      if(!this.$store.state.pageLoad.contact){
        this.getContact();
      }
    }
  }
</script>
