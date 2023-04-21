<template>
  <div class="main">
    <el-container>
      <el-aside :width="isFold ? '60px' : '210px'">
        <div class="main-menu-header">
          <img class="main-header-logo" src="@/assets/img/logo.svg" alt="" />
          <h2 v-show="!isFold" class="main-header-title">CMS-后台管理系统</h2>
        </div>
        <main-menu :isFold="isFold" />
      </el-aside>
      <el-container>
        <el-header height="50px">
          <main-header @foldChange="handlerFoldChange" />
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import mainMenu from "@/components/main-menu/main-menu.vue";
import mainHeader from "@/components/main-header/main-header.vue";
import { ref } from "vue";
const isFold = ref(false);
function handlerFoldChange(flag: any) {
  console.log(flag);

  isFold.value = flag;
}
</script>

<style scoped lang="less">
.main {
  height: 100%;

  .el-container {
    height: 100%;
  }
  .el-aside {
    background-color: rgb(41, 54, 75);
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .el-header {
    // background-color: red;
  }
  .el-main {
    background-color: skyblue;
  }
  .main-menu-header {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: #203a58;
    height: 40px;
    .main-header-logo {
      width: 32px;
      height: 32px;
    }
    .main-header-title {
      font-size: 16px;
    }
  }
}
</style>
