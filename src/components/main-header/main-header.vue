<template>
  <div class="main-header">
    <div class="menu-icon" @click="showMenuClick">
      <el-icon size="26px">
        <component :is="!isShowMenu ? 'Expand' : 'Fold'"></component>
      </el-icon>
    </div>
    <div class="content">
      <div class="breadcrumb">面包屑</div>
      <div class="user">
        <user-header />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import userHeader from "./c-cpns/user-header.vue";
const emits = defineEmits(["foldChange"]);
const isShowMenu = ref(false);
function showMenuClick() {
  isShowMenu.value = !isShowMenu.value;
  emits("foldChange", isShowMenu.value);
}
</script>

<style scoped lang="less">
.main-header {
  display: flex;
  align-items: center;
  height: 50px;
  .content {
    display: flex;
    flex: 1;
    margin-left: 15px;
    .breadcrumb {
      flex: 1;
      font-size: 14px;
      line-height: 30px;
    }
  }
}
</style>
