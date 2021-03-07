<template>
  <div class="r-newsong">
    <div class="r-main">
      <!-- 顶部按钮 -->
      <div class="top">
        <el-button type="primary" round size="small">新歌速递</el-button>
        <el-button  round size="small">新碟上架</el-button>
      </div>
      <!-- 新歌内容 -->
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="全部" name="first">
          <SingerAlbum v-for="(item,index) in songsList" :key="index" :item="item">
          </SingerAlbum>
        </el-tab-pane>
        <el-tab-pane label="华语" name="second">
          <SingerAlbum>
          </SingerAlbum>
        </el-tab-pane>
        <el-tab-pane label="欧美" name="third">
          <SingerAlbum >
          </SingerAlbum>
        </el-tab-pane>
        <el-tab-pane label="韩国" name="fourth">
          <SingerAlbum>
          </SingerAlbum>
        </el-tab-pane>
        <el-tab-pane label="日本" name="five">
          <SingerAlbum>
          </SingerAlbum>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import SingerAlbum from '../../../components/singer/SingerAlbum'
export default {
  data() {
    return {
      // 定义默认选项
      activeName: 'first',
      // 全部新歌内容
      songsList: [],
      // 华语新歌内容
      huayuList: [],
      // 欧美新歌内容
      oulist: [],
      // 韩国新歌内容
      hanlist: [],
      // 日本新歌内容
      rilist: [],
      // 标识符
      togShow: true
    }
  },
  methods: {
    //根据切换了不同标签栏来获取数据
    handleClick(tab, event) {
      // console.log(tab, event)
      // console.log(tab.name)
      if (this.togShow) {
        switch(tab.name) {
          case 'second': 
            // 华语新歌
            this.getNewSongs(7);
            break;
          case 'third': 
            // 欧美新歌
            this.getNewSongs(96);
            break;
          case 'fourth': 
            // 韩国新歌
            this.getNewSongs(16);
            break;
          case 'five': 
            // 日本新歌
            this.getNewSongs(8);
            break;
          default: 
            // 全部新歌
            this.getNewSongs(0);
        }
      }
    },
    // 获取新歌速递的数据
    async getNewSongs(type) {
      const { data: res } = await this.$http.get('/top/song', {
        params: {
          type: type
        }
      });
      // console.log(res)
      switch (type) {
          case 7:
            this.huayuList = res.data.splice(0,8);
            break;
          case 96:
            this.oulist = res.data.splice(0,8);
            break;
          case 8:
            this.rilist = res.data.splice(0,8);
            break;
          case 16:
            this.hanlist = res.data.splice(0,8);
            break;
          default:
            this.songsList = res.data.splice(0,8);
        }
      console.log(this.songsList)
    }
  },
  created() {
    this.getNewSongs()
  },
  components: {
    SingerAlbum
  }
}
</script>
<style lang="less" scoped>
.r-main {
  width: 82%;
  margin: 0 auto;
}
.top {
  width: 230px;
  margin: 10px auto;
}
</style>