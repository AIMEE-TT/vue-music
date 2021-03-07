<template>
  <div class="rt-list-card">
    <!-- 图片区域 --> 
    <div class="img">
      <img :src="cards.coverImgUrl">
      <span class="card-time">{{cards.updateTime | showDate}}更新</span>
      <i class="el-icon-caret-right top-play"></i>
    </div>
    <!-- 排行榜内容 --> 
    <div class="list">
      <div class="card-row"
        v-for="(item,index) in songMs"
        :key="index"
        >
        <div class="left">
          <span>{{index+1}}</span>
          <span>{{item.name}}</span>
        </div>
        <div class="right">
           <span>{{item.ar[0].name}}</span>
        </div>
      </div>
    </div>
    <!-- 查看全部区域 --> 
    <div class="total">
       <span>查看全部></span>
    </div>
  </div>
</template>
<script>
import { formatDate } from '../../common/time.js'
export default {
  props: {
    cards: {
      type: Object,
      default() {
        return {};
      }
    },
    id: {
      type: Number,
      default: 0,
    }
  },
  data() {
    return {
      // 排行榜内容数据
      songs: [],
      // id
      songId: [],
      // 
      songMs: {},
    }
  },
  methods: {
    // 获取榜单的详细信息
    async getSongListInfo(id) {
        const { data: res } = await this.$http.get('/playlist/detail',{
            params: {
              id: id
            }
        });
        // console.log(res)
        //只需要显示八条
        this.songMs = res.playlist.tracks.splice(0,8)
        console.log(this.songMs)
        this.songMs.map((item) => {
            this.songId.push(item.id)
        })
        // console.log(this.songId)
        
    }
  },
  mounted() {
    this.getSongListInfo(this.id)
    console.log(this.id)
  },
  filters: {
    showDate(value) {
        let date = new Date(value);
        return formatDate(date, "MM月dd日")
    }
  }
}
</script>
<style lang="less" scoped>
.rt-list-card {
  position: relative;
  width: 300px;
  height: 370px;
  margin-top: 20px;
  border: 1px solid #ccc;
  .img {
    position: relative;
    img {
     width: 100%;
     height: 100px;
    }
    .card-time {
      position: absolute;
      left: 18px;
      bottom: 20px;
      color: rgba(255, 255, 255, 0.7);
      font-size: 14px;
    }
    .top-play {
      position: absolute;
      right: 7px;
      bottom: 15px;
      font-size: 20px;
      padding: 5px;
      color: #fff;
      border: 1px solid #fff;
      border-radius: 50%;
      cursor: pointer;
    }
  } 
}
.list {
    cursor: pointer;
}
.card-row:hover {
    background: #ebeced;
}
.card-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #666;
    font-size: 13px;
    margin: 5px 0;
    .left {
      display: flex;
      align-items: center;
      span:nth-child(1) {
          color: red;
          font-weight: bold;
          font-size: 18px;
          padding: 0 3px;
      }
    }
    .right {
          span {
            padding-right: 6px;
            font-size: 14px;
            color: #999; 
          }
      }
}
.total {
  position: absolute;
  right: 7px;
  bottom: 3px;
  color:#999;
  font-size: 14px;
  cursor: pointer;
}
</style>