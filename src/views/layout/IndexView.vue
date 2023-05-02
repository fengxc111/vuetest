<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px" class="asider-menu"><Menu></Menu></el-aside>
      <el-container>
        <el-header>
          <div class="header-bread">
            <BreadCrumb></BreadCrumb>
              <div class="header-pic">
                <HeadPic></HeadPic>
              </div>
          </div>
        </el-header>
        <el-main>Main</el-main>
        <el-footer>
          <Footer></Footer>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import Menu from '/src/views/layout/menu/IndexView.vue'
import BreadCrumb from '/src/views/layout/header/breadcrumb.vue'
import HeadPic from '/src/views/layout/header/picture.vue'
import Footer from '/src/views/layout/footer/IndexView.vue'
// import Breadcrumb from '@/views/layout/header/breadcrumb'
// import Avatar from '@/views/layout/header/avatar'
// import Footer from '@/views/layout/footer'
</script>
  
<style lang="scss" scoped>
.header-bread{
  width: 100%;
  height: 60px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.20);
  padding: 0 16px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  .header-pic{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}

:deep(.el-header){
  padding: 0px;
}

.common-layout {
  position: relative;
  width: 100%;
  height: 100%;
}

.asider-menu {
  background-color: #545c64;
  height: 100%;
}

.el-container{
  height: 100%;
}

:deep(ul.el-menu){
  border-right-width: 0px;
}
// .navbar {
//   width: 100%;
//   height: 60px;
//   overflow: hidden;
//   background-color: #fff;
//   box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
//   padding: 0 16px;
//   display: flex;
//   align-items: center;
//   box-sizing: border-box;
//   position: relative;

//   .navbar-right {
//     flex: 1;
//     display: flex;
//     align-items: center;
//     justify-content: flex-end;
//   }
// }

// :deep(.el-header) {
//   padding: 0px;
// }

// ::v-deep .el-container {
//   height: 100%;
// }

// ::v-deep ul.el-menu {
//   border-right-width: 0px
// }
</style>