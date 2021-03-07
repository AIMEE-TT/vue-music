<template>
  <div class="swiper">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="(item,index) in swipers" :key="index">
         <el-image
          @click="changeUrl(item.targetId)"
          :src="item.imageUrl"
          fit="contain"
          style="height: 100%;"
        ></el-image>
        <el-tag
          :type="item.typeTitle === '独家' ? 'danger' : 'primary'"
          effect="dark"
          style="position: absolute;top:76%;right:0;border-radius: 10px 0 0 10px;height:19px;lineHeight:19px"
        >{{item.typeTitle}}</el-tag>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import { NOW_MUSICMENU, NOW_MUSIC } from '../../store/mutationType.js'
export default {
  data() {
    return {
      // 存放轮播图
      swipers: [],
      // 音乐URL
      musicUrl: '',
      // 歌曲详情
      musicMenu: {}
    }
  },
  methods: {
    // 获取轮播图数据
    async getSwiper() {
      const { data: res} = await this.$http.get('/banner')
      // console.log(res)
      this.swipers = res.banners;
      console.log(this.swipers)
    },
    // 图片的点击事件
    changeUrl(id) {
      // id为被点击的图片的id
      // console.log(id)
      if (id === null) return
      // id存在,调用url接口
      this.getMusicUrl(id);
      this.getMusicMenu(id);
    },
    // 获取音乐url
    async getMusicUrl(id) {
      const { data: res } = await this.$http.get('/song/url', {
        params: {
          id: id
        }
      })
      // console.log(res)
      this.musicUrl = res.data[0].url;
      // 改变url为当前点击的url 
      this.$store.commit(NOW_MUSIC, this.musicUrl)
    },
    // 获取当前点击的歌曲详情
    async getMusicMenu(id) {
      const { data: res } = await this.$http.get('/song/detail', {
        params: {
          ids: id
        }
      })
      // console.log(res)
      this.musicMenu = res.songs[0];
      // 改变歌曲详情为当前点击的歌曲详情
      this.$store.commit(NOW_MUSICMENU, this.musicMenu)
    }
  },
  created() {
    this.getSwiper()
  }
}
</script>
<style lang="less">
.swiper {
  width: 1000px;
  margin: 0 auto;
}
</style>
