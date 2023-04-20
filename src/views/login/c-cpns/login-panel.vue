<template>
  <div class="login-panel">
    <h2 class="login-title">后台管理系统</h2>
    <div class="login-content">
      <el-tabs
        v-model="activeName"
        stretch
        type="border-card"
        class="demo-tabs"
      >
        <el-tab-pane name="user">
          <template #label>
            <span class="custom-tabs-label">
              <el-icon><User /></el-icon>
              <span>账号登录</span>
            </span>
          </template>
          <panel-account ref="getPanel" />
        </el-tab-pane>
        <el-tab-pane name="phone">
          <template #label>
            <span class="custom-tabs-label">
              <el-icon><Iphone /></el-icon>
              <span>手机登录</span>
            </span>
          </template>
          <panelPhone />
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="login-control">
      <span>
        <el-checkbox :checked="isRememberPwd" v-model="isRememberPwd">
          记住密码
        </el-checkbox>
      </span>
      <span><a href="javascript:;">忘记密码</a></span>
    </div>
    <div class="login-btn">
      <el-button
        @click="loginBtnClick"
        type="primary"
        size="large"
        style="width: 100%"
        >立即登录</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import panelAccount from "./panel-account.vue";
import panelPhone from "./panel-phone.vue";
import { localCache } from "@/utils/cache";
import {
  CACHE_REMEMBER_PASSWORD,
  CACHE_USERNAME,
  CACHE_PASSWORD
} from "@/global/constants";
const getPanel = ref<InstanceType<typeof panelAccount>>();
const activeName = ref<string>("user");
const isRememberPwd = ref<boolean>(
  localCache.getCache(CACHE_REMEMBER_PASSWORD) === "true" &&
    localCache.getCache(CACHE_USERNAME) &&
    localCache.getCache(CACHE_PASSWORD)
    ? true
    : false
);
function loginBtnClick() {
  getPanel.value?.loginAction(isRememberPwd.value);
}
watch(isRememberPwd, (newValue) => {
  console.log(newValue);
  localCache.setCache(
    CACHE_REMEMBER_PASSWORD,
    newValue === true ? "true" : "false"
  );
});
</script>

<style scoped lang="less">
.login-panel {
  width: 330px;

  .login-title {
    text-align: center;
    margin: 0 0 15px 0;
  }
  :deep(.custom-tabs-label) {
    display: flex;
    align-items: center;
    .el-icon {
      margin-right: 5px;
    }
  }
  :deep(.el-tabs__content) {
    padding: 20px 15px 15px 15px;
  }
  .login-control {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    a {
      color: #409eff;
    }
  }
}
</style>
