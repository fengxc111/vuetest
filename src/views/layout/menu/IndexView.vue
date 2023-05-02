<!-- 左侧菜单 -->
<template>
    <el-col>
        <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" default-active="home"
            text-color="#fff" router>
            <el-menu-item index="home">
                <el-icon><setting /></el-icon>
                <span>首页</span>
            </el-menu-item>
            <el-sub-menu index="2">
                <template #title>
                    <el-icon><location /></el-icon>
                    <span>设备信息查看</span>
                </template>
                <el-menu-item index="typeone">一类设备</el-menu-item>
                <el-menu-item index="typetwo">二类设备</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="5">
                <template #title>
                    <el-icon><setting /></el-icon>
                    <span>用户设置</span>
                </template>
                <el-menu-item index="5-1">修改密码</el-menu-item>
                <el-menu-item index="5-2">退出登录</el-menu-item>
            </el-sub-menu>
        </el-menu>
    </el-col>
</template>

<script setup>
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>

</style>