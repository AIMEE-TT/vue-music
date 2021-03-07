<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <top-bar></top-bar>
    </el-header>
    <!-- 页面主体区域 -->
    <el-container class="ct-container">
      <!-- 侧边栏 -->
      <el-aside width="180px">
        <left-menu></left-menu>
      </el-aside>
      <!-- 右侧主体结构 -->
      <div class="con-all" v-loading="false">
        <transition :name="transitionName">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </div>
    </el-container>
    <BottomBar class="btm-b"></BottomBar>
  </el-container>
</template>
<script>
import TopBar from '../components/topBar/topBar'
import LeftMenu from './LeftMenu'
import BottomBar from '../components/bottombar/BottomBar'
export default {
  name: 'home',
  components: {
    'top-bar': TopBar,
    'left-menu': LeftMenu,
     BottomBar
  },
  data() {
    return {
      transitionName: "",
    };
  },
   watch: {
    //使用watch 监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      // console.log(to.meta.index,from.meta.index);
      if (from.meta.index == 0 && to.meta.index > from.meta.index) {
        //设置动画名称
        this.transitionName = "slide-left";
        return;
      } 
      if(to.meta.index == 0 && to.meta.index < from.meta.index){
        this.transitionName = "slide-right";
      }
      if (to.meta.index > 1 && to.meta.index > from.meta.index) {
        //设置动画名称
        this.transitionName = "slide-com";
        }
      if (to.meta.index > 1 && to.meta.index < from.meta.index) {
        //设置动画名称
        this.transitionName = "slide-back";
        }
      // } else {
      //   this.transitionName = "slide-back";
      // }
    },
  }
}
</script>
<style>
/* 动画效果 */
.slide-right-enter-active,
.slide-right-leave-active,
.slide-com-enter-active,
.slide-com-leave-active,
.slide-back-enter-active,
.slide-back-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 100%, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 100%, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(-100%, 100%, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 100%, 0);
}
.slide-com-enter {
  opacity: 0;
  transform: translate3d(0,-100%,0);
}
.slide-com-leave-active {
  opacity: 0;
  transform: translate3d(0,100%,0);
}
.slide-back-enter {
  opacity: 0;
  transform: translate3d(0,100%,0);
}
.slide-back-leave-active {
  opacity: 0;
  transform: translate3d(0,-100%, 0);
}
/* 滚动条样式 */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 255, 0.1);
  border-radius: 3px;
}
</style>
<style lang="less" scoped>
.con-all {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* border-bottom: 1px solid red; */
  /* justify-content: space-between; */
}
.home-container {
  position: relative;
  .btm-b {
    position: relative;
  }
}
.el-aside {
  margin-left: 20px;
}
</style>