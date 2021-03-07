 <template>
   <div class="swiperAnchor">
     <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="(item,index) in swiperAnchor" :key="index">
        <el-image
          :src="item.pic"
          fit="contain">
        </el-image>
        <el-tag :type="item.typeTitle !== '独家' ? 'danger' : 'primary'"
          effect="dark"
          style="position: absolute; top:76%;right:0;border-radius: 10px 0 0 10px;height:19px;lineHeight:19px">
          {{item.typeTitle}}
        </el-tag>
      </el-carousel-item>
    </el-carousel>
   </div>
 </template>
 <script>
 export default {
    data() {
      return {
        // 电台轮播图
        swiperAnchor: {}
      }
    },
    methods: {
      // 获取电台轮播图数据
      async getAnchorBanner(){
        const { data: res } = await this.$http.get('/dj/banner')
        // console.log(res)
        this.swiperAnchor = res.data;
      }
    },
    created() {
        this.getAnchorBanner()
    }
 }
 </script>
 <style lang="less" scoped>
 .swiperAnchor {
  width: 1000px;
  margin: 0 auto;
}
 </style>