<template>
  <div class="main-header">
    <img class="main-header-logo" src="@/assets/img/logo.svg" alt="" />
    <h2 class="main-header-title">CMS-后台管理系统</h2>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.main-header {
  display: flex;
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
</style>
