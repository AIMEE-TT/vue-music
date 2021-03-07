<template>
  <div class="musiclist">
    <title-header name="推荐歌单"></title-header>
    <music-list-item v-for="(item,index) in musiclist"
       :key="index" 
       :item = "item"
      ></music-list-item>
  </div>
</template>
<script>
import TitleHeader from '../titleheader/TitleHeader'
import MusicListItem from './MusicListItem'
export default {
  data() {
    return {
      // 推荐歌单的数据
      musiclist: {}
    }
  },
  methods: {
    // 获取推荐歌单的数据
    async getMusicList() {
      const { data: res } = await this.$http.get('/top/playlist', {
          params: {
            offset: (Math.random() * 1297).toFixed(0) - 12,
            limit: 12
          }  
        })
      // console.log(res)
      // 获取十条数据来展示
      this.musiclist = res.playlists.slice(0,10)
    }
  },
  created() {
     this.getMusicList()
  },
  components: {
    TitleHeader,
    MusicListItem
  }
}
</script>
<style lang="less" scoped>
.musiclist {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

</style>