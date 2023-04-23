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
          ref="treeRef"
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
import { ref, nextTick } from "vue";
import type { ElTree } from "element-plus";
import { mapMenuListToIds } from "@/utils/map-menulist-to-id";
const { pageContentRef, handlerQueryForm, handlerResetForm } = usePageContent();
const { pageModalRef, handlerNewPage, handlerEditPage } =
  usePageModal(editCallBack);
const loginStore = useLoginStore();
const { entireMenus } = loginStore;
const otherInfo = ref({});
const treeRef = ref<InstanceType<typeof ElTree>>();
function handlerElTreeClick(_: any, data2: any) {
  const menuList = [...data2.checkedKeys, ...data2.halfCheckedKeys];
  otherInfo.value = { menuList };
}
function editCallBack(itemData: any) {
  const menuIds = mapMenuListToIds(itemData.menuList);
  // console.log(menuIds);

  nextTick(() => {
    treeRef.value?.setCheckedKeys(menuIds);
  });
}
</script>

<style scoped lang="less"></style>
