<template>
  <div class="user-modal">
    <el-dialog
      center
      width="35%"
      :title="!isEditForm ? '新建部门' : '编辑部门'"
      :model-value="isShowModal"
      :close-on-click-modal="false"
      :show-close="false"
      :close-on-press-escape="false"
    >
      <el-form :model="formData" ref="elFormRef" label-width="100px">
        <el-form-item prop="name" label="部门名称">
          <el-input v-model="formData.name" autocomplete="off" />
        </el-form-item>
        <el-form-item prop="leader" label="领导名称">
          <el-input v-model="formData.leader" autocomplete="off" />
        </el-form-item>
        <el-form-item prop="parentId" label="选择部门">
          <el-select v-model="formData.parentId" style="width: 100%">
            <template v-for="item in pageList" :key="item.id">
              <el-option :label="item.name" :value="item.id" /> </template
          ></el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="onCancelClick">取消</el-button>
          <el-button @click="onSubmitClick" type="primary"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import useSystemStore from "@/store/module/system";
import type { ElForm } from "element-plus";
import { storeToRefs } from "pinia";
import { reactive } from "vue";
import { ref } from "vue";
const elFormRef = ref<InstanceType<typeof ElForm>>();
const formData = reactive<any>({
  name: "",
  leader: "",
  parentId: ""
});
const isShowModal = ref(false);
const systemStore = useSystemStore();
const { pageList } = storeToRefs(systemStore);
const isEditForm = ref(false);
const editFromData = ref<any>({});
// 点击确定后执行的函数
function onSubmitClick() {
  isShowModal.value = false;
  if (isEditForm.value && editFromData.value) {
    systemStore.fetchEditPageAction(
      "department",
      editFromData.value.id,
      formData
    );
  } else {
    systemStore.fetchCreatePageAction("department", formData);
  }
}
function onCancelClick() {
  isShowModal.value = false;
}
// 新建或者编辑后弹出
function setShowModal(itemData?: any, isEdit = false) {
  isShowModal.value = true;

  if (isEdit && itemData) {
    for (const key in itemData) {
      // console.log(key);
      if (key === "createAt" || key === "updateAt") continue;
      formData[key] = itemData[key];
    }
    isEditForm.value = true;
    editFromData.value = itemData;
  } else {
    isEditForm.value = false;
    for (const key in formData) {
      formData[key] = "";
    }
    editFromData.value = null;
  }
}
defineExpose({
  setShowModal
});
</script>

<style scoped lang="less"></style>
