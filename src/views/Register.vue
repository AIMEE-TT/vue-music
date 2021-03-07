<template>
  <div class="register_container">
    <div class="register_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="">
      </div>
      <el-form :model="registerRuleForm" :rules="registerRules" 
          ref="registerRuleForm" label-width="100px" class="register_form">
        <!-- 手机号 -->
        <el-form-item label="手机号" prop="phone">
            <el-input v-model="registerRuleForm.phone"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label="密码" prop="password" >
            <el-input v-model="registerRuleForm.password" type="password"></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
            <el-button type="success" >注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
    data() {
     return {
          registerRuleForm: {
          phone: '',
          password: ''
        },
        registerRules: {
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
    }
}
</script>
<style lang="less" scoped>
.register_container {
  height: 100%;
  .register_box {
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
  .register_form{
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