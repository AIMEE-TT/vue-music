<template>
  <div class="onlyone">
    <title-header name="独家放送"></title-header>
    <MusicListItem v-for="(item,index) in onlylist" :key="index"
      :item="item" :wth="28"
      class="onlyone">
      <div slot="music-t"></div>  
    </MusicListItem>
  </div>
</template>
<script>
import TitleHeader from '../titleheader/TitleHeader'
import MusicListItem from '../musiclist/MusicListItem'
export default {
  data() {
    return {
      // 独家放送数据
      onlylist: {}
    }
  },
  methods: {
    // 获取独家放送数据
    async getOnlyList() {
      const { data: res } = await this.$http.get('/personalized/privatecontent')
      // console.log(res)
      this.onlylist = res.result
    }
  },
  created() {
    this.getOnlyList()
  },
  components: {
    TitleHeader,
    MusicListItem
  }
}
</script>
<style lang="less" scoped>
.onlyone {
  width: 80%;
  margin: 25px auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>