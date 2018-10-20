// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import NewSong from './components/NewSong'
import Rank from './components/Rank'
import Singer from './components/Singer'
import SongList from './components/SongList'
import './assets/css/common.css'
import '../../kugou-app/node_modules/swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)

/* eslint-disable no-new */
const routes = [
    { path: '/', name: 'newSongLink', component: NewSong },
    { path: '/rank', name: 'rankLink', component: Rank },
    { path: '/singer', name: 'singerLink', component: Singer },
    { path: '/songList', name: 'songListLink', component: SongList },
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

new Vue({
    router,
    el: '#app',
    render: h => h(App)
})