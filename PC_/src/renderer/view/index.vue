<!--
 * @Descripttion: 
 * @Author: mikasa
 * @Date: 2020-10-06 16:55:13
-->
<template>
  <div id="index">
    <headers></headers>
    <div class="container">
      <div class="left">
        <left-menu />
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
    <div class="bottom">
      <bottom-play></bottom-play>
    </div>
  </div>
</template>

<script>
import { login,refreshlogin } from '@/utils/api/login.js'
import Headers from "@/components/header/Header";
import LeftMenu from '@/components/leftMenu/leftMenu.vue'
import BottomPlay from '@/components/bottomPlay/bottomPlay.vue'
export default {
  data() {
    return {};
  },
  components: {
    Headers,
    LeftMenu,
    BottomPlay
  },
  mounted(){
    login({phone:18419617559,password:'zcz123456'}).then(res=>{
      //每日推荐
        refreshlogin().then(res=>{
        }).catch(err=>{
          console.log(err)
        })
    }).catch(err=>{

    })
  },
  onLoad() {},
};
</script>

<style lang="less">
#index{
  .container{
    height: 580px;
    display: flex;
    overflow: hidden;
    .right{
      flex: 1;
    }
  }
}

</style>