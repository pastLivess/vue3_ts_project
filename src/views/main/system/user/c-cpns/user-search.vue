<template>
  <div class="user-search">
    <el-form
      ref="elFormRef"
      :model="searchForm"
      label-width="80px"
      size="large"
    >
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item prop="userName" label="用户名">
            <el-input
              v-model="searchForm.name"
              placeholder="请输入要查询的用户名"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="realname" label="真实姓名">
            <el-input
              v-model="searchForm.realname"
              placeholder="请输入要查询的真实姓名"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="cellphone" label="手机号码">
            <el-input
              v-model="searchForm.cellphone"
              placeholder="请输入要查询的手机号码"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item prop="enable" label="状态">
            <el-select
              class="m-2"
              placeholder="请输入要查询的状态"
              size="large"
              style="width: 100%"
              v-model="searchForm.enable"
              prop="enable"
            >
              <el-option label="启用" :value="1" />
              <el-option label="禁用" :value="0" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="createAt" label="创建时间">
            <el-date-picker
              type="daterange"
              range-separator="To"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              v-model="searchForm.createAt"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="btns">
      <el-button style="height: 32px" size="large" @click="handlerResetForm"
        >重置</el-button
      >
      <el-button
        style="height: 32px"
        size="large"
        type="primary"
        @click="handlerQueryForm"
      >
        查询
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ElForm } from "element-plus";
import { ref } from "vue";
import { reactive } from "vue";

const searchForm = reactive({
  name: "",
  realname: "",
  cellphone: "",
  enable: 1,
  createAt: []
});
const emits = defineEmits(["resetForm", "queryForm"]);
const elFormRef = ref<InstanceType<typeof ElForm>>();
function handlerResetForm() {
  elFormRef.value?.resetFields(); /* 重置表单方法 */
  emits("resetForm");
}
function handlerQueryForm() {
  const { name, realname, cellphone, enable } = searchForm;
  emits("queryForm", { name, realname, cellphone, enable });
}
</script>

<style scoped lang="less">
.user-search {
  background-color: #fff;
  padding: 20px;
  .btns {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
