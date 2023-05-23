<template>
    <el-card >
        <el-row :gutter="20" class="header">
            <el-col :span="7">
                <el-input placeholder="请输入人员名字" v-model="winfoForm.query" clearable></el-input>
            </el-col>
            <el-button type="primary" :icon="Search" @click="initList">搜索</el-button>
        </el-row>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="workerId" label="工号" width="200" />
            <el-table-column prop="workerName" label="名字" width="200"/>
            <el-table-column prop="tel" label="联系方式" width="200" />
            <el-table-column prop="department" label="所属部门" width="200" />
            <el-table-column prop="addr" label="住址" width="200" />
            <!-- <el-table-column prop="status" label="状态" width="200" />
            <el-table-column prop="latestTime" label="上次检修时间" width="200"/> -->

            <!-- <el-table-column prop="action" label="修改状态" width="200" fixed="right">
                <template v-slot="scope">
                    <template class="normal" v-if="scope.row.status=='正常'">
                        <el-button type="success" round  disabled>正常</el-button>
                        <el-button type="danger" round @click="handleStatus(scope.row.deviceId, scope.row.status)">异常</el-button>
                    </template>
                    <template class="danger" v-else>
                        <el-button type="success" round  @click="handleStatus(scope.row.deviceId, scope.row.status)">正常</el-button>
                        <el-button type="danger" round disabled>异常</el-button>
                    </template>
                </template>
            </el-table-column> -->
        </el-table>
        <el-pagination
          v-model:current-page="winfoForm.index"
          v-model:page-size="winfoForm.pageSize"
          :page-sizes="[5, 10, 20, 30]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
    </el-card>
</template>

<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import axiosUtil from "/src/utils/axios"

const winfoForm = ref({
    pageSize: 5,
    index: 1,
    query: ''
});

let statusForm = ref({
    id: 0,
    query: ''
})

let total = ref(0);

const tableData = ref([]);
const initList = async()=>{
    try {
        let result=await axiosUtil.post("workerinfo", winfoForm.value);
        tableData.value=result.data.list;
        total=result.data.total;
    } catch(err) {
        console.log("error" + err);
    }
}
initList();
const handleSizeChange=(pageSize)=>{
    winfoForm.value.index=1;
    winfoForm.value.pageSize=pageSize;
    initList();
}
const handleCurrentChange=(index)=>{
    winfoForm.value.index=index;
    initList();
}
</script>

<style lang="scss" scoped> 
.header {
    padding-bottom: 20px;
    box-sizing: border-box;
}

.el-pagination{
    padding-top: 15px;
    box-sizing: border-box;
}

:deep(.el-table__row){
    height: 80px;
}
</style>