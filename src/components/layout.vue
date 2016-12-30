<template>
  <div id="layout">
    <!--二级路由入口-->
    <router-view></router-view>
    <neho-tabbar></neho-tabbar>
  </div>
</template>

<script>
import nehoTabbar from './common/tabbar.vue'
export default {
  components:{
    nehoTabbar
  }
}
</script>
