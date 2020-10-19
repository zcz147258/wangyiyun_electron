<!--
 * @Descripttion: 
 * @Author: mikasa
 * @Date: 2020-10-08 11:26:34
-->
<template>
  <div id="leftmenu">
    <div class="toper">
      <a-menu
        style="width: 200px"
        mode="inline"
        theme="light"
        :default-selected-keys="['1']"
        :default-open-keys="['sub1', 'sub2']"
      >
        <a-sub-menu disabled key="sub1">
          <span slot="title"><span>推荐</span></span>
          <a-menu-item key="1"
          @click="tourl('/findmusic')"
            ><a-icon type="question" /> 发现音乐
          </a-menu-item>
          <!-- <a-menu-item key="2" @click="tourl('/fmradio')"><a-icon type="info" /> FM电台 </a-menu-item>
          <a-menu-item key="3" @click="tourl('/video')"><a-icon type="play-square" /> 视频 </a-menu-item>
          <a-menu-item key="4" @click="tourl('/friends')"
            ><a-icon type="usergroup-delete" /> 朋友
          </a-menu-item> -->
        </a-sub-menu>
        <!-- <a-sub-menu disabled key="sub2" >
          <span slot="title"><span>我的</span></span>
          <a-menu-item key="5"
          @click="tourl('/localmusic')"
            ><a-icon type="folder-open" /> 本地音乐
          </a-menu-item>
          <a-menu-item key="6" @click="tourl('/download')"><a-icon type="upload" /> 下载管理 </a-menu-item>
          <a-menu-item key="7"
          @click="tourl('/mydisk')"
            ><a-icon type="interaction" /> 我的云盘
          </a-menu-item>
          <a-menu-item key="8" @click="tourl('/mycollections')"><a-icon type="star"  /> 我的收藏 </a-menu-item>
        </a-sub-menu> -->
        <a-sub-menu key="sub3">
          <span slot="title"><span>我的歌单
             <a-tooltip placement="topRight" title="添加歌单">
                <a-icon style="margin-left:60px" type="plus-circle" @click="addmySongList" />
             </a-tooltip>
            </span></span>
          <!-- 循环 -->
          <a-menu-item v-for="item in mySongList" :key="item.id" @click="tourl('/songsheet')"
            ><a-icon type="menu-unfold" /> {{ item.name }}
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub4">
          <span slot="title"><span>收藏的歌单</span></span>
          <!-- 循环 -->
          <a-menu-item v-for="item in CollectionList" :key="item.id" @click="tourl('/collectionssheet')"
            ><a-icon type="menu-unfold" /> {{ item.name }}
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      //我的歌单
      mySongList:[
        {
          id:'9',
          name:'花若怜落在谁的指尖'
        },
        {
          id:'10',
          name:'球队歌曲'
        },
        {
          id:'11',
          name:'金属'
        },
        {
          id:'12',
          name:'纯音乐'
        },
      ],
      //收藏歌单
      CollectionList:[
        {
          id:'13',
          name:'「古风」最值得单曲循环的古风歌合集'
        },
        {
          id:'14',
          name:'周华健热门50首'
        },
        {
          id:'15',
          name:'李宗盛，每一首歌都深深击中内心'
        },
        {
          id:'16',
          name:'【怀旧老歌】：张学友刘德华、精选版'
        },
      ]
    }
  },
  methods:{
    tourl(path){
      this.$router.push(path)
    },
    addmySongList(){
      console.log('增加歌单')
    }
  }
};
</script>

<style lang="less">
.toper::-webkit-scrollbar {
  display: none;
}
.toper {
  width: 210px;
  height: 580px;
  overflow: scroll;
  border-right: 1px solid #1d1a1af6;
}

.ant-menu-item-selected {
  color: @globalcolor !important;
}

.ant-menu-vertical .ant-menu-item::after, .ant-menu-vertical-left .ant-menu-item::after, .ant-menu-vertical-right .ant-menu-item::after, .ant-menu-inline .ant-menu-item::after{
  border-right: 3px solid @globalcolor !important;
}
.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected{
  background-color: rgba(241, 210, 210, 0.527) !important;
}
.ant-menu-item:hover {
  color: red;
}
.ant-menu-sub.ant-menu-inline > .ant-menu-item,
.ant-menu-sub.ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title {
  line-height: 35px;
  height: 35px;
  // .eclipse(150px,35px);
}
.ant-menu-inline,
.ant-menu-vertical,
.ant-menu-vertical-left {
  border-right: none;
}
</style>