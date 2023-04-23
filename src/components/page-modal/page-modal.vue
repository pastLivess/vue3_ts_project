<template>
  <div class="user-modal">
    <el-dialog
      center
      width="35%"
      :title="
        !isEditForm ? modalConfig.header.newTitle : modalConfig.header.editTitle
      "
      :model-value="isShowModal"
      :close-on-click-modal="false"
      :show-close="false"
      :close-on-press-escape="false"
    >
      <el-form :model="formData" ref="elFormRef" label-width="100px">
        <template v-for="item in modalConfig.propsList" :key="item.label">
          <el-form-item :label="item.label" :prop="item.prop">
            <template v-if="item.type === 'input'">
              <el-input
                v-model="formData[item.prop]"
                :placeholder="item.placeholder"
              ></el-input>
            </template>
            <template v-if="item.type === 'data-picker'">
              <el-date-picker
                type="daterange"
                range-separator="-"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                v-model="formData[item.prop]"
              ></el-date-picker>
            </template>
            <template v-if="item.type === 'select'">
              <el-select
                style="width: 100%"
                :placeholder="item.placeholder"
                v-model="formData[item.prop]"
              >
                <template v-for="option in item.options" :key="option.label">
                  <el-option :label="option.name" :value="option.value">
                    {{ option.name }}
                  </el-option>
                </template>
              </el-select>
            </template>
          </el-form-item>
        </template>
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
import { reactive } from "vue";
import { ref } from "vue";

interface IModal {
  modalConfig: {
    pageName: string;
    header: {
      newTitle: string;
      editTitle: string;
    };
    propsList: any[];
  };
}

const props = defineProps<IModal>();

const initialData: any = {};
for (const item of props.modalConfig.propsList) {
  initialData[item.prop] = "";
}
const elFormRef = ref<InstanceType<typeof ElForm>>();
const formData = reactive<any>(initialData);
const isShowModal = ref(false);
const systemStore = useSystemStore();
const isEditForm = ref(false);
const editFromData = ref<any>({});
// 点击确定后执行的函数
function onSubmitClick() {
  isShowModal.value = false;
  if (isEditForm.value && editFromData.value) {
    systemStore.fetchEditPageAction(
      props.modalConfig.pageName,
      editFromData.value.id,
      formData
    );
  } else {
    systemStore.fetchCreatePageAction(props.modalConfig.pageName, formData);
  }
  isEditForm.value = false;
}
function onCancelClick() {
  isShowModal.value = false;
  isEditForm.value = false;
}
// 新建或者编辑后弹出
function setShowModal(itemData?: any, isEdit = false) {
  isShowModal.value = true;

  if (isEdit && itemData) {
    for (const key in itemData) {
      formData[key] = itemData[key];
    }
    isEditForm.value = true;
    editFromData.value = itemData;
  } else {
    for (const key in formData) {
      formData[key] = "";
    }
    isEditForm.value = false;
    editFromData.value = null;
  }
}
defineExpose({
  setShowModal
});
</script>

<style scoped lang="less"></style>
