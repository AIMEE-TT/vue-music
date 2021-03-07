<template>
  <div class="paycard" >
    <div class="content">
      <!-- 图片区域 -->
      <div class="img">
        <img :src="item.picUrl">
        <span>1970年01月01日...</span>
      </div>
      <!-- 介绍区域 -->
      <div class="text">
        <p>{{item.name}}</p>
        <p>{{item.rcmdText}}</p>
        <p>{{item.lastProgramName}}</p>
        <p>¥{{item.originalPrice / 100}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
   props: {
    item: {
        type: Object,
        default() {
          return {}
        }
    }
   }
}
</script>
<style lang="less" scoped>
.paycard {
    margin-top: 12px;
}
.content {
    width: 420px;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    .img {
      height: 130px;
      position: relative;
      cursor: pointer;
      img {
        width: 130px;
        height: 130px;
      }
      span {
        position: absolute;
        bottom: 3px;
        left: 6px;
        font-size: 13px;
        color: white;
      }
    }
    .text {
        padding-left: 15px;
        p:nth-child(1) {
            color: #aaa;
            cursor: pointer;
        }
        p:nth-child(2) {
            color: #ccc;
            font-size: 14px;
        }
        p:nth-child(3) {
            color: #ccc;
            font-size: 14px;
        }
        p:nth-child(4) {
            color: rgba(68,177,251);
            font-size: 14px;
        }
    }
}
</style>