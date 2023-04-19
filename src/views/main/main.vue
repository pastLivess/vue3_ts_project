<template>
  <div class="main">main</div>
  <h2>{{ loginStore.counter }}</h2>
  <button @click="addCounter">+</button>
</template>

<script setup lang="ts">
import useLoginStore from "@/store/module/login";
const loginStore = useLoginStore();

function addCounter() {
  loginStore.changeCounter(999);
}
console.log(loginStore);
</script>

<style scoped lang="less"></style>
