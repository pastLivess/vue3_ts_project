<template>
  <div class="user-modal">
    <el-dialog center width="35%" title="新建用户" :model-value="true">
      <el-form label-width="100px">
        <el-form-item label="用户名">
          <el-input autocomplete="off" />
        </el-form-item>
        <el-form-item label="真实姓名">
          <el-input autocomplete="off" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input autocomplete="off" />
        </el-form-item>
        <el-form-item label="手机号码">
          <el-input autocomplete="off" />
        </el-form-item>
        <el-form-item label="选择角色">
          <el-select style="width: 100%"></el-select>
        </el-form-item>
        <el-form-item label="选择部门">
          <el-select style="width: 100%"></el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button>取消</el-button>
          <el-button type="primary"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const modalValue = ref(false);
</script>

<style scoped lang="less">
.user-modal {
}
</style>
