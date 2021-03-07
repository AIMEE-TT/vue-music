<template>
  <div class="musiclistitem" @click="toListPage(item.id)" :style="{width:wth+'%'}">
    <el-card :body-style="{ padding: '0px',}"
       shadow="hover" class="card">
      <img v-lazy="item.coverImgUrl  || item.sPicUrl || item.cover"
        class="image" />
      <slot name="music-t">
        <div class="right-t">
          <i class="el-icon-headset" 
            style="paddingTop: 4px;paddingLeft:15px"></i>
          <span>{{item.playCount > 10000 ? (item.playCount/10000).toFixed(0)+'万' : item.playCount}}</span>
        </div>
        <div class="top-t" v-if="topShow">
           <span>{{item.name}}</span>
        </div>
      </slot>
      <div class="btm">
        <i class="el-icon-video-play"></i>
      </div>
      <div class="user" v-if="userShow">
        <span><i class="el-icon-user"></i>{{item.artistName || item.creator.nickname}}</span>
      </div>
    </el-card>
    <div class="namet">
      <span>{{item.name}}</span>
    </div>
  </div>
</template>
<script>
export default {
   props: {
      item: {
        type: Object,
        default() {
          return {};
        }
      },
      wth:{
        type:Number,
        default:18
      },
      topShow: {
        type: Boolean,
        default: true
      },
      userShow: {
        type: Boolean,
        default: false
      },
      mvType:{
        type:Boolean,
        default:false,
      }
   },
   methods: {
     // 因为视频也用了该组件 所以需要判断
     toListPage(id) {
       this.$router.push('songs' + id);
       console.log('/songs' + id);
     }
   }
}
</script>
<style lang="less" scoped>
.musiclistitem {
   margin-top: 25px;
   position: relative;
   overflow: hidden;
   cursor: pointer;
   margin-bottom: 10px;
   .card {
    box-sizing: content-box;
    .image {
       width: 100%;
    }
   }
}
.right-t {
    width: 70px;
    height: 14px;
    line-height: 14px;
    position: absolute;
    padding-top: 3px;
    top: 0;
    right: 0;
    font-size: 12px;
    color: #fff;
    background-image: linear-gradient(
    to left,
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0)
    );
    display: flex;
    justify-content: space-evenly;
}
.top-t {
    position: absolute;
    top: 0px;
    color: rgba(255, 255, 255, 0.95);
    font-size: 12px;
    background: rgba(0, 0, 0, 0.5);
    padding: 6px 0px;
    transform: translateY(-100%);
    transition: transform 0.5s;
    width: 100%;
    height: 20px;
    overflow: hidden;
    line-height: 1.9;
}
.musiclistitem:hover .top-t {
  transform: translateY(0);
}
.btm {
  position: absolute;
  bottom: 30%;
  right: 6px;
  font-size: 28px;
  color: red;
  cursor: pointer;
  transform: translateX(115%);
  transition: transform 0.3s;
}
.btm:hover {
  color: rgba(255, 255, 255, 0.95);
}
.musiclistitem:hover .btm {
  transform: translateX(0);
}
.user {
  width: 100%;
  position: absolute;
  bottom: 50px;
  left: 0;
  font-size: 13px;
  color: aliceblue;
  background-image: linear-gradient(rgba(0,0,0,0.02), rgba(0,0,0,0.4));
}
.namet {
   padding-top: 10px;
  font-size: 13px;
  height: 40px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>