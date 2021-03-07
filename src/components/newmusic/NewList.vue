<template>
  <div class="newlist">
    <el-row style="margin-top: 10px">
       <!-- 左侧 -->
       <el-col :span="12">
        <el-table
            :data="newMusicList.slice(0,5)"
            stripe
            :show-header="false"
            @row-dblclick="dblclickPlayMusic"
            >
            <el-table-column type="index">
               <template scope="scope">
                 {{'0' + (scope.$index+1).toString()}}
               </template>
            </el-table-column>
            <el-table-column style="position: relative">
               <template scope="scope">
                 <i class="el-icon-video-play"
                   style="position: absolute; 
                   font-size: 25px;
                    bottom: 17px;
                    left:60px;
                    z-index:10;
                    color:orange;
                    cursor:pointer;">
                 </i>
                 <el-image :src="scope.row.picUrl"
                   @click="changeUrl(scope.row.id)"
                   style="width: 75px;height: 75px;cursor:pointer;">
                 </el-image>
                 <span
                    style="position: absolute;top: 25px;left:100px;font-size: 14px;font-weight: 500;"
                >{{scope.row.name}}</span>
                <span
                  @click="toSingerPage(scope.row)"
                  style="cursor:pointer;position: absolute;bottom: 25px;left:108px;font-size: 12px;font-weight: 500"
                >{{scope.row.song.artists[0].name}}</span>
               </template>
            </el-table-column>
        </el-table>
       </el-col>
       <!-- 右侧 -->
       <el-col :span="12">
         <el-table
            :data="newMusicList.slice(5,10)"
            stripe
            :show-header="false"
            @row-dblclick="dblclickPlayMusic"
            >
            <el-table-column type="index">
               <template scope="scope">
                 {{scope.$index >= 4 ? scope.$index+6 : '0'+(scope.$index+6).toString()}}
               </template>
            </el-table-column>
            <el-table-column style="position: relative">
               <template scope="scope">
                 <i class="el-icon-video-play"
                   style="position: absolute; 
                   font-size: 25px;
                    bottom: 17px;
                    left:60px;
                    z-index:10;
                    color:orange;
                    cursor:pointer;">
                 </i>
                 <el-image :src="scope.row.picUrl"
                    @click="changeUrl(scope.row.id)"
                   style="width: 75px;height: 75px;cursor:pointer;">                 
                 </el-image>
                 <span
                    style="position: absolute;top: 25px;left:100px;font-size: 14px;font-weight: 500;"
                >{{scope.row.name}}</span>
                <span
                  @click="toSingerPage(scope.row)"
                  style="cursor:pointer;position: absolute;bottom: 25px;left:108px;font-size: 12px;font-weight: 500"
                >{{scope.row.song.artists[0].name}}</span>
               </template>
            </el-table-column>
        </el-table>
       </el-col>
    </el-row>
  </div>
</template>
<script>
import {NOW_MUSICMENU, NOW_MUSIC} from '../../store/mutationType'
export default {
  data() {
    return{
      // 最新歌曲
      newMusicList: []
    }
  },
  methods: {
    // 获取最新歌曲
    async getNewList() {
      const { data: res } = await this.$http.get('/personalized/newsong') 
      // console.log(res)
      this.newMusicList = res.result
    },
    //修改歌曲地址
    async getMusicUrl(id) {
      const { data: res } = await this.$http.get('/song/url', {
        params: {
          id: id
        }
      })
      // console.log(res)
      this.$store.commit(NOW_MUSIC, res.data[0].url);     
    },
    //修改歌曲信息
    async getMusicMenu(id) {
      const { data: res } = await this.$http.get('/song/detail', {
        params: {
          ids: id
        }
      })
      // console.log(res)
      this.$store.commit(NOW_MUSICMENU, res.songs[0]);   
    },
    // 点击table表格
    dblclickPlayMusic(row){
      this.changeUrl(row.id)
    },
    // 点击图片
    changeUrl(id){
      this.getMusicUrl(id);
      this.getMusicMenu(id);
    },
    //点击歌手名，跳转到歌手页面
    toSingerPage(row){
      console.log(row);
    }
  },
  created() {
    this.getNewList()
  }
}
</script>
<style lang="less" scoped>
.newlist{
    width: 100%;
}
</style>