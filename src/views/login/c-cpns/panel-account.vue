<template>
  <div class="panel-account">
    <el-form
      label-width="60"
      ref="accountFormRef"
      :model="account"
      :rules="accountRules"
      status-icon
      class="demo-ruleForm"
    >
      <el-form-item style="width: 95%" label="账号" prop="username">
        <el-input v-model="account.username" type="text" autocomplete="off" />
      </el-form-item>
      <el-form-item style="width: 95%" label="密码" prop="password">
        <el-input show-password v-model="account.password" type="password">
        </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import type { FormRules } from "element-plus";

const accountFormRef = ref();
const account = reactive({
  username: "",
  password: ""
});
const accountRules: FormRules = {
  username: [
    {
      required: true,
      message: "必须输入账号信息",
      trigger: "blur"
    },
    {
      pattern: /^[a-z0-9A-Z]{6,20}$/,
      message: "必须是6~20位数字或字母组成",
      trigger: "blur"
    }
  ],
  password: [
    {
      required: true,
      message: "必须输入密码信息",
      trigger: "blur"
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: "必须是3位以上数字或字母组成",
      trigger: "blur"
    }
  ]
};

// 收集登录和密码
function loginAction() {
  console.log("loginAction");
}
defineExpose({
  loginAction
});
</script>

<style scoped lang="less"></style>
