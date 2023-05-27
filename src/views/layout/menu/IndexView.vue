<!-- 左侧菜单 -->
<template>
    <el-col>
        <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" default-active="home"
            text-color="#fff" router>
            <el-menu-item index="home">
                <el-icon><HomeFilled /></el-icon>
                <span>首页</span>
            </el-menu-item>
            <el-sub-menu index="devinfo">
                <template #title>
                    <!-- <el-icon><location /></el-icon> -->
                    <el-icon><Histogram /></el-icon>
                    <span>信息查看</span>
                </template>
                <el-menu-item index="typeone">设备信息</el-menu-item>
                <el-menu-item index="typetwo">维修人员信息</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="settings">
                <template #title>
                    <el-icon><setting /></el-icon>
                    <span>用户设置</span>
                </template>
                <el-menu-item index="changepw">修改密码</el-menu-item>
                <el-menu-item>
                    <span @click="logout">退出登录</span>
                </el-menu-item>
            </el-sub-menu>
        </el-menu>
    </el-col>
</template>

<script setup>
import router from '@/router';
import {
    Histogram,
    HomeFilled,
    Setting,
} from '@element-plus/icons-vue'


const logout=()=>{
    // window.sessionStorage.removeItem("token");
    // window.sessionStorage.removeItem("userName");
    window.sessionStorage.clear();
    router.replace('/login');
}
</script>

<style lang="scss" scoped>

</style>