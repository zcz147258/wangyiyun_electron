<!--
 * @Descripttion: 
 * @Author: mikasa
 * @Date: 2020-10-13 13:36:26
-->
<template>
  <div id="find-music">
    <div class="find-music-header">
      <a-menu mode="horizontal" :defaultSelectedKeys="['1']">
        <a-menu-item key="1" @click="tourl('/recommendation')">
          个性推荐
        </a-menu-item>
        <a-menu-item key="2" @click="tourl('/songsheet')">
          每日推荐
        </a-menu-item>
        <!-- <a-menu-item key="4" @click="tourl('/Ranking')">
          排行榜
        </a-menu-item>
        <a-menu-item key="5" @click="tourl('/singer')">
          歌手
        </a-menu-item> -->
      </a-menu>
    </div>
    <div class="container">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
  },
  methods:{
    tourl(path){
        this.$router.push(path)
    }
  }
};
</script>

<style lang="less">

.ant-menu-horizontal > .ant-menu-item:hover, .ant-menu-horizontal > .ant-menu-submenu:hover, .ant-menu-horizontal > .ant-menu-item-active, .ant-menu-horizontal > .ant-menu-submenu-active, .ant-menu-horizontal > .ant-menu-item-open, .ant-menu-horizontal > .ant-menu-submenu-open, .ant-menu-horizontal > .ant-menu-item-selected, .ant-menu-horizontal > .ant-menu-submenu-selected{
    color: @globalcolor !important;
    border-bottom: 2px solid @globalcolor !important;
}
.container::-webkit-scrollbar {
  display: none;
}
#find-music{
  .find-music-header{
    width: 100%;
    margin: auto;
    text-align: center;
  }
  .container{
    overflow: scroll;
  }
}
</style>