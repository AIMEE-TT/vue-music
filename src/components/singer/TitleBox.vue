<template>
  <div class="titleBox">
    <span>{{name}}：</span>
    <div class="titles" v-for="(item,index) in titles"
         :key="index">
       <span :class="curIndex===index ? 'active' : '' "
         @click="change(index)"
        >{{item}}</span>
       <span>{{index === titles.length-1 ? '' : "|"}}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return{
      curIndex: 0
    }
  },
  methods: {
    change(index) {
        this.curIndex = index
    }
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      } 
    },
    name: {
      type: String
    }
  }
}
</script>
<style lang="less" scoped>
.active {
    width: 30px;
    height: 30px;
    color: #fff;
    padding-left: 5px;
    background-color: rgba(191,144,150);
    margin-right: 8px;
}
.titleBox {
    height: 30px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    cursor: pointer;
    .titles {
      padding: 0 8px;
      text-align: center;
      font-size: 15px;
      span:nth-child(1) {
         padding-right: 10px;
      }
    }

}
</style>