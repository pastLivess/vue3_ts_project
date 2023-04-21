<template>
  <el-config-provider :locale="zhCn">
    <div class="app">
      <!-- <RouterLink to="/main">主要</RouterLink> -->
      <!-- <RouterLink to="/login">login</RouterLink> -->
      <RouterView />
    </div>
  </el-config-provider>
</template>

<script setup lang="ts">
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
</script>

<style scoped lang="less">
.app {
  width: 100vw;
  height: 100vh;
}
</style>
