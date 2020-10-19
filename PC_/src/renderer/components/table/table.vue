<!--
 * @Descripttion: 
 * @Author: mikasa
 * @Date: 2020-10-15 15:37:39
-->
<template>
  <div id="table" ref="vxetable">
    <a-spin :spinning="spinning" tip="Loading...">
      <vxe-table
        round
        :data="songList"
        show-header-overflow
        show-overflow
        highlight-hover-row
        stripe
        highlight-current-row
        :align="'center'"
        size="small"
        :seq-config="{ startIndex: 0 }"
      >
        <vxe-table-column type="seq" title="序号" width="60"></vxe-table-column>
        <vxe-table-column field="name" title="歌名"></vxe-table-column>
        <vxe-table-column field="ar[0].name" title="歌手"></vxe-table-column>
        <vxe-table-column field="al.name" title="专辑"></vxe-table-column>
        <!-- <vxe-table-column
          field="播放"
          type="html"
          title="操作"
          :formatter="formatRole"
        ></vxe-table-column> -->
      </vxe-table>
    </a-spin>
  </div>
</template>

<script>
const Electron = require("electron");
const remote = Electron.remote;
const Menu = remote.Menu;
const MenuItem = remote.MenuItem;
export default {
  // props:['songList','spinning'],
  props: {
    songList: {
      type: Array,
      default: [],
    },
    spinning: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
  mounted() {
    var rightTemplate = [
      {
        label: "播放",
        click: () => {
          console.log("11");
        },
      },
      { label: "收藏到歌单", submenu: [{
          label:'歌单',
          //监听事件
          click:function(){
              console.log("歌单列表")
          },
      }] },
    ];
    var m = remote.Menu.buildFromTemplate(rightTemplate);
    this.$refs.vxetable.addEventListener("contextmenu", (e) => {
      e.preventDefault(); //阻止冒泡
      if (this.istr(e) !== false) {
        //获取index
        const index = parseInt(this.istr(e).firstElementChild.firstElementChild.innerText)
        if(index){
          console.log(this.songList[index-1])
          m.popup({ window: remote.getCurrentWindow() });
        }
      }
    });
  },
  beforeDestroy() {
    //销毁组件
    this.$refs.vxetable.removeEventListener("contextmenu");
  },
  methods: {
    formatRole({ cellValue }) {
      return ``;
    },
    istr(e) {
      if (e.target.localName == "tr") {
        return e.target;
      } else if (e.target.parentElement.localName == "tr") {
        return e.target.parentElement;
      } else if (e.target.parentElement.parentElement.localName == "tr") {
        return e.target.parentElement.parentElement;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="less">
#table {
  padding: 20px 25px;
  margin-bottom: 50px;
  .vxe-table--main-wrapper {
    width: 750px !important;
    margin: auto !important;
  }
}
</style>