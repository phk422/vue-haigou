<template>
  <!-- swiper -->
  <div class="swiper">
    <a href="#">
      <img :src="banners[currentIndex]" alt="" />
      <!-- 上一张，下一张图标 -->
      <span class="controll wrap">
        <i class="prev" @click="lastBanner"></i>
        <i class="next" @click="nextBanner"></i>
      </span>
      <!-- 轮播图小圆点 -->
      <span class="dots wrap">
        <span>
          <i v-for="(item, index) in banners" :key="item" :class="{active: currentIndex === index}" @click="dotClick(index)"></i>
          <!-- <i></i>
          <i class="active"></i>
          <i></i>
          <i></i> -->
        </span>
      </span>
    </a>
    <!-- 毛玻璃效果 -->
    <div class="service">
      <!-- 单独设置毛玻璃效果，防止文字也被毛玻璃化 -->
      <div class="blur"></div>
      <div class="wrap">
        <ul>
          <li>
            <i class="circle-icon">自</i>
            <a href="#">考拉自营</a>
          </li>
          <li>
            <i class="circle-icon">直</i>
            <a href="#">全球直彩</a>
          </li>
          <li>
            <i class="circle-icon">正</i>
            <a href="#">假一赔十</a>
          </li>
          <li>
            <i class="circle-icon">￥</i>
            <a href="#">售后无忧</a>
          </li>
        </ul>
        <div class="new-person">
          <i class="phone"></i>
          <a href="#"> 新人下载APP，领十元满减红包 </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import banner1 from '../assets/img/banner.jpg'
  import banner2 from '../assets/img/banner2.jpg'
  import banner3 from '../assets/img/banner3.jpg'
export default {
  data() {
    return {
      banners: [banner1, banner2, banner3],
      currentIndex: 0,
      timer: null
    }
  },
  created() {
    this.changeBanner()
  },
  methods: {
    changeBanner() {
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        if (this.currentIndex === this.banners.length - 1) {
          this.currentIndex = 0
        } else {
          this.currentIndex++
        }
      }, 3000)
    },
    dotClick(index) {
      this.changeBanner();
      this.currentIndex = index;
    },
    nextBanner() {
      if (this.currentIndex === this.banners.length - 1) {
        this.currentIndex = 0
      } else {
        this.currentIndex++
      }
    },
    lastBanner() {
      if (this.currentIndex !== 0) {
        this.currentIndex--
      } else {
        this.currentIndex = this.banners.length - 1
      }
    }
  },
  destroyed() {
    clearInterval(this.timer);
  }
};
</script>

<style>
</style>