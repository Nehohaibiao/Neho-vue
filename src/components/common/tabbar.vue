<template>
  <div id="tabbar">
    <mt-tabbar fixed v-model="selected">
      <mt-tab-item id="外卖" @click.native="goto('home')">
        <i class="iconfont iconHome" slot="icon"></i>
        首页
      </mt-tab-item>
      <mt-tab-item id="订单" @click.native="goto('contact')">
        <i class="iconfont iconContact" slot="icon"></i>
        联系人
      </mt-tab-item>
      <mt-tab-item id="发现" @click.native="goto('chat')">
        <i class="iconfont iconList" slot="icon"></i>
        订单
      </mt-tab-item>
      <mt-tab-item id="我的" @click.native="goto('me')">
        <i class="iconfont iconMe" slot="icon"></i>
        我
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        selected:'外卖'
      }
    },
    methods:{
      goto:function(value){
        this.$root.goto(value);
      }
    }
  }
</script>
