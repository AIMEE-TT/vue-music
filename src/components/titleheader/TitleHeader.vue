<template>
  <div class="title">
    <div class="content">
       <!-- title  -->
       <div class="name">{{name}}</div>
       <!-- 更多  -->
       <div class="more" v-if="show">
         <a href>
           {{more}}
           <i class="el-icon-arrow-right"></i>
         </a>
       </div>
    </div>
  </div>
</template>
<script>
export default {
   props: {
       name: {
           type: String,
           default: '名字'
       },
       more: {
           type: String,
           default: '更多'
       },
       show:{
            type:Boolean,
            default:true,
        }
   }
}
</script>
<style lang="less" scoped>
a {
  text-decoration: none;
}
.title {
    width: 900px;
    margin: 0 auto;
    display: flex;
    color: #333;
    margin-top: 10px;
    .content {
      width: 100%;
      display:flex;
      justify-content: space-between;
      padding-bottom: 5px;
      border-bottom: 1px solid rgba(0,0,0,0.2);
      .name {
          font-size: 19px;
      }
      .more {
          font-size: 12px;
      }
    }
}
</style>