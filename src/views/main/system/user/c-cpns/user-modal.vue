<template>
  <div class="user-modal">
    <el-dialog
      center
      width="35%"
      :title="!isEditForm ? '新建用户' : '编辑用户'"
      :model-value="isShowModal"
      :close-on-click-modal="false"
      :show-close="false"
      :close-on-press-escape="false"
    >
      <el-form :model="formData" ref="elFormRef" label-width="100px">
        <el-form-item prop="name" label="用户名">
          <el-input v-model="formData.name" autocomplete="off" />
        </el-form-item>
        <el-form-item prop="realname" label="真实姓名">
          <el-input v-model="formData.realname" autocomplete="off" />
        </el-form-item>
        <el-form-item prop="password" label="密码" v-show="!isEditForm">
          <el-input
            show-password
            v-model="formData.password"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item prop="cellphone" label="手机号码">
          <el-input v-model="formData.cellphone" autocomplete="off" />
        </el-form-item>
        <el-form-item prop="roleId" label="选择角色">
          <el-select v-model="formData.roleId" style="width: 100%">
            <template v-for="item in entireRoles" :key="item.id">
              <el-option :label="item.name" :value="item.id" />
            </template>
          </el-select>
        </el-form-item>
        <el-form-item prop="departmentId" label="选择部门">
          <el-select v-model="formData.departmentId" style="width: 100%">
            <template v-for="item in entireDepartment" :key="item.id">
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
import useLoginStore from "@/store/module/login";
import useSystemStore from "@/store/module/system";
import type { ElForm } from "element-plus";
import { storeToRefs } from "pinia";
import { reactive } from "vue";
import { ref } from "vue";
const elFormRef = ref<InstanceType<typeof ElForm>>();
const formData = reactive<any>({
  name: "",
  realname: "",
  password: "",
  cellphone: "",
  roleId: "",
  departmentId: ""
});
const isShowModal = ref(false);
const systemStore = useSystemStore();
const loginStore = useLoginStore();
const { entireDepartment, entireRoles } = storeToRefs(loginStore);

const isEditForm = ref(false);
const editFromData = ref<any>({});
// 点击确定后执行的函数
function onSubmitClick() {
  // console.log(isEditForm, editFromData);
  if (isEditForm.value && editFromData.value) {
    console.log(editFromData.value.id, formData);
    const { name, realname, password, cellphone, departmentId, roleId } =
      formData;
    const info = { name, realname, password, cellphone, departmentId, roleId };
    systemStore.fetchEditUser(editFromData.value.id, info);
  } else {
    systemStore.fetchCreateNewUser(formData);
    isShowModal.value = false;
  }
  onCancelClick();
}
function onCancelClick() {
  isShowModal.value = false;
  isEditForm.value = false;
}
// 新建或者编辑后弹出
function setShowModal(itemData?: any, isEdit = false) {
  isShowModal.value = true;
  if (isEdit && itemData) {
    console.log(isEdit, itemData);
    for (const key in itemData) {
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
