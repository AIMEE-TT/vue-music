<template>
 <div class="top">
   <div class="left">
     <a href=''>
       <img :src="userImg" >
     </a>
     <span style="fontSize:13px;color:#fff;" 
           v-if="currentUserInfo">{{currentUserInfo.nickname}}</span>
     <el-button type="text" 
        style="color:#fff;"
        @click="$router.push('/login')"
        v-else
       >登录</el-button>
     <el-button type="text"
          style="color:#fff; margin-left: 15px;"
          v-if="currentUserInfo !== null"
          @click="logout"
        >退出</el-button>
   </div>
   <div class="center">
     <div>
       <a href>
         <i class="el-icon-arrow-left"></i>
       </a>
     </div>
     <div>
        <a href>
          <i class="el-icon-refresh"></i>
        </a>
     </div>
     <div class="ipt">
       <el-input
            size="mini"
            class="inputt"
            placeholder="请输入内容"
            clearable
            suffix-icon="el-icon-search"
        ></el-input>
     </div>
     <div>
        <a href>
          <i class="el-icon-microphone"></i>
        </a>
     </div>
   </div>
   <div class="right">
      <a href>回到旧版</a>
      <a href>
        <i class="el-icon-monitor"></i>
      </a>
      <a href>
        <i class="el-icon-mobile-phone"></i>
      </a>
      <a href>
        <i class="el-icon-menu"></i>
      </a>
      <a href>
        <i class="el-icon-s-opportunity"></i>
      </a>
      <a href>
        <i class="el-icon-setting"></i>
      </a>
      <a href>
        <i class="el-icon-bell"></i>
      </a>
      <a href>
        <i class="el-icon-close"></i>
      </a>
    </div>
 </div>
</template>
<script>
export default {
  data() {
    return {
       userImg: require("../../assets/img/common/logo.png"),//默认图片
       currentUserInfo:
        window.sessionStorage.getItem("currentUserInfo") === "null"
          ? null
          : JSON.parse(window.sessionStorage.getItem("currentUserInfo")),//查看浏览器是否已存有数据
    }
  },
  methods: {
    // 点击退出
    logout(){
      console.log("退出登录");
      //跳转到主页面
      this.$router.push('/home');
      this.getPhoneLoginOut();
    },
    //退出接口登录 告诉接口已退出 并还原数据等操作
    getPhoneLoginOut() {
      this.$http.get('/logout').then((res) => {
        console.log(res);
        //当前用户信息设置为null
        this.currentUserInfo = null;
        //存储用户信息的localstorage设置为null
        window.sessionStorage.setItem("currentUserInfo", null);
        this.userImg = require("../../assets/img/common/logo.png");
      })
    }
    
  },
  created() {
    //判断本地是否有用户信息
    if(this.currentUserInfo) {
        this.userImg = this.currentUserInfo.avatarUrl;     
    }
  }
}
</script>
<style lang='less' scoped>
.current{
    display: none
}
.active {
    display: block
}
.top {
   width: 100%;
   height: 60px;
   background-color: rgba(82,146,254);
   text-align: center;
   display: flex;
   .left {
     width: 200px;
     line-height: 60px;
     img {
       width: 36px;
       height: 36px;
       border-radius: 50%;
       vertical-align: middle;
       padding-right: 10px;
     }
   }
   .center {
       flex: 1;
       margin-left: 100px;
       color: #fff;
       display: flex;
       overflow: hidden;
       justify-content: center;
       align-items: center;
       div {
        margin-left: 10px;
        a i {
           font-size: 20px;
           color: rgba(255, 255, 255, 0.8);
        }
       }
       .ipt {
           width: 360px;
           padding-right: 10px;
        }
    }
    .right {
      margin-left: 100px;
      overflow: hidden;
      width: 500px;
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        color: rgba(255, 255, 255, 0.8);
        margin-right: 15px;
        text-decoration: none;
        font-size: 13px;
      }
      a:last-child {
        margin-right: 200px;
        font-size: 19px;
      }
      a:hover {
        color: #fff;
      }
    }
}
</style>