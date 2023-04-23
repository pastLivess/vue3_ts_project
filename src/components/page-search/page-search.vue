<template>
  <div class="user-search">
    <el-form
      ref="elFormRef"
      :model="searchForm"
      label-width="80px"
      size="large"
    >
      <el-row :gutter="20">
        <template v-for="item in searchConfig.formItems" :key="item.prop">
          <el-col :span="8">
            <el-form-item :label="item.label" :prop="item.prop">
              <template v-if="item.type === 'input'">
                <el-input
                  v-model="searchForm[item.prop]"
                  :placeholder="item.placeholder"
                />
              </template>
              <template v-if="item.type === 'date-picker'">
                <el-date-picker
                  v-model="searchForm[item.prop]"
                  type="daterange"
                  range-separator="To"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                ></el-date-picker>
              </template>
              <template v-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  style="width: 100%"
                  v-model="searchForm[item.prop]"
                ></el-select>
                <template v-for="option in item.options" :key="option.value">
                  <el-option
                    :label="option.label"
                    :value="option.value"
                  ></el-option>
                </template>
              </template>
            </el-form-item>
          </el-col>
        </template>
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
interface IProps {
  searchConfig: {
    formItems: any[];
  };
}
const props = defineProps<IProps>();

const initialForm: any = {};

for (const item of props.searchConfig.formItems) {
  initialForm[item.prop] = "";
}
const searchForm = reactive(initialForm);
const emits = defineEmits(["resetForm", "queryForm"]);
const elFormRef = ref<InstanceType<typeof ElForm>>();
function handlerResetForm() {
  elFormRef.value?.resetFields(); /* 重置表单方法 */
  emits("resetForm");
}
function handlerQueryForm() {
  emits("queryForm", searchForm);
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
