<template>
  <div>
    <page-search
      :searchConfig="searchConfig"
      @resetForm="handlerResetForm"
      @queryForm="handlerQueryForm"
    />
    <page-content
      ref="pageContentRef"
      @editPage="handlerEditPage"
      @newPage="handlerNewPage"
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
import { computed } from "vue";
import useLoginStore from "@/store/module/login";
import usePageContent from "@/hook/usePageContent";
import usePageModal from "@/hook/usePageModal";
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
const { pageContentRef, handlerQueryForm, handlerResetForm } = usePageContent();
const { pageModalRef, handlerNewPage, handlerEditPage } = usePageModal();
</script>

<style scoped lang="less"></style>
