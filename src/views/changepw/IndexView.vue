<template>
    <el-card>
        <el-form ref="formRef" :model="form" :rules="rules" label-width="150px" >
            <el-form-item label="用户名" prop="username">
                <el-input v-model="form.username" disabled/>
            </el-form-item>
            <el-form-item label="旧密码" prop="password">
                <el-input v-model="form.password" type="password"/>
            </el-form-item>
            <el-form-item label="新密码" prop="newpw">
                <el-input v-model="form.newpw" type="password"/>
            </el-form-item>
            <el-form-item label="确认密码" prop="confirmpw">
                <el-input v-model="form.confirmpw" type="password"/>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">
                    确认
                </el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>
  
<script setup>
import { ref } from 'vue'
import axiosUtil from '/src/utils/axios.js'
import { ElMessage } from "element-plus";

const form=ref({
    userName:"",
    password:"",
    newpw:"",
    confirmpw:""
});
const rules=ref({
    username: [
        { required: true, message: '请输入用户名'},
    ],
    password: [
        { required: true, message: '请输入当前密码'},
    ],
    newpw: [
        { required: true, message: '请输入新密码'},
    ],
    confirmpw: [
        { required: true, message: '请再次输入新密码'},
    ],
});
const formRef=ref(null);

const initFormData=()=>{
    let username=window.sessionStorage.getItem("userName");
    form.value.username=username;
}
initFormData();

const onSubmit=()=>{
    formRef.value.validate(async(valid)=>{
        if(valid){
            if(form.value.newpw!==form.value.confirmpw){
                ElMessage.error("两次输入的新密码不一致");
            }else{
                try{
                    let result = await axiosUtil.post("changepw", form.value);
                    console.log(result);
                    if(result.status==200){
                        if(result.data==="修改成功"){
                            ElMessage.success("密码修改成功");
                            formRef.value.resetFields();
                        }else{
                            ElMessage.error(result.data);
                        }
                    }else{
                        ElMessage.error("请检查网络，或者联系管理员");
                    }
                }catch(err){
                    console.log(err);
                    ElMessage.error("请联系管理员");
                }
            }
        }else{
            console.log("fail");
        }
    })
}
</script>
  
<style lang="scss" scoped>
.el-card {
    margin-left: 15px;
    margin-top: 10px;
    margin-right: 20px;
}
.el-input{
    width: 400px;
}
</style>