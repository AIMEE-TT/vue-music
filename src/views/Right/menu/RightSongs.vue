<template>
  <div class="r-songs">
    <!-- 下拉菜单 -->
    <el-dropdown @command="handleCommand">
      <el-button size="mini">
       音乐
       <i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="(item, index) in catt"
          :key="index"
          :command="item.name"
          :index='index'> {{item.name}}
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <!-- 热门标签 -->
    <div class="hot-title">
       <span>热门标签：</span>
       <span v-for="(item,index) in catlist"
         :key="index"
         style="cursor: pointer"
         :class="curIndex === index ? 'active': '' "
         @click = 'changeMusicListCat(item.name, index)'>
         {{item.name}}
         <span style="paddingLeft: 8px;color: #666;">
           {{index === catlist.length-1 ? '' : '|'}}
         </span>
       </span>
    </div>
    <!-- 歌单渲染 -->
    <div class="songsList">
      <MusicListItem 
        v-for="(item,index) in songsList"
        :key="index"
        :item="item"
        :wth="18"
        :topShow="false"
        :userShow="true"
        >
      </MusicListItem>
    </div>
  </div>
</template>
<script>
import MusicListItem from '../../../components/musiclist/MusicListItem'
export default {
  data() {
    return {
      // 下拉菜单数据
      catt: [],
      // 热门标签数据
      catlist: [],
      // 歌单数据
      songsList: [],
      // 歌单数据的参数
      cat: "全部", 
      limit: 30,
      offset: 0,
      // 标志
      curIndex: 0,
      // 歌单总数
      totals: 0
    }
  },
  methods: {
    // 获取热门标签数据，热门歌单分类
    async getSongListCatlist() {
      const { data: res } = await this.$http.get('playlist/hot')
      // console.log(res)
      // 热门标签数据
      this.catlist = res.tags.splice(0,10);
      const arr = [...this.catlist];
      // 下拉菜单数据
      this.catt = arr.splice(0,5)
    },
    // 获取歌单数据，网友精选碟
    async getSongList(cat,limit,offset) {
      const { data: res } = await this.$http.get('/top/playlist', {
        params: {
          cat, 
          limit,
          offset
        }
      });
      // console.log(res)
      this.songsList = res.playlists;
      this.totals = res.total;
    },
    // 切换分类
    changeMusicListCat(name, index) {
      this.curIndex = index;
      this.cat = name;
      // 重新调用歌单数据
      this.getSongList(this.cat, this.limit, this.offset)
    },
    //点击下拉框切换分类
    handleCommand(command, index) {
      // console.log(index.$attrs.index);
      // console.log(command)
      this.curIndex = index.$attrs.index;
      this.cat = command;
      // 重新调用歌单数据
      this.getSongList(this.cat, this.limit, this.offset)
    }
  },
  created() {
    this.getSongListCatlist();
    this.getSongList(this.cat,this.limit,this.offset)
  },
  components: {
    MusicListItem
  }
}
</script>
<style lang="less" scoped>
.active {
  color: red;
}
.r-songs {
  width: 90%;
  margin: 0 auto;
  .hot-title {
    font-size: 13px;
    margin-top: 8px;
    padding-left: 10px;
    span {
      padding: 5px;
    }
  }
  .songsList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>