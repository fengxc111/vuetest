<template>
    <el-card>
        <el-row :gutter="20" class="header">
            <el-col :span="7">
                <el-input placeholder="请输入搜索" v-model="queryForm.query" clearable></el-input>
            </el-col>
            <el-button type="primary" :icon="Search">搜索</el-button>
        </el-row>
        <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
            <el-table-column prop="date" label="设备ID" width="120" />
            <el-table-column prop="name" label="设备名称" width="200" />
            <el-table-column prop="address" label="部署地址" width="200" />
            <el-table-column prop="address" label="所属部门" width="200" />
            <el-table-column prop="address" label="上次检修时间" />
        </el-table>
        <el-pagination
          v-model:current-page="queryForm.pageNum"
          v-model:page-size="queryForm.pageSize"
          :page-sizes="[10, 20, 30, 40]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalPage"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
    </el-card>
</template>

<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import axiosUtil from "/src/utils/axios"
// import axiosUtil from '@/utils/axios';

const queryForm = ref({
    query: '',
    pageNum: 1,
    pageSize: 10
});

const totalPage = ref(0);
// interface User {
//   date: string
//   name: string
//   address: string
// }

// const tableRowClassName = ({
//   row,
//   rowIndex,
// }: {
//   row: User
//   rowIndex: number
// }) => {
//   if (rowIndex === 1) {
//     return 'warning-row'
//   } else if (rowIndex === 3) {
//     return 'success-row'
//   }
//   return ''
// }

const tableData = ref([]);
const initList = async()=>{
    let result=await axiosUtil.post("deviceinfo", queryForm.value);
    
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
</style>