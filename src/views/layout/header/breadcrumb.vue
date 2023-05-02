<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="(item,index) in breadList" :key="index">
            <span class="leaf" v-if="index==breadList.length-1">{{ item.name }}</span>
            <span class="noleaf" v-else @click="handleNoleaf(item.path)">{{ item.name }}</span>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup>
import { ref,watch } from 'vue';
import { useRoute,useRouter } from 'vue-router';
const route=useRoute();
const router=useRouter();

const breadList=ref([]);


const handleNoleaf=(path)=>{
    router.push(path);
};

const initBreadList=()=>{
    breadList.value=route.matched; 
};

watch(route, ()=>{
    initBreadList();
}, {deep:true, immediate:true});
</script>

<style lang="scss" scoped>
.leaf{
    cursor: text;
}

.noleaf{
    color: #666;
    font-weight: 600;
    cursor: pointer;
    &:hover{
    color:#304156
    }
}


</style>