<template>
  <div class="r-singer">
    <!-- 歌手分类 -->
    <div class="title-box">
      <TitleBox :titles="titleOne" name="语种" class="title"></TitleBox>
      <TitleBox :titles="titleTwo" name="分类" class="title"></TitleBox>
      <TitleBox :titles="titleThree" name="筛选" class="title"></TitleBox>
    </div>
    <!-- 歌手 -->
    <div class="singer">
      <SingerCard v-for="(item,index) in singers" :key="index" :singer="item"></SingerCard>
    </div>
  </div>
</template>
<script>
import TitleBox from '../../../components/singer/TitleBox'
import SingerCard from '../../../components/singer/SingerCard'
export default {
  data() {
    return {
      titleOne: ['华语','欧美','日本','韩国','其他'],
      titleTwo: ['全部','男歌手','女歌手','乐队组合'],
      titleThree: ['热门',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z'
      ],
      // 歌手数据
      singers: [],
      limit: 30
    }
  },
  methods: {
    // 获取歌手数据
    async getSinger(area, type, initial, limit) {
      const { data: res } = await this.$http.get('/artist/list', {
        params:{
            type,
            initial,
            area,
            limit,
        }
      });
      // console.log(res)
      this.singers = res.artists;
      console.log(this.singers)
    }
  },
  created() {
    this.getSinger(-1,-1,-1)
  },
  components: {
    TitleBox,
    SingerCard
  }
}
</script>
<style lang="less" scoped>
.title-box {
  width: 85%;
  margin: 5px auto;
  .title {
    margin: 25px 0;
  }
}
.singer {
  width: 95%;
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
}
</style>