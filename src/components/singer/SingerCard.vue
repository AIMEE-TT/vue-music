<template>
  <div class="singer-card">
    <img v-lazy="singer.picUrl">
    <div class="name">
      <span>{{singer.name}}</span>
      <i class="el-icon-user"></i>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    singer: {
        type: Object,
        default() {
          return{}
        }
    }
  }
}
</script>
<style lang="less" scoped>
.singer-card {
   padding: 15px;
   cursor: pointer;
   img {
      width: 170px;
      height: 150px;
   }
   .name {
      font-size: 13px;
      display: flex;
      justify-content: space-between;
      span {
          color: red;
      }
      i {
          color: #5292fe;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          border: 1px solid #5292fe;
          text-align: center;
          line-height: 15px;
      }
   }
}
</style>