<template>
  <div class="titleIcon">
    <div class="icon" v-for="(item,index) in cateList"
      :key="index">
      <img :src="item.picIPadUrl">
      <p>{{item.name}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return{
      // 电台分类
      cateList: []
    }
  },
  methods: {
    // 获取电台分类
    async getAnchorCateList() {
        const { data: res } = await this.$http.get('/dj/catelist');
        // console.log(res)
        this.cateList = res.categories.splice(0,5)
    }
  },
  created() {
    this.getAnchorCateList()
  }
}
</script>
<style lang="less" scoped>
.icon:hover {
    background: #e8e8e8;
    color: red;
}
.titleIcon {
    width: 80%;
    margin: 8px auto;
    display:flex;
    justify-content: space-around;
    .icon {
      width: 16%;
      cursor: pointer;
      text-align: center;
      img {
        width: 35px;
        height: 35px;
      }
      p {
          font-size: 13px;
          color: rgba(255, 0, 0, 0.7);
      }
    }
    
}
</style>