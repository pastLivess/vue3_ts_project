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
      <el-form-item style="width: 95%" label="账号" prop="name">
        <el-input v-model="account.name" type="text" autocomplete="off" />
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
import { ElMessage, type ElForm, type FormRules } from "element-plus";
import useLoginStore from "@/store/module/login";
import type { ICcount } from "@/types";
import { localCache } from "@/utils/cache";
import router from "@/router";
import { CACHE_REMEMBER_PASSWORD, CACHE_PASSWORD } from "@/global/constants";
const loginStore = useLoginStore();
const accountFormRef = ref<InstanceType<typeof ElForm>>();
const account = reactive<ICcount>({
  name: localCache.getCache("username") ?? "",
  password:
    localCache.getCache(CACHE_REMEMBER_PASSWORD) === "true" &&
    localCache.getCache(CACHE_PASSWORD)
      ? localCache.getCache(CACHE_PASSWORD)
      : ""
});
const accountRules: FormRules = {
  name: [
    {
      required: true,
      message: "必须输入账号信息",
      trigger: "blur"
    },
    {
      pattern: /^[a-z0-9A-Z]{4,20}$/,
      message: "必须是4~20位数字或字母组成",
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
function loginAction(isRememberPwd: boolean) {
  accountFormRef.value?.validate(async (valid) => {
    if (valid) {
      try {
        await loginStore.loginAccountAction(account);
        ElMessage.success("登录成功,正在跳转中~~~");
        router.push("/main");
        if (isRememberPwd) {
          localCache.setCache(CACHE_PASSWORD, account.password);
        } else {
          localCache.removeCache(CACHE_PASSWORD);
        }
      } catch (error: any) {
        console.log(error);
      }
    }
  });
}
defineExpose({
  loginAction
});
</script>

<style scoped lang="less"></style>
