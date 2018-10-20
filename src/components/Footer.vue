<template>
  <div class="footer">
    <div class="control-arrow"></div>
    <div class="play-box">
      <div class="photo">
        <img src="../assets/images/default.png" alt="">
      </div>
      <div class="information">
        <p class="infor-sing">王力宏 - 你不知道的事</p>
        <p class="infor-author">王力宏</p>
      </div>
      <div class="control-box">
        <div class="pause">
          <img src="../assets/images/pause_icon.png" alt="">
        </div>
        <div class="next">
          <img src="../assets/images/next_icon.png" alt="">
        </div>
        <div class="clear"></div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
}
.control-arrow {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.8) url("../assets/images/close_icon.png")
    no-repeat center;
  background-size: 25px;
  margin-left: 10px;
  margin-bottom: 10px;
}
.play-box {
  width: 355px;
  height: 50px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.8);
}
.photo {
  width: 50px;
  height: 50px;
  border-radius: 2px;
  overflow: hidden;
  float: left;
}
.photo img {
  width: 100%;
}
.control-box {
  float: right;
}
.pause,
.next {
  width: 50px;
  height: 50px;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pause img,
.next img {
  width: 70%;
}
.information {
  float: left;
  margin-left: 10px;
  margin-top: 8px;
  display: none;
}
.infor-sing {
  color: #fff;
  font-size: 16px;
  width: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.infor-author {
  color: #c4c4c4;
  font-size: 14px;
  margin-top: 4px;
}
</style>
