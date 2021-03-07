<template>
  <div class="righttop">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane class="tabs-item"
         v-for="item in tabs"
         :key="item.name"
         :label="item.label"
         :name="item.name"
        >  
      </el-tab-pane>
  </el-tabs>
  </div>
</template>
<script>
 export default {
    data() {
        return {
            activeName: '/home/right/rightstyle',
            tabs: [
              { label:"个性推荐", name: "/rightstyle"},
              { label:"歌单", name: "/rightsongs"},
              { label:"主播电台", name: "/rightanchor"},
              { label:"排行榜", name: "/rightlist"},
              { label:"歌手", name: "/rightsinger"},
              { label:"最新音乐", name: "/rightnewsing"}
            ]
        }
    },
    methods: {
      // 点击tab切换
      handleClick(tab,event,name) {
        this.$router.replace(tab.name)
        this.activeName = tab.name
      }
    }
 }
</script>
<style lang="less" scoped>
.righttop {
  width: 476px;
  margin: 0 auto;
}
</style>