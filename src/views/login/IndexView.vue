<template>
  <div class="login-container">
    <el-form :model="form" :rules="rules" ref="formRef" class="login-form">
      <div class="title-container">
        <h1 class="title">工业设备实时信息采集管理系统</h1>
      </div>
      <el-form-item prop="userName">
        <el-icon size="25" class="icon-container">
          <User />
        </el-icon>
        <el-input v-model="form.userName" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item prop="password">
        <el-icon size="25" class="icon-container">
          <Lock />
        </el-icon>
        <el-input v-model="form.password" type="password" placeholder="请输入密码" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="login-button" @click="handleLogin">登录</el-button>
      </el-form-item>
      <div class="footer-auth">
        21190819冯信诚
        毕业设计
      </div>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Edit,User,Lock } from "@element-plus/icons-vue";
import axiosUtil from "/src/utils/axios"
import { ElMessage } from "element-plus";
import router from "/src/router/index.js"
const form = ref({
  userName: "",
  password: "",
});

const rules=ref({
  userName: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
  ],
});

const formRef=ref(null);

const handleLogin=()=>{
  formRef.value.validate(async (valid)=>{
    if(valid){
      try {
        let result = await axiosUtil.post("login", form.value);
        if (result.data === "登录成功") {
          window.sessionStorage.setItem("token", result.data);
          window.sessionStorage.setItem("userName", form.value.userName)
          router.replace("/");
        } else {
          ElMessage.error(result.data);
        }
      } catch (err) {
        console.log("error" + err);
        ElMessage.error("请联系管理员");
      }
    }else{
      console.log("验证失败");
    }
  })
}
</script>


<style lang="scss" scoped>
$bg: #2d3a4b;
// $bg: #364760;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;
$icon: #fff;

.login-container {
  height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    :deep(.el-form-item) {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }

    :deep(.el-form-item__content){
      color: #454545;
      background: rgba(0, 0, 0, 0.1);
    }

    :deep(.el-input__wrapper) {
      display: block;
      color: #454545;
      background: rgb(36,47,60);
      box-shadow:none;
      height: 90%;
    }

    :deep(.el-input) {
      display: inline-block;
      background: rgb(36,47,60);
      height: 47px;
      width: 85%;

      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
      }
    }
    .login-button {
      width: 100%;
      box-sizing: border-box;
    }
    .footer-auth{
      position: fixed;
      bottom: 2%;
      // right: 45%;
      left: 47%;
      color: $light_gray;
      opacity: 0.2;
    }
  }

  .icon-container {
    padding: 6px 5px 6px 15px;
    color: $icon;
    vertical-align: middle;
    display: inline-block;

  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }

    :deep(.lang-select) {
      position: absolute;
      top: 4px;
      right: 0;
      background-color: white;
      font-size: 22px;
      padding: 4px;
      border-radius: 4px;
      cursor: pointer;
    }
  }

}
</style>