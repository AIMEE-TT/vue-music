<template>
  <div class="left">
    <!-- default-openeds 当前打开的 sub-menu 的 index 的数组 
       default-active 当前激活菜单的 index
    -->
    <el-menu :default-openeds="['1']" 
          default-active="1-1">
        <!-- 推荐菜单 -->
        <el-submenu index="1">
          <!-- 一级菜单模板 -->
          <template slot="title">
            <i></i> 推荐
          </template>
          <!-- 二级子菜单 -->
          <el-menu-item-group>
            <!-- 二级菜单模板 -->
            <el-menu-item index="1-1" @click="findMusic">
              <i class="el-icon-magic-stick"></i>发现音乐
            </el-menu-item>
            <el-menu-item index="1-2" @click="toMyseilfFM">
              <i class="el-icon-news"></i>私人FM
            </el-menu-item>
            <el-menu-item index="1-3" @click="toLiveStream">
              <i class="el-icon-video-camera-solid"></i>LOOK直播
            </el-menu-item>
            <el-menu-item index="1-4" @click="togMusicvideo">
              <i class="el-icon-video-camera"></i>视频
            </el-menu-item>
            <el-menu-item index="1-5" @click="togFriend">
              <i class="el-icon-s-custom"></i>朋友
            </el-menu-item>
          </el-menu-item-group> 
        </el-submenu>
        <!-- 我的音乐菜单 -->
        <el-submenu index="2">
          <template slot="title">
            <i></i>我的音乐
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">
              <i class="el-icon-bangzhu"></i>本地音乐
            </el-menu-item>
            <el-menu-item index="2-2">
              <i class="el-icon-download"></i>下载管理
            </el-menu-item>
            <el-menu-item index="2-3">
              <i class="el-icon-cloudy"></i>我的音乐云盘
            </el-menu-item>
            <el-menu-item index="2-4">
              <i class="el-icon-coin"></i>我的电台
            </el-menu-item>
            <el-menu-item index="2-5">
              <i class="el-icon-star-off"></i>我的收藏
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i></i>创建的歌单
          </template>
          <el-menu-item-group>
            <el-menu-item>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
    </el-menu>    
  </div>
</template> 
<script>
export default {
  methods: {
      // 发现音乐
      findMusic() {
         this.$router.push('/right');
      },
      // 私人FM
      toMyseilfFM() {
        this.$router.push('/myseilffm');
      },
      // LOOK直播
      toLiveStream() {
        this.$router.push('/livestreaming');
      },
      // 视频
      togMusicvideo() {
        this.$router.push('/musicvideo');
      },
      // 朋友
      togFriend() {
        this.$router.push('/friends');
      }

  }
}
</script>
<style lang="less" scoped>

</style>