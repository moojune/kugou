<template>
    <div class="newSong">
        <div class="banner">
            <img src="../assets/images/banner1.jpg" alt="">
        </div>
        <div class="song-box">
            <ul class="song-list">
                <li class="song-item">
                    <span>王力宏 - 你不知道的事</span>
                    <div class="icon-download">
                        <img src="../assets/images/download_icon.png" alt="">
                    </div>
                    <div class="clear"> </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "newSong",
  mounted() {
    axios
      .get("https://easy-mock.com/mock/5bcaec9b0616ca41e70018b8/kugou/homedata")
      .then(Response => {
        console.log(Response);
      })
      .catch(e => {
        console.log(e);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner {
  width: 375px;
  height: 146px;
}
.banner img {
  width: 100%;
}
.song-item {
  width: 345px;
  height: 50px;
  border-bottom: 1px solid #eee;
  padding-left: 10px;
  line-height: 50px;
  font-size: 14px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 10px;
}
.icon-download {
  width: 20px;
  float: right;
  margin-top: 15px;
}
.icon-download img {
  width: 100%;
  display: block;
}
</style>