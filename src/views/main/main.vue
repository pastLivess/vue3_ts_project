<template>
  <div class="main">
    <el-row config="true" class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { accountLoginRequest } from "@/service/modules/login";
accountLoginRequest({ name: "coderwhy", password: "123456" }).then((res) => {
  console.log(res);
});
</script>

<style scoped lang="less"></style>
