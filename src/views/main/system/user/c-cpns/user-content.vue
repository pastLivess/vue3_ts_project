<template>
  <div class="user-content">
    <div class="header">
      <div class="title">用户列表</div>
      <el-button style="height: 32px" size="large" type="primary">
        新建用户
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import useSearchStore from "@/store/module/system";
const searchStore = useSearchStore();
searchStore.fetchUserListAction();
</script>

<style scoped lang="less">
.user-content {
  .header {
    margin-top: 20px;
    padding: 12px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    .title {
    }
  }
}
</style>
