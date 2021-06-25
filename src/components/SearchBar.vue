<template>
  <div>
    <!-- logo部分 -->
    <div class="logo-search-box">
      <div class="wrap logo-search">
        <a href="#" title="考拉海购" class="logo"></a>
        <div class="search">
          <i></i>
          <input type="text" placeholder="象印保温杯">
          <span></span>
        </div>
        <span class="shop-car">
          <i></i>
          购物车
        </span>
      </div>
    </div>
    <!-- 菜单 -->
    <div class="menu clear-fix">
      <div class="wrap">
        <div class="category">
          <div class="lineicon">
            <i class="firsticon"></i>
            <i></i>
            <i></i>
          </div>
          <span>所有分类</span>
          <div v-show="showCategory" class="categories">
            <ul>
              <li>
                <a href="#">
                  <!-- <img class="icon" src="./img/icon-category-mrcz.png" alt=""> -->
                  <i class="icon"></i>
                  <span>美容彩妆</span>
                </a>
              </li>
              <li><a href="#">母婴儿童</a></li>
              <li><a href="#">营养保健</a></li>
              <li><a href="#">数码家电</a></li>
              <li><a href="#">个护家清</a></li>
              <li><a href="#">服饰鞋靴</a></li>
              <li><a href="#">运动户外</a></li>
              <li><a href="#">手表配饰</a></li>
              <li><a href="#">轻奢</a></li>
              <li><a href="#">家居生活</a></li>
              <li><a href="#">环球美食</a></li>
              <li><a href="#">宠物生活</a></li>
            </ul>
          </div>
        </div>
        <ul class="list">
          <li v-for="(item) in navs" :key="item.name">
            <!-- <a href="#" @click="currentIndex = index">{{item}}</a> -->
            <router-link active-class="hot" :to="item.path" href="#">{{item.name}}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navs: [
        {name: '首页', path: "/main"}, 
        {name: '海外直购', path: '/otherpage'},
        {name: '考拉海购出品', path: "/otherpage2"}, 
        {name: '品质奶粉', path: '/otherpage3'}, 
        {name: '人气面膜', path: '/d'}, 
        {name: '充值', path: '/e'}
      ],
      currentIndex: 0,
      showCategory: false,
    }
  },
  watch: {
    $route: {
      handler(newRoute) {
        this.showCategory = newRoute.path === '/main'
      },
      immediate: true
    }
  }

}
</script>

<style>

</style>