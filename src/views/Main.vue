<template>
  <!-- 首页 -->
  <div>
    <swiper />
    <common-product />
    <hot-brand />
  </div>
</template>

<script>
  import Swiper from '../components/Swiper.vue'
  import CommonProduct from '../components/CommonProduct.vue'
  import HotBrand from '../components/HotBrand.vue'
export default {
  components: {
    Swiper,
    CommonProduct,
    HotBrand
  }
}
</script>

<style>

</style>