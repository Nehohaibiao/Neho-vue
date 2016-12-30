<template>
  <div id="chat">
    <div class="neho-header">
      <mt-header fixed title="列表">
      </mt-header>
    </div>
    <mt-loadmore :bottom-method="loadBottom" ref="loadmore">
      <div class="neho-container" :style="{height:clientHeight}">
        <div class="neho-row reset">
          <div class="neho-col-10 reset">
            <!--内容单元-->
            <mt-navbar v-model="selected">
              <mt-tab-item id="1">选项一</mt-tab-item>
              <mt-tab-item id="2">选项二</mt-tab-item>
              <mt-tab-item id="3">选项三</mt-tab-item>
            </mt-navbar>

            <!-- tab-container -->
            <mt-tab-container v-model="selected">
              <mt-tab-container-item id="1">
                <mt-cell v-for="n in 10" :title="'内容 ' + n" />
              </mt-tab-container-item>
              <mt-tab-container-item id="2">
                <mt-cell v-for="n in 4" :title="'测试 ' + n" />
              </mt-tab-container-item>
              <mt-tab-container-item id="3">
                <mt-cell v-for="n in 6" :title="'选项 ' + n" />
              </mt-tab-container-item>
            </mt-tab-container>
            <!--内容单元 end-->
          </div>
        </div>
      </div>
    </mt-loadmore>
  </div>
</template>

<script>
  import neho from '../assets/js/global.js'
  import { MessageBox } from 'mint-ui'
  export default{
    data(){
      return{
        selected:'2',
        clientHeight:'300px'
      }
    },
    methods:{
      //上拉组件
      loadBottom(chatBottom){
        MessageBox('提示', '没有更多数据Σ( ° △ °|||)︴');
        this.allLoaded = true;// 若数据已全部获取完毕
        this.$refs.loadmore.onBottomLoaded(chatBottom);
      }
    },
    created:function(){
      //计算浏览器高度
      this.clientHeight=neho.getClientHeight(95);
    },
    //观察选项卡
    watch:{
      selected:function(value){
        switch (value) {
          //TAB为1的时候
          case '1':
            MessageBox('提示', '当前选中TAB1(๑•̀ㅂ•́)و✧');
            break;
          //TAB为2的时候
          case '2':
            MessageBox('提示', '当前选中TAB2(￣_,￣ )');
            break;
          //TAB为3的时候
          case '3':
            MessageBox('提示', '当前选中TAB3( ° △ °|||)︴');
            break;
          default:
            console.log(value);
        }
      }
    }
  }
</script>
