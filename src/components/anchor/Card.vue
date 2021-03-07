<template>
  <div class="card" :style="{width: wth+'%'}">
    <!-- 图片区域  -->
    <div class="img">
      <img v-lazy="item.picUrl">
      <span class="top" v-if="topShow">
        {{item.category}}
      </span>
      <span class="botm">
        <!-- 设置组件插槽  -->
        <slot name="btm-text">
          <i class="el-icon-view"></i>{{item.subCount}}
        </slot>
      </span>
    </div>
    <!-- 图片下的区域  -->
    <div class="talk">
       {{item.rcmdtext}}
    </div>
    <!-- 用户显示区域  -->
    <div class="c-user" v-if="userShow">
      <a href>
        <img v-lazy="item.dj.avatarUrl" class="u-img">
      </a>
      <a href class="nickname">
        {{item.dj.nickname}}
      </a>
    </div>
  </div>
</template>
<script>
export default {
   props: {
    item:{
      type:Object,
      default(){
        return{}
      }
    },
    topShow: {
      type: Boolean,
      default: true,
    },
    userShow: {
      type: Boolean,
      default: true,
    },
    wth: {
      type: Boolean,
      default: 18
    }
   }
}
</script>
<style lang="less" scoped>
.card {
  margin-top: 13px;
  .img {
    position: relative;
    img {
      width: 100%;
      height: 100%; 
      cursor: pointer;
    }
    .top {
        position: absolute;
        top: 0;
        left: 0;
        background: #ff2c55;
        color: rgba(255,255,255,0.9);
        border-bottom-right-radius: 6px;
        font-size: 12px;
        padding: 5px;
    }
    .botm {
        position: absolute;
        bottom: 5px;
        left: 0;
        background-image: linear-gradient(to right, rgba(0,0,0,0.5) , rgba(0,0,0,0.02));
        color: rgba(255,255,255,0.9);
        font-size: 12px;
    }
  }
  .talk {
    width: 100%;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    font-size: 13px;
    margin: 8px 0;
  }
  .c-user {
    font-size: 12px;
    a {
      text-decoration: none;
      cursor: pointer;
    }
    img {
      width: 20px;
      height: 20px;
      border-radius: 50%;
    }
    .nickname {
      vertical-align: middle;
      position: relative;
      top: -8px;
      color: red;
    }
  }
}
</style>