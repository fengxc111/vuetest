<template>
    <div class="footer">
        信息采集管理系统
        {{ time }}
    </div>
</template>

<script setup>
let year = new Date().getFullYear();
let month = new Date().getMonth() +1;
let day = new Date().getDate();
let time = year + '--' + month + '--' + day;
</script>

<style lang="scss" scoped>
.footer{
    color: darkgrey;
    padding: 20px;
    display: flex;
    align-items: center;
}
</style>