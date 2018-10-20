<template>
  <div id="app">
    <div class="header-container">
      <app-header></app-header>
    </div>
    <div class="song-container">
      <router-view></router-view>
    </div>
    <div class="footer-container">
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>

import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    "app-header":Header,
    "app-footer":Footer,
  }
}
</script>

<style scoped>

</style>
