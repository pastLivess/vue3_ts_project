<template>
  <div class="user-modal">
    <el-dialog center width="35%" title="新建用户" :model-value="isShowModal">
      <el-form :model="formData" ref="elFormRef" label-width="100px">
        <el-form-item prop="name" label="用户名">
          <el-input v-model="formData.name" autocomplete="off" />
        </el-form-item>
        <el-form-item prop="relename" label="真实姓名">
          <el-input v-model="formData.relename" autocomplete="off" />
        </el-form-item>
        <el-form-item prop="password" label="密码">
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
          <el-button @click="isShowModal = false">取消</el-button>
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
const formData = reactive({
  name: "",
  relename: "",
  password: "",
  cellphone: "",
  roleId: "",
  departmentId: ""
});
const isShowModal = ref(false);
const systemStore = useSystemStore();
const { entireDepartment, entireRoles } = storeToRefs(systemStore);
function onSubmitClick() {
  isShowModal.value = false;
  systemStore.fetchCreateNewUser(formData);
}

function setShowModal() {
  isShowModal.value = true;
}
defineExpose({
  setShowModal
});
</script>

<style scoped lang="less"></style>
