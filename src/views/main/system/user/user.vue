<template>
  <div class="user">
    <user-search @resetForm="handlerResetForm" @queryForm="handlerQueryForm" />
    <user-content ref="useContentRef" />
  </div>
</template>

<script setup lang="ts">
import userSearch from "./c-cpns/user-search.vue";
import userContent from "./c-cpns/user-content.vue";
import { ref } from "vue";
const useContentRef = ref<InstanceType<typeof userContent>>();
function handlerResetForm() {
  useContentRef.value?.fetchUserListData();
}
function handlerQueryForm(searchForm: object) {
  // console.log(searchForm);
  useContentRef.value?.fetchUserListData(searchForm);
}
</script>

<style scoped lang="less"></style>
