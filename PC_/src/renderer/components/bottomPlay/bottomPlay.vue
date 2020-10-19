<!--
 * @Descripttion: 
 * @Author: mikasa
 * @Date: 2020-10-09 13:59:27
-->
<template>
  <div id="bottom-play">
    <div class="control-play">
      <div class="control-par">
        <a-tooltip placement="topLeft" title="上一首">
          <span
            class="control iconfont icon-shangyishou"
            @click="last_song"
          ></span>
        </a-tooltip>
      </div>
      <div class="control-par center">
        <a-tooltip placement="topLeft" title="暂停/播放">
          <span
            v-if="pause"
            class="control center-icon iconfont icon-zanting"
            @click="changeStatus"
          ></span>
          <span
            v-else
            class="control center-icon iconfont icon-bofang"
            @click="changeStatus"
          ></span>
        </a-tooltip>
      </div>
      <div class="control-par">
        <a-tooltip placement="topLeft" title="下一首">
          <span
            class="control iconfont icon-xiayishou"
            @click="next_song"
          ></span>
        </a-tooltip>
      </div>
    </div>
    <div class="control-progress">
      <aplayer
        ref="player"
        @ended="playend"
        theme="#C62F2F"
        :list="playList"
        :music="currentMusic"
        :listFolded="true"
        :volume="volume"
        :muted="muted"
      />
    </div>
    <div class="volume-list">
      <div class="first">
        <span
          v-if="!muted"
          class="iconfont icon-shengyin"
          @click="novolume"
        ></span>
        <span v-else class="iconfont icon-jingyin" @click="novolume"></span>
      </div>
      <div style="margin-left: 50px">
        <c-progress
          class="c-progress"
          :percent="50"
          @percentChange="onPercentChange"
          :show-slider="true"
          progress-color="#C62F2F"
          :width="50"
        />
      </div>
      <div class="song-list">
        <a-tooltip placement="topLeft" title="播放列表">
          <a-icon type="ordered-list" @click="openList" />
        </a-tooltip>
      </div>
    </div>

    <!-- 列表抽屉 -->

    <a-drawer
      title="播放列表"
      placement="right"
      :visible="visible"
      :wrapClassName="'warp'"
      @close="onClose"
    >
      <div class="song-ul">
        <div
          class="song-lister"
          v-for="(item, index) in playList"
          :key="index"
          @click="play_this(item)"
        >
          <span
            v-show="currentMusic.id == item.id"
            class="iconfont icon-bofang"
          ></span>
          <span class="song-name">
            {{ item.title }}
          </span>
          <span class="song-singer">{{ item.artist }}</span>
        </div>
      </div>
    </a-drawer>
  </div>
</template>

<script>
import Aplayer from "vue-aplayer";
import CProgress from "@/components/c-progress/c-progress";
export default {
  data() {
    return {
      muted: false, //静音
      volume: 0.5,
      visible: false,
      pause: false, //是否暂停
      playDom: "",
      currentMusic: {
        id: "1",
        title: "secret base~君がくれたもの~",
        artist: "Silent Siren",
        src: "../../../../static/music/1.mp3",
        pic: "https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg",
      },
      playList: [
        {
          id: "1",
          title: "囚鸟",
          artist: "GEM",
          src: "../../../../static/music/2.mp3",
          pic: "https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg",
        },
        {
          id: "2",
          title: "亚细亚体制个",
          artist: "GEM",
          src: "../../../../static/music/3.mp3",
          pic: "https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg",
        },
        {
          id: "3",
          title: "4",
          artist: "GEM",
          src: "../../../../static/music/4.mp3",
          pic: "https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg",
        },
      ], //播放列表
      loop: false, //是否循环播放
    };
  },
  components: {
    Aplayer,
    CProgress,
  },
  mounted() {
    this.playDom = this.$refs.player;
  },
  methods: {
    //上一首
    last_song() {
      var indexId = null;
      this.playList.forEach((item,index)=>{
        if(item.id === this.currentMusic.id){
            indexId = index
        }
      })
      if(indexId == 0){
          this.$message.warning('已经是第一首了')
      }else{
        this.currentMusic = this.playList[indexId-1]
         this.playDom.currentTime = 0;
        this.playDom.pause();
        this.pause = false;
        setTimeout(() => {
          this.pause = true;
          this.playDom.play();
        }, 500);
      }
    },
    //下一首
    next_song() {
      var indexId = null;
      this.playList.forEach((item,index)=>{
        if(item.id === this.currentMusic.id){
            indexId = index
        }
      })
       if(indexId == this.playList.length -1){
         this.$message.warning('已经是最后一首了')
      }else{
        this.currentMusic = this.playList[indexId+1]
         this.playDom.currentTime = 0;
        this.playDom.pause();
        this.pause = false;
        setTimeout(() => {
          this.pause = true;
          this.playDom.play();
        }, 500);
      }
    },
    //切换列表
    play_this(item) {
      this.currentMusic = item;
      this.playDom.currentTime = 0;
      this.playDom.pause();
        this.pause = false;
        setTimeout(() => {
          this.pause = true;
          this.visible = false;
          this.playDom.play();
        }, 500);
    },
    onClose() {
      //关闭
      this.visible = false;
    },
    novolume() {
      this.muted = !this.muted;
    },
    onPercentChange(e) {
      console.log(e);
      this.volume = e / 100;
    },
    playend() {
      //播放结束
      console.log(111111);
    },
    changeStatus() {
      this.pause = !this.pause;
      if (this.pause) {
        this.playDom.play();
      } else {
        this.playDom.pause();
      }
    },
    openList() {
      this.visible = !this.visible;
    },
  },
};
</script>

<style>
.c-progress-slider:hover {
  cursor: pointer;
}
.c-progress span {
  display: inline-block;
  width: 20px;
}
.aplayer-body {
  width: 600px;
}
.aplayer-pic {
  display: none;
}
.aplayer-music {
  display: none;
}
.aplayer.aplayer-withlist
  .aplayer-body
  .aplayer-controller
  .aplayer-time
  .aplayer-icon.aplayer-icon-menu {
  display: none !important;
}
.aplayer .aplayer-body .aplayer-info {
  height: 35px !important;
  border: none !important;
  box-sizing: border-box !important;
  box-shadow: none !important;
  padding: 10px 7px 0px 10px !important;
  /* z-index: 9999 !important; */
  /* overflow: auto !important; */
}
.aplayer-body {
  border: none !important;
}
.aplayer-controller .aplayer-time {
  font-size: 14px !important;
}
.aplayer {
  /* overflow: auto !important; */
  box-shadow: none !important;
}
.aplayer-volume-wrap {
  /* z-index: 999 !important; */
}
.aplayer-controller .aplayer-time .aplayer-volume-wrap {
  display: none !important;
}
.aplayer-volume-wrap .aplayer-volume-bar-wrap {
  /* z-index: 99999 !important; */
  display: none !important;
}
.aplayer-controller .aplayer-time .aplayer-volume-wrap + .aplayer-icon {
  margin-left: 10px !important;
}
</style>
<style lang="less" scoped>
.warp {
  .song-ul {
    .song-lister {
      position: relative;
      .iconfont {
        position: absolute;
        left: -15px;
        color: #c62f2f;
      }
      // width: 100%;
      padding: 2px 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: 34px;
      font-size: 15px;
      .song-name {
        .eclipse(100px,30px);
      }
      .song-singer {
        height: 30px;
        display: inline-block;
        line-height: 30px;
        font-size: 15px;
      }
    }
    .song-lister:hover {
      cursor: pointer;
      background-color: rgb(194, 194, 202);
    }
  }
}
#bottom-play {
  display: flex;
  border-top: 1px solid #bdaeae;
  height: 50px;
  .control-play {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    .control-par {
      border-radius: 100%;
      background-color: #d33030;
      width: 28px;
      height: 28px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 20px;
      .control {
        color: white;
        font-size: 14px;
        margin-top: 4px;
        cursor: pointer;
      }
      .center-icon {
        color: white;
        font-size: 18px;
        position: relative;
        left: 0.5px;
      }
    }
    .center {
      width: 32px;
      height: 32px;
    }
  }
  .volume-list {
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    .first {
      margin-right: 10px;
      margin-left: 10px;
      position: relative;
      top: 2px;
      left: 50px;
      span:hover {
        cursor: pointer;
      }
    }
    .song-list {
      margin-left: 40px;
      font-size: 20px;
    }
    .song-list:hover {
      cursor: pointer;
    }
  }
}
</style>