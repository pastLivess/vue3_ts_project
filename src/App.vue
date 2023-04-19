<template>
  <div class="app">
    <h2>App</h2>
    <RouterLink to="/main">主要</RouterLink>
    <RouterLink to="/login">login</RouterLink>
    <RouterView />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.app {
  width: 100vh;
  height: 100vh;
  background-color: skyblue;
}
</style>
