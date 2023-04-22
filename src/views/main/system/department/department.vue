<template>
  <div>
    <page-search @resetForm="handlerResetForm" @queryForm="handlerQueryForm" />
    <page-content ref="pageContentRef" />
  </div>
</template>

<script setup lang="ts">
import pageSearch from "./c-cpns/page-search.vue";
import pageContent from "./c-cpns/page-content.vue";
import { ref } from "vue";
const pageContentRef = ref<InstanceType<typeof pageContent>>();
function handlerQueryForm(queryInfo: any) {
  pageContentRef.value?.fetchPageListData(queryInfo);
}
function handlerResetForm() {
  pageContentRef.value?.fetchPageListData();
}
</script>

<style scoped lang="less"></style>
