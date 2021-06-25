<template>
  <!-- 广告 -->
  <div class="ad">
      <a href="#">
        <img :src="adBanner" alt="">
      </a>
    </div>
</template>

<script>
import adBanner from '../assets/img/ad-banner.jpg'
export default {
  data() {
    return {
      adBanner
    }
  }

}
</script>
