<template>
  <div class="r-anchor">
    <SwiperAnchor></SwiperAnchor>
    <TitleIcon></TitleIcon>
    <!-- 主播电台页内容 -->
    <div class="content">
      <TitleHeader name='精选电台' > </TitleHeader>
      <Card v-for="(item, index) in recommends"
        :key="item"
        :item="item"
        :wth='23'
        >
      </Card> 
      <TitleHeader name='付费精选' > </TitleHeader>
      <PayCard v-for="(item, index) in pays"
        :key="item"
        :item="item"></PayCard>
      <TitleHeader name='电台个性推荐'> </TitleHeader>
      <Card v-for="(item, index) in recommend"
        :key="item"
        :item="item"
        :wth='15'
        :topShow='false'
        :userShow='false'
        >
        <div slot="btm-text" class="slot-text">{{item.name}}</div>
      </Card> 
      <TitleHeader name='创作|翻唱' > </TitleHeader>
      <Card v-for="(item, index) in creations"
        :key="item"
        :item="item"
        :wth='15'
        :topShow='false'
        :userShow='false'
        >
        <div slot="btm-text" class="slot-text">{{item.name}}</div>
      </Card> 
      <TitleHeader name='3D|电子' > </TitleHeader>
      <Card v-for="(item, index) in electrs"
        :key="item"
        :item="item"
        :wth='15'
        :topShow='false'
        :userShow='false'
        >
        <div slot="btm-text" class="slot-text">{{item.name}}</div>
      </Card> 
      <TitleHeader name='音乐故事' > </TitleHeader>
      <Card v-for="(item, index) in musicStory"
        :key="item"
        :item="item"
        :wth='15'
        :topShow='false'
        :userShow='false'
        >
        <div slot="btm-text" class="slot-text">{{item.name}}</div>
      </Card> 
      <TitleHeader name='情感调频' > </TitleHeader>
      <Card v-for="(item, index) in emotion"
        :key="item"
        :item="item"
        :wth='15'
        :topShow='false'
        :userShow='false'
        >
        <div slot="btm-text" class="slot-text">{{item.name}}</div>
      </Card> 
      <TitleHeader name='二次元' > </TitleHeader>
      <Card v-for="(item, index) in quadratic"
        :key="item"
        :item="item"
        :wth='15'
        :topShow='false'
        :userShow='false'
        >
        <div slot="btm-text" class="slot-text">{{item.name}}</div>
      </Card> 
   </div>
  </div>
</template>
<script>
import SwiperAnchor from '../../../components/Swiper/swiperAnchor'
import TitleIcon from '../../../components/anchor/TitleIcon'
import TitleHeader from '../../../components/titleheader/TitleHeader'
import Card from '../../../components/anchor/Card'
import PayCard from '../../../components/anchor/payCard'

export default {
  data() {
    return {
      // 精选电台
      recommends: [],
      // 付费精选
      pays: [],
      // 电台个性推荐
      recommend: [],
      // 创作
      creations: [],
      // 3D
      electrs: [],
      // 音乐故事
      musicStory: [],
      // 情感调频
      emotion: [],
      // 二次元
      quadratic: []
    }
  },
  methods: {
    // 获取精选电台数据和电台个性推荐数据
    async getAnchorRecommend() {
      const { data: res } = await this.$http.get('/dj/recommend');
      // console.log(res)
      const arr = [...res.djRadios]
      this.recommends = res.djRadios.splice(0,4)
      arr.splice(0,4)
      // 个性推荐选后六条数据
      this.recommend = [...arr]
      // console.log(this.recommend)
    },
    // 获取付费精选数据
    async getAnchorPay() {
      const { data: res } = await this.$http.get('/dj/paygift', {
        params: {
          limit: 4
        }
      });
      // console.log(res)
      this.pays = res.data.list
    },
    // 获取创作数据
    async getCreation(id) {
      const { data: res } = await this.$http.get('/dj/recommend/type', {
        params: {
          type: id
        }
      });
      // console.log(res)
      this.creations = res.djRadios.splice(0,6)
    },
    // 获取3D数据
    async getElectr(id) {
      const { data: res } = await this.$http.get('/dj/recommend/type', {
        params: {
          type: id
        }
      });
      // console.log(res)
      this.electrs = res.djRadios.splice(0,6)
    },
    // 获取音乐故事数据
    async getMusicStory(id) {
      const { data: res } = await this.$http.get('/dj/recommend/type', {
        params: {
          type: id
        }
      });
      // console.log(res)
      this.musicStory = res.djRadios.splice(0,6)
    },
    // 获取情感调频数据
    async getEmotion(id) {
      const { data: res } = await this.$http.get('/dj/recommend/type', {
        params: {
          type: id
        }
      });
      // console.log(res)
      this.emotion = res.djRadios.splice(0,6)
    },
    // 获取二次元数据
    async getQuadratic(id) {
      const { data: res } = await this.$http.get('/dj/recommend/type', {
        params: {
          type: id
        }
      });
      // console.log(res)
      this.quadratic = res.djRadios.splice(0,6)
    },
  },
  created() {
    this.getAnchorRecommend()
    this.getAnchorPay()
    this.getCreation(2001)
    this.getElectr(10002) // 创作翻唱id 可在cate中查看
    this.getMusicStory(2)
    this.getEmotion(3)
    this.getQuadratic(3001)
  },
  components: {
    SwiperAnchor,
    TitleIcon,
    TitleHeader,
    Card,
    PayCard
  }
}
</script>
<style lang="less" scoped>
.content{
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.slot-text {
  width: 130px;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
</style>