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
    <page-modal ref="pageModalRef" :modal-config="modalConfig">
      <template #menulist>
        <span>菜单列表</span>
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
const { pageContentRef, handlerQueryForm, handlerResetForm } = usePageContent();
const { pageModalRef, handlerNewPage, handlerEditPage } = usePageModal();
</script>

<style scoped lang="less"></style>
