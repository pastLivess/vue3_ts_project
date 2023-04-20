<template>
  <div class="main">
    <el-row config="true" class="mb-4">
      <el-button @click="clear">Default</el-button>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";
import { localCache } from "@/utils/cache";

function clear() {
  localCache.removeCache("token");
  router.push("/login");
}
</script>

<style scoped lang="less"></style>
