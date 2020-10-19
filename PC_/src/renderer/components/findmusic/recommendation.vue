<!--
 * @Descripttion: 
 * @Author: mikasa
 * @Date: 2020-10-13 16:55:14
-->
<template>
  <div id="recommendation">
    <a-spin :spinning="spinning" tip="Loading...">
       <!-- 轮播图 -->
    <div class="swipers">
      <swiper class="swipers-all" ref="mySwiper" :options="swiperOptions">
        <swiper-slide
          class="item"
          v-for="(item) in recommendbanner"
          :key="item.targetId"
        >
          <img :src="item.imageUrl" alt="" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!--推荐歌单  -->
    <div class="personalizedList">
      <div class="title">
        <div class="title-left">推荐歌单</div>
        <div class="title-right" @click="rightwaring">
          更多<span class="iconfont icon-xiangyou"></span>
        </div>
      </div>
      <div class="content">
        <div v-for="item in personalizedList" :key="item.id">
          <img :src="item.picUrl" alt="" />
          <p>{{ item.name }}</p>
          <!-- hover -->
          <div class="hover-introduce">
            <p>{{ item.copywriter }}</p>
          </div>
          <!-- 播放图标 -->
          <div class="hover-icon">
            <span class="iconfont icon-bofang1"></span>
          </div>
          <!-- 播放数量 -->
          <div class="amount">
            <span class="iconfont icon-V"></span
            >{{
              item.playCount > 100000
                ? parseInt(item.playCount / 10000) + "万"
                : item.playCount
            }}
          </div>
        </div>
      </div>
    </div>
    <!--推荐MV  -->
    <div class="personalizedMv">
      <div class="title">
        <div class="title-left">推荐MV</div>
        <div class="title-right" @click="rightwaring">
          更多<span class="iconfont icon-xiangyou"></span>
        </div>
      </div>
      <div class="content">
        <div v-for="item in personalizedMv" :key="item.id">
          <img :src="item.picUrl" alt="" />
          <p>{{ item.artistName + " " + item.name }}</p>
          <!-- hover -->
          <div class="hover-introduce">
            <p>{{ item.copywriter }}</p>
          </div>
          <!-- 播放图标 -->
          <div class="hover-icon">
            <span class="iconfont icon-bofang1"></span>
          </div>
          <!-- 播放数量 -->
          <div class="amount">
            <span class="iconfont icon-V"></span
            >{{
              item.playCount > 100000
                ? parseInt(item.playCount / 10000) + "万"
                : item.playCount
            }}
          </div>
        </div>
      </div>
    </div>
    <!--推荐电台  -->
    <div class="personalizedDjprogram">
      <div class="title">
        <div class="title-left">推荐电台</div>
        <div class="title-right" @click="rightwaring">
          更多<span class="iconfont icon-xiangyou"></span>
        </div>
      </div>
      <div class="content">
        <div v-for="item in personalizedDjprogram" :key="item.id">
          <img :src="item.picUrl" alt="" />
          <p>{{ item.name }}</p>
          <!-- hover -->
          <div class="hover-introduce">
            <p>{{ item.copywriter }}</p>
          </div>
          <!-- 播放图标 -->
          <div class="hover-icon">
            <span class="iconfont icon-bofang1"></span>
          </div>
          <!-- 播放数量 -->
          <div class="amount">
            <span class="iconfont icon-V"></span
            >{{
              item.playCount > 100000
                ? parseInt(item.playCount / 10000) + "万"
                : item.playCount
            }}
          </div>
        </div>
      </div>
    </div>
    </a-spin>
   
  </div>
</template>

<script>
import {
  personalizedList,
  personalizedMv,
  personalizedDjprogram,
  recommendbanner,
} from "@/utils/api/findmusic";
export default {
  data() {
    return {
      spinning:true,
      personalizedList: [], //推荐歌单
      personalizedMv: [], //推荐MV
      personalizedDjprogram: [], //推荐电台
      recommendbanner: [], //轮播图
      swiperOptions: {
        notNextTick: true,
        // loop: true, // 无限循环
        pagination: {
          el: ".swiper-pagination",
          type: "bullets"
        },
        autoplay:{
　　　　　　　　delay: 3000,
　　　　　　　　stopOnLastSlide: false,
　　　　　　　　/* 触摸滑动后是否继续轮播 */
　　　　　　　　disableOnInteraction: false
　　　　　},
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 0,
          stretch: 10, // slide左右距离
          depth: 180, // slide前后距离
          modifier: 2, //
          slideShadows: false, // 滑块遮罩层
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    // 推荐歌单
    personalizedList({ limit: 10 })
      .then((res) => {
        this.personalizedList = res.result;
        this.spinning = false
      })
      .catch((err) => {});
    //推荐mv
    personalizedMv({ limit: 5 })
      .then((res) => {
        if (res.result.length > 5) {
          this.personalizedMv = res.result.splice(0, 5);
        } else {
          this.personalizedMv = res.result;
        }
      })
      .catch((err) => {});
    //推荐电台
    personalizedDjprogram({ limit: 2 })
      .then((res) => {
        if (res.result.length > 5) {
          this.personalizedDjprogram = res.result.splice(0, 5);
        } else {
          this.personalizedDjprogram = res.result;
        }
      })
      .catch((err) => {});
    //轮播图
    recommendbanner({ type: 0 })
      .then((res) => {
        this.recommendbanner = res.banners;
      })
      .catch((err) => {});
  },
  methods: {
    rightwaring() {
      this.$message.warning("这个功能正在开发中...");
    },
  },
};
</script>

<style lang="less" scoped>
#recommendation {
  width: 100%;
  margin-bottom: 20px;
  .personalizedList,
  .personalizedMv,
  .personalizedDjprogram {
    padding-top: 15px;
    padding-bottom: 15px;
    width: 92%;
    margin: auto;
    .title {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid rgb(233, 229, 229);
      padding-bottom: 8px;
      .title-left {
        font-size: 16px;
      }
      .title-right {
        cursor: pointer;
      }
    }
    .content {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      margin-top: 20px;
      > div {
        width: 130px;
        position: relative;
        overflow: hidden;
        cursor: pointer;
        img {
          width: 130px;
          height: 130px;
          border-radius: 3px;
        }
        p {
          margin-top: 5px;
          color: black;
          width: 100%;
        }
        .hover-introduce {
          position: absolute;
          top: -50px;
          left: 0;
          opacity: 0;
          background-color: rgba(88, 86, 86, 0.637);
          width: 100%;
          transition: 0.5s all;
          p {
            padding-left: 10px;
            color: white;
            .eclipsemore(100%,2);
          }
        }
        .hover-icon {
          position: absolute;
          opacity: 0;
          top: 100px;
          right: 10px;
          span {
            font-size: 22px;
            color: white;
          }
        }
        .amount {
          position: absolute;
          top: 0;
          right: 5px;
          color: white;
          opacity: 0.9;
          span {
            color: white;
            margin-right: 5px;
          }
        }
      }
      > div:hover {
        .hover-introduce {
          top: 0;
          opacity: 0.9;
        }
        .hover-icon {
          opacity: 0.9;
        }
        .amount {
          opacity: 0;
          transition: 0.4s;
        }
      }
    }
  }
  .swipers {
    padding-top: 15px;
    padding-bottom: 15px;
    width: 700px;
    height: 250px;
    margin: auto;
    overflow: hidden;
    .swipers-all {
      height: 100%;
      .item {
        width: 600px;
        img {
          width: 100%;
          // height: 100%;
        }
      }
    }
  }
}
</style>