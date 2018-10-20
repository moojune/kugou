<template>
  <div class="header">
    <div class="top-nav">
      <div class="icon-logo">
        <router-link :to="{name:'newSongLink'}">
          <img src="http://m.kugou.com/v3/static/images/index/logo.png" alt="">
        </router-link>
      </div>
      <div class="icon-search">
        <img src="http://m.kugou.com/v3/static/images/index/search.png" alt="">
      </div>
    </div>
    <div class="nav-container">
      <ul class="nav-list">
        <li @click="navIndex=0" v-bind:class="{'nav-item-active': navIndex===0 }"><router-link :to="{name:'newSongLink'}">新歌</router-link></li>
        <li @click="navIndex=1" v-bind:class="{'nav-item-active': navIndex===1 }"><router-link :to="{name:'rankLink'}">排行</router-link></li>
        <li @click="navIndex=2" v-bind:class="{'nav-item-active': navIndex===2 }"><router-link :to="{name:'songListLink'}">歌单</router-link></li>
        <li @click="navIndex=3" v-bind:class="{'nav-item-active': navIndex===3 }"><router-link :to="{name:'singerLink'}">歌手</router-link></li>
      </ul>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      navIndex:0,
    }
  },
  name:"Header",
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top-nav{
  width: 355px;
  height: 40px;
  background-color: #2CA2F9; 
  padding: 10px;
}
.icon-logo{
  float: left;
  padding-top: 5px;
}
.icon-logo img{
  width: 65%;
}
.icon-search{
  float: right;
  height: 30px;
  width: 30px;
  padding-top: 5px;
}
.icon-search img{
  width: 100%;
}
.nav-container{
  width: 100%;
  margin: 0 auto;
}
.nav-list{
  width: 355px;
  height: 42px;
  border-bottom: 1px solid #eee;
  padding: 0 10px;
}
.nav-list li{
  float: left;
  width: 88px;
  height: 42px;
  text-align: center;
  line-height: 42px;
}
.nav-item-active{
  height: 40px !important;
  border-bottom: 3px solid #2CA2F9;
}
.nav-item-active>a{
  text-decoration: none;
  color: #2CA2F9;
}
</style>
