<template>
  <div class="panel-phone">
    <el-form
      label-width="60"
      ref="ruleFormRef"
      status-icon
      class="demo-ruleForm"
    >
      <el-form-item style="width: 95%" label="账号" prop="pass">
        <el-input type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item style="width: 95%" label="密码" prop="checkPass">
        <el-input type="password" autocomplete="off" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less"></style>
