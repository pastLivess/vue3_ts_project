<template>
  <div class="main">
    <el-container>
      <el-aside width="200px">
        <main-header />
        <main-menu />
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import mainHeader from "@/views/main/c-cpns/main-header.vue";
import mainMenu from "@/views/main/c-cpns/main-menu.vue";
// import { CACHE_PASSWORD, CACHE_TOKEN } from "@/global/constants";
// import router from "@/router";
// import { localCache } from "@/utils/cache";

// function clear() {
//   localCache.removeCache(CACHE_TOKEN);
//   localCache.removeCache(CACHE_PASSWORD);
//   router.push("/login");
// }
</script>

<style scoped lang="less">
.main {
  height: 100%;
  .el-container {
    height: 100%;
  }
  .el-aside {
    background-color: orange;
  }
  .el-header {
    background-color: red;
  }
  .el-main {
    background-color: skyblue;
  }
}
</style>
