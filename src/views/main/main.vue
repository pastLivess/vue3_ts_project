<template>
  <div class="main">main</div>
</template>

<script setup lang="ts">
import { accountLoginRequest } from "@/service/modules/login";
accountLoginRequest({ name: "coderwhy", password: "123456" }).then((res) => {
  console.log(res);
});
</script>

<style scoped lang="less"></style>
