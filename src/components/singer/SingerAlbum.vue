<template>
  <div class="singer-album">
     <div class="content">
        <img v-lazy='item.album.blurPicUrl'>
        <span>{{item.album.name}}</span>
        <span>{{item.album.artists[0].name}}</span>       
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
  },
  
}
</script>
<style lang="less" scoped>
.content {
  display:flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px 0;
  border-top: 1px solid #ccc;
  margin-top: 10px;
  img {
      width: 30px;
      height: 30px;
  }
  span {
      color: #999;
      font-size: 12px;
  }
}
</style>