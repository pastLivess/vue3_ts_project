<template>
  <div>
    <h2 class="title">{{ counter }}</h2>
    <button @click="increment">+</button>
  </div>
</template>

<script setup lang="ts">
import { nextTick } from "vue";
import { ref } from "vue";

const counter = ref(0);
function increment() {
  counter.value++;
  const title = document.querySelector(".title");
  // 每次获取的值都是上一次的值 与react中的setState一样
  // 数据是异步更新的,拿取不到最后的值
  console.log(title?.textContent);
  nextTick(() => {
    console.log(title?.textContent);
  });
}
</script>

<style scoped lang="less"></style>
