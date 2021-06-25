<template>
  <div id="header">
    <ad-bar />
    <nav-bar />
    <search-bar />
    <other-page />
    <router-view />
    <my-footer />
  </div>
</template>

<script>
import AdBar from "../components/AdBar.vue"
import NavBar from "../components/NavBar.vue"
import SearchBar from '../components/SearchBar.vue'
  import Footer from '../components/Footer.vue'
export default {
  components: { 
    AdBar,
    NavBar, 
    SearchBar,
    MyFooter: Footer 
  }
}
</script>

<style>

</style>