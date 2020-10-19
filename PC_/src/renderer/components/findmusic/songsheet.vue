<!--
 * @Descripttion: 
 * @Author: mikasa
 * @Date: 2020-10-13 16:55:52
-->
<template>
  <!-- 每日推荐 -->
  <div id="myday">
    <div class="header">
      <div class="left">
        <div class="day">{{ compu(day) }}</div>
        <div class="date">{{ date }}</div>
      </div>
      <div class="right">
        <div style="font-size: 25px">每日歌曲推荐</div>
        <div style="margin-top:10px">根据你的音乐口味生成,每日6:00更新</div>
      </div>
    </div>
    <div class="playall">
      <a-button class="btn" type="primary" icon="play-circle" @click="playall">播放全部 </a-button>
    </div>
    <table-d :songList="songList" :spinning="spinning"></table-d>
  </div>
</template>

<script>
import TableD from "@/components/table/table";
import { recommendsongs, login } from "@/utils/api/findmusic.js";
export default {
  data() {
    return {
      songList: [],
      spinning: true,
      day:0,
      date:0,
    };
  },
  mounted() {
    this.day = new Date().getDay()
    this.date = new Date().getDate()
    recommendsongs()
      .then((res) => {
        this.songList = res.data.dailySongs;
        this.spinning = false;
      })
      .catch((err) => {});
  },
  computed:{
    compu(){
      return function(day1){
        var day = ''
        switch(day1){
          case 0: day = '星期日';break;
          case 1: day = '星期一';break;
          case 2: day = '星期二';break;
          case 3: day = '星期三';break;
          case 4: day = '星期四';break;
          case 5: day = '星期五';break;
          case 6: day = '星期六';break;
        }
        return day
      }
     
    }
  },
  components: {
    TableD,
  },
  methods:{
    playall(){

    }
  }
};
</script>

<style lang="less" scoped>
#myday {
  height: 100%;
  .header {
    display: flex;
    padding: 20px 30px;
    margin: 0px 30px;
    margin-top: 20px;
    border-radius: 5px;
    background-color: rgba(255, 235, 205, 0.493);
    .left {
      width: 100px;
      height: 100px;
      text-align: center;
      margin-top: 20px;
      background-color: white;
      border-radius: 5px;
      margin-right: 20px;
      .day {
        margin-top: 15px;
        font-size: 20px;
      }
      .date {
        font-size: 30px;
        font-weight: bolder;
        color: @globalcolor;
      }
    }
    .right {
      margin-top: 35px;
      height: 100px;
    }
  }
  .playall{
    margin-top: 20px;
    padding: 0px 30px;
    .btn{
      background-color: @globalcolor;
      border: none;
    }
  }
}
</style>