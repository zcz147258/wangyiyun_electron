<!--
 * @Descripttion: 
 * @Author: mikasa
 * @Date: 2020-10-07 09:48:12
-->
<template>
  <div id="header">
      <div>
          
      </div>
    <div class="logo">
      <img src="../../../../static/image/logo.png" alt="" />
      <span>网易云音乐</span>
    </div>
    <div class="front-back">
      <a-tooltip placement="topRight" title="上一页">
         <span class="iconfont icon-xiangzuo"></span>
      </a-tooltip>
      <a-tooltip placement="topRight" title="下一页">
        <span class="iconfont icon-xiangyou"></span>
      </a-tooltip>
    </div>
    <div class="search-text" :style="{marginRight:marginRight}">
      <input type="text" placeholder="请输入歌名,歌手" />
      <span class="search iconfont icon-sousuo"></span>
    </div>
    <div class="login-area">
      <div class="avatar">
        <img
          src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505799434,1440072933&fm=26&gp=0.jpg"
          alt=""
        />
      </div>
      <div class="userinfo" style="display: flex">
        <p class="nickname">米兰主教练加图索</p>
        <span class="iconfont icon-sanjiaoxing"></span>
      </div>
    </div>
    <div class="skin">
       <a-tooltip placement="topRight" title="换肤">
           <span class="iconfont icon-pifu"></span>
       </a-tooltip>
    </div>
    <div class="email">
       <a-tooltip placement="topRight" title="邮箱">
          <span class="iconfont icon-youxiang"></span>
       </a-tooltip>
    </div>
    <div class="setting">
      <a-tooltip placement="topRight" title="设置">
        <span class="iconfont icon-shezhi"></span>
      </a-tooltip>
    </div>
    <div class="system">
      <a-tooltip placement="topRight" title="最小化">
        <span class="min iconfont icon-zuixiaohua" @click="minimizeWin"></span>

      </a-tooltip>
      <a-tooltip placement="topRight" title="设置"></a-tooltip>

        <span
          class="max iconfont icon-zuidahua_huaban1"
        ></span>
      <a-tooltip placement="topRight" title="关闭">
        <span class="close iconfont icon-guanbi" @click="closeWin"></span>

      </a-tooltip>
    </div>
  </div>
</template>

<script>
import { ipcRenderer } from "electron";
export default {
  data() {
    return {
        marginRight:'130px'
    };
  },
  methods: {
    //最小化
    minimizeWin() {
      ipcRenderer.send("min"); // 窗口最小化
    },
    maximizeWin() {
      ipcRenderer.send("max");
    },
    closeWin() {
      ipcRenderer.send("close"); // 关闭窗口，也结束了所有进程
    },
  },
};
</script>

<style lang="less" scoped>
#header {
  height: 50px;
  width: 100%;
  background-color: @globalcolor;
  display: flex;
  align-items: center;
  -webkit-app-region: drag;
  color: @headerscolor;
  .logo {
    margin: 0 20px;
    span {
      color: white;
      font-size: 20px;
      display: inline-block;
      line-height: 50px;
      font-weight: 500;
    }
    img {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      line-height: 50px;
      position: relative;
      margin-right: 10px;
      top: -4px;
    }
  }
  .front-back {
    -webkit-app-region: no-drag;
    .iconfont {
      font-size: 22px;
      color: rgba(231, 223, 223, 0.795);
    }
    .iconfont:hover {
      cursor: pointer;
      color: white;
    }
    margin-left: 20px;
    margin-right: 10px;
  }
  .search-text {
    input {
      padding-left: 10px;
      border: none;
      height: 25px;
      width: 200px;
      background-color: #a82828;
      border-radius: 10px 10px 10px 10px;
      line-height: 25px;
      color: white;
      -webkit-app-region: no-drag;
      outline: none;
    }
    input::-webkit-input-placeholder {
      color: rgba(250, 250, 250, 0.699);
    }
    .search {
      position: relative;
      left: -30px;
      color: rgb(231, 223, 223);
      top: 0px;
    }
    .search:hover {
      color: white;
      cursor: pointer;
    }
  }
  .login-area {
    display: flex;
    .avatar {
      img {
        border-radius: 50%;
        width: 25px;
        height: 25px;
        position: relative;
        top: 3px;
      }
    }
    .userinfo {
      height: 30px;
      line-height: 30px;
      margin-right: 20px;
      .nickname {
        font-size: 13px;
        margin-left: 10px;
        .eclipse(80px,30px);
      }
    }
  }
  .system {
    margin-left: 45px;
    flexgrow: 1;
  }
  .email,
  .setting,
  .icon-sanjiaoxing,
  .skin {
    width: 25px;
    margin-right: 10px;
    -webkit-app-region: no-drag;
    color: rgba(231, 223, 223, 0.856);
  }
  .min,
  .max,
  .close {
    font-size: 20px;
    widows: 30px;
    margin-right: 8px;
    -webkit-app-region: no-drag;
    color: rgba(231, 223, 223, 0.856);
  }
  .email:hover,
  .min:hover,
  .max:hover,
  .close:hover,
  .setting:hover,
  .icon-sanjiaoxing,
  .skin:hover {
    cursor: pointer;
    color: @hovercolor;
  }
}
</style>