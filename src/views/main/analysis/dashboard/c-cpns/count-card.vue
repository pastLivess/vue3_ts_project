<template>
  <div class="count-card">
    <div class="header">
      <span>{{ title }}</span>
      <el-tooltip :content="tips" placement="top" effect="light">
        <el-icon><Warning /></el-icon>
      </el-tooltip>
    </div>
    <div class="content">
      <div class="count">{{ count1 }}</div>
    </div>
    <div class="footer">
      <span>{{ subtitle }}</span>
      <span>{{ count2 }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  title?: string;
  tips?: string;
  subtitle?: string;
  count1?: number;
  count2?: number;
}
withDefaults(defineProps<IProps>(), {
  title: "商品总数量",
  tips: "所有商品总销售额",
  subtitle: "商品总数量",
  count1: 509989,
  count2: 50989
});
</script>

<style scoped lang="less">
.count-card {
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  height: 130px;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .header {
    display: flex;
    height: 38px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
    justify-content: space-between;
    align-items: flex-end;
  }

  .content {
    display: flex;
    margin-left: 0px;
    font-size: 26px;
    color: rgba(0, 0, 0, 0.85);
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .footer {
    display: flex;
    height: 38px;
    line-height: 38px;
    font-size: 14px;
    letter-spacing: 1px;
    color: rgba(0, 0, 0, 0.85);
    border-top: 1px solid #f0f0f0;
  }
}
</style>
