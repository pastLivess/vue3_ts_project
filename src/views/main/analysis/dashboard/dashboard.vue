<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <template v-for="item in 4" :key="item">
        <el-col :span="6">
          <count-card />
        </el-col>
      </template>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import countCard from "./c-cpns/count-card.vue";
</script>

<style scoped lang="less"></style>
