<template>
    <div class="footer">
        {{ time }}
        欢迎
        {{ username }}
    </div>
</template>

<script setup>
let year = new Date().getFullYear();
let month = new Date().getMonth() +1;
let day = new Date().getDate();
let time = year + '--' + month + '--' + day;

let username=window.sessionStorage.getItem("username");

</script>

<style lang="scss" scoped>
.footer{
    color: darkgrey;
    padding: 20px;
    display: flex;
    align-items: center;
}
</style>