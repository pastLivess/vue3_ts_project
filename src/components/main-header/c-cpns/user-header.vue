<template>
  <div class="user-header">
    <div class="icons">
      <el-icon size="20px"><Message /></el-icon>
      <el-icon size="20px"><ChatDotRound /></el-icon>
      <el-icon size="20px"><Search /></el-icon>
    </div>
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          :size="30"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
        <span>pastLives</span>
        <el-icon class="el-icon--right"><arrow-down /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="handlerExitClick">
            <el-icon><CircleClose /></el-icon>
            <span>退出系统</span>
          </el-dropdown-item>
          <el-dropdown-item>
            <el-icon><InfoFilled /></el-icon>
            <span>个人密码</span>
          </el-dropdown-item>
          <el-dropdown-item>
            <el-icon><Unlock /></el-icon>
            <span>修改密码</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import useLoginStore from "@/store/module/login";

const loginStore = useLoginStore();
function handlerExitClick() {
  loginStore.removeLocalCacheAction();
}
</script>

<style scoped lang="less">
.user-header {
  display: flex;
  align-items: center;
  .icons {
    display: flex;
    align-items: center;
    .el-icon {
      margin-right: 12px;
    }
  }
  .el-dropdown {
    :deep(.el-dropdown-link) {
      position: relative;
      display: flex;
      align-items: center;
      margin-left: 5px;
    }
  }
}
</style>
