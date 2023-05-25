<template>
    <el-card >
        <el-row :gutter="20" class="header">
            <el-col :span="7">
                <el-input placeholder="请输入设备名称" v-model="dinfoForm.query" clearable></el-input>
            </el-col>
            <el-button type="primary" :icon="Search" @click="initList">搜索</el-button>
        </el-row>
        <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName" >
            <el-table-column prop="deviceId" label="设备ID" width="200" />
            <el-table-column prop="deviceName" label="设备名称" width="250"/>
            <el-table-column prop="location" label="部署地址" width="200" />
            <el-table-column prop="departmentName" label="所属部门" width="200" />
            <el-table-column prop="status" label="状态" width="200" />
            <el-table-column prop="latestTime" label="上次检修时间" width="200"/>

            <el-table-column prop="action" label="修改状态" width="200" fixed="right">
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
            </el-table-column>
        </el-table>
        <el-pagination
          v-model:current-page="dinfoForm.index"
          v-model:page-size="dinfoForm.pageSize"
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
import { ElMessageBox, ElMessage } from 'element-plus';
import axiosUtil from "/src/utils/axios"

const dinfoForm = ref({
    pageSize: 10,
    index: 1,
    query: ''
});

let statusForm = ref({
    id: 0,
    query: ''
})

let total = ref(0);

const tableRowClassName=({row, rowIndex})=>{
    if (row.status==='异常') {
        return 'warning-row'
    }
    return ''
}

const tableData = ref([]);
const initList = async()=>{
    try {
        let result=await axiosUtil.post("deviceinfo", dinfoForm.value);
        tableData.value=result.data.list;
        total=result.data.total;
    } catch(err) {
        console.log("error" + err);
    }
}
initList();
const handleSizeChange=(pageSize)=>{
    dinfoForm.value.index=1;
    dinfoForm.value.pageSize=pageSize;
    initList();
}
const handleCurrentChange=(index)=>{
    dinfoForm.value.index=index;
    initList();
}
const handleStatus=(id, status)=>{
    statusForm.value.id = id;
    if (status==="正常"){
        statusForm.value.query="异常";
    }else{
        statusForm.value.query="正常";
    }
    console.log(id);

    ElMessageBox.confirm(
    '您确定要修改设备状态吗?',
    '注意',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(async() => {
        try{
            await axiosUtil.post("changestatus", statusForm.value);
            initList();
            ElMessage({
              type: 'success',
              message: '修改成功',
            })
        } catch(err){
            ElMessage({
              type: 'error',
              message: '修改失败',
            })
        }
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '操作已取消',
      })
    })
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

// .el-card .el-table .warning-row {
//   --el-table-tr-bg-color: var(--el-color-warning-light-9);
// }
.el-card{
    .el-table{
        color: black;
        :deep(.warning-row){
            background-color: rgba(255, 68, 68, 0.534);
            // --el-table-tr-bg-color: var(--el-color-warning-light-9);
        }
        :deep(.success-row){
            background-color: aquamarine;
        }
    }
}
</style>