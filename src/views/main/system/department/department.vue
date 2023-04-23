<template>
  <div>
    <page-search
      :searchConfig="searchConfig"
      @resetForm="handlerResetForm"
      @queryForm="handlerQueryForm"
    />
    <page-content
      ref="pageContentRef"
      @createEditUser="handlerCreateEditPage"
      :content-config="contentConfig"
    >
      <template #leader="scope">
        {{ scope.row[scope.prop] }}
      </template>
      <template #parent="scope">
        {{ scope.row[scope.prop] }}
      </template>
    </page-content>
    <page-modal ref="pageModalRef" :modal-config="wrapperModalConfig" />
  </div>
</template>

<script setup lang="ts">
import pageSearch from "../../../../components/page-search/page-search.vue";
import pageContent from "../../../../components/page-content/page-content.vue";
import pageModal from "../../../../components/page-modal/page-modal.vue";
import searchConfig from "./config/search.config";
import contentConfig from "./config/content.config";
import modalConfig from "./config/modal.config";
import { ref } from "vue";
import { computed } from "vue";
import useLoginStore from "@/store/module/login";
const pageContentRef = ref<InstanceType<typeof pageContent>>();
const pageModalRef = ref<InstanceType<typeof pageModal>>();
const loginStore = useLoginStore();
const wrapperModalConfig = computed(() => {
  const departments = loginStore.entireDepartment.map((item) => {
    return { name: item.name, value: item.id };
  });

  modalConfig.propsList.forEach((item) => {
    if (item.prop === "parentId") [item.options?.push(...departments)];
  });
  return modalConfig;
});
// console.log(wrapperModalConfig);

function handlerQueryForm(queryInfo: any) {
  console.log(queryInfo);

  pageContentRef.value?.fetchPageListData(queryInfo);
}
function handlerResetForm() {
  pageContentRef.value?.fetchPageListData();
}
// 新建与删除
function handlerCreateEditPage(queryInfo: any) {
  pageModalRef.value?.setShowModal(queryInfo, true);
}
</script>

<style scoped lang="less"></style>
