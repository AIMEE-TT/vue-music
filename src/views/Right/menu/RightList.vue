<template>
  <div class="rt-list">
    <div class="content">
      <TitleHeader name="官方榜" :show="false"></TitleHeader>
      <RlistCard :cards="soarings" :id="soarings.id"></RlistCard>
      <RlistCard :cards="newsongs" :id="newsongs.id"></RlistCard>
      <RlistCard :cards="original" :id="original.id"></RlistCard>
      <RlistCard :cards="hotsong" :id="hotsong.id"></RlistCard>
      <RlistCard :cards="raphotlist" :id="raphotlist.id"></RlistCard>
      <RlistCard :cards="raplist" :id="soarings.id"></RlistCard>
      <TitleHeader name="全球榜" :show="false"></TitleHeader>
      <div class="global">
        <MusicListItem 
          v-for="(item,index) in globalList"
          :key="index"
          :item="item"
          :wth="18"
          :topShow="false"
          :userShow="false"
          class="item">
        </MusicListItem>
      </div>
    </div>
  </div>
</template>
<script>
import TitleHeader from '../../../components/titleheader/TitleHeader.vue'
import RlistCard from '../../../components/rList/RlistCard'
import MusicListItem from '../../../components/musiclist/MusicListItem'
export default {
  data() {
    return {
      // 所有数据
      allMes:[],
      // 飙升榜数据
      soarings: {},
      // 新歌榜数据
      newsongs: {},
      // 原创榜数据
      original: {},
      // 热歌榜数据
      hotsong: {},
      // 说唱榜数据
      raphotlist: {},
      // 黑胶榜数据
      raplist: {},
      // 全球榜
      globalList: []
    }
  },
  methods: {
    // 获取排行榜数据
    async getTopList() {
      const { data: res } = await this.$http.get('/toplist')
      // console.log(res)
      this.allMes = res.list.splice(0,6);
      this.soarings = this.allMes[0];
      this.newsongs = this.allMes[1];
      this.original = this.allMes[2];
      this.hotsong = this.allMes[3];
      this.raplist = this.allMes[4];
      this.raphotlist = this.allMes[5];
      this.globalList = res.list;
      // console.log(this.globalList)
    }
  },
  created() {
    this.getTopList()
  },
  components: {
    TitleHeader,
    RlistCard,
    MusicListItem
  }
}
</script>
<style lang="less" scoped>
.rt-list {
  width: 95%;
  margin: 0 auto;
}
.content {
  width: 90%;
  margin: 0 auto;
  display:flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.global {
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  .item {
    padding-left: 15px;
  }
 
}
</style>