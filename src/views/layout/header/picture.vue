<template>
    <el-dropdown>
        <span class="el-dropdown-link">
            <el-avatar :size="80" :src="circleUrl" />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script setup>
import { ref } from 'vue'
import router from '@/router'
// const circleUrl=ref("http://8.130.107.241/LightPicture/2022/10/76135c0034eac7b0.png");
const circleUrl=ref("http://tututeam.top/LightPicture/2022/10/76135c0034eac7b0.png");

const logout=()=>{
    window.sessionStorage.removeItem("token");
    router.replace('/login');
}
</script>

<style lang="scss" scoped></style>