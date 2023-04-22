<template>
  <div>
    <page-search @resetForm="handlerResetForm" @queryForm="handlerQueryForm" />
    <page-content
      ref="pageContentRef"
      @createEditUser="handlerCreateEditPage"
    />
    <page-modal ref="pageModalRef" />
  </div>
</template>

<script setup lang="ts">
import pageSearch from "./c-cpns/page-search.vue";
import pageContent from "./c-cpns/page-content.vue";
import pageModal from "./c-cpns/page-modal.vue";
import { ref } from "vue";
const pageContentRef = ref<InstanceType<typeof pageContent>>();
const pageModalRef = ref<InstanceType<typeof pageModal>>();
function handlerQueryForm(queryInfo: any) {
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
