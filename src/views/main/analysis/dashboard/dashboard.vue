<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <template v-for="item in amountList" :key="item.amount">
        <el-col :span="6">
          <count-card
            v-bind="item"
            :count1="item.number1"
            :count2="item.number2"
          />
        </el-col>
      </template>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import countCard from "./c-cpns/count-card.vue";
import useAnalysisStore from "@/store/module/analysis";
const analysisStore = useAnalysisStore();
analysisStore.fetchAnalysisDataAction();
// 获取数据
const { amountList } = storeToRefs(analysisStore);
</script>

<style scoped lang="less"></style>
