<template>
  <div>
    <page-search
      @resetForm="handlerResetForm"
      @queryForm="handlerQueryForm"
      :search-config="searchConfig"
    />
    <page-content
      ref="pageContentRef"
      @editPage="handlerEditPage"
      @newPage="handlerNewPage"
      :content-config="contentConfig"
    />
    <page-modal
      :otherInfo="otherInfo"
      ref="pageModalRef"
      :modal-config="modalConfig"
    >
      <template #menulist>
        <el-tree
          :data="entireMenus"
          node-key="id"
          show-checkbox
          :props="{ children: 'children', label: 'name' }"
          @check="handlerElTreeClick"
        />
      </template>
    </page-modal>
  </div>
</template>

<script setup lang="ts">
import searchConfig from "./config/search.config";
import contentConfig from "./config/content.config";
import modalConfig from "./config/modal.config";
import usePageContent from "@/hook/usePageContent";
import usePageModal from "@/hook/usePageModal";
import useLoginStore from "@/store/module/login";
import { ref } from "vue";
const { pageContentRef, handlerQueryForm, handlerResetForm } = usePageContent();
const { pageModalRef, handlerNewPage, handlerEditPage } = usePageModal();
const loginStore = useLoginStore();
const { entireMenus } = loginStore;
const otherInfo = ref({});
function handlerElTreeClick(data1: any, data2: any) {
  const menuList = [...data2.checkedKeys, ...data2.halfCheckedKeys];
  otherInfo.value = { menuList };
}
</script>

<style scoped lang="less"></style>
