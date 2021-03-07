<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="">
      </div>
      <el-form :model="ruleForm" :rules="rules" 
          ref="ruleForm" label-width="100px" class="login_form"
        >
        <!-- 手机号 -->
        <el-form-item label="手机号" prop="phone">
            <el-input v-model="ruleForm.phone"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label="密码" prop="password" >
            <el-input v-model="ruleForm.password" type="password"></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
            <el-button type="primary" @click="login">登录</el-button>
            <el-button type="success" @click="$router.push('/register')">注册</el-button>
            <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            //这是登录表单的数据绑定对象
            ruleForm: {
                phone: '13479636407',
                password: 'kzj2372966718'
            },
            //这是登录表单的验证规则对象
            rules: {
                phone: {
                  required: true, message: '请填写密码', trigger: 'blur'
                },
                //验证密码是否合法
                password: [
                  { required: true, message: '请填写密码', trigger: 'blur' },
                  {
	                min: 6,
	                max: 15,
	                message: '密码长度在 6 到 15 个字符',
	                trigger: 'blur'
	              }
                ]
            }
        }
    },
    methods: {
        //点击重置按钮，重置登录表单
        resetLoginForm() {
         //this指向的就是登录表单的实例对象
         console.log(this);
         //this.$refs是一个对象，它的ruleForm属性，即表单的引用对象，它的函数resetFields(); 重置
         this.$refs.ruleForm.resetFields()
        },
        login() {
            //点击登录的时候先调用validate方法验证表单内容是否有误
            this.$refs.ruleForm.validate(async (valid) => {
            // console.log(valid);
            if (!valid) return;
            const {data: res} = await this.$http.post('/login/cellphone', this.ruleForm);
            console.log(res);
            if (res.code !== 200) return  this.$message.error("登录失败！");
            this.$message.success("登录成功！");
            //1、保存用户信息,退出时删除
            window.sessionStorage.setItem("currentUserInfo", JSON.stringify(res.profile));
            //保存cookie的信息
            // window.sessionStorage.setItem("musicCookie", res.cookie);
            //2、通过编程式导航跳转到后台主页，需要跳转到/home
            setTimeout(() => {
                this.$router.push('/home')
                }, 1000)
           })
        }
       
    }
}
</script>
<style lang='less' scoped>
.login_container {
  .login_box {
    width: 450px;
    height: 300px;
    background: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid pink;
    .avatar_box {
        height: 130px;
        width: 130px;
        border: 1px solid #eee;
        border-radius: 50%;
        padding: 10px;
        box-shadow: 0 0 10px #ddd;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: #eee;
        }
    }
  }
  .login_form{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }
  .btns {
    display: flex;
    justify-content: flex-end;
  }
}

</style>
