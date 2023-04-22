<template>
  <div class="user">
    <user-search @resetForm="handlerResetForm" @queryForm="handlerQueryForm" />
    <user-content @createEditUser="handlerNewEditUser" ref="useContentRef" />
    <user-modal ref="userModalRef" />
  </div>
</template>

<script setup lang="ts">
import userSearch from "./c-cpns/user-search.vue";
import userContent from "./c-cpns/user-content.vue";
import userModal from "./c-cpns/user-modal.vue";
import { ref } from "vue";
const useContentRef = ref<InstanceType<typeof userContent>>();
const userModalRef = ref<InstanceType<typeof userModal>>();
function handlerResetForm() {
  useContentRef.value?.fetchUserListData();
}
function handlerQueryForm(searchForm: object) {
  // console.log(searchForm);
  useContentRef.value?.fetchUserListData(searchForm);
}
function handlerNewEditUser(currentEditUser: object) {
  userModalRef.value?.setShowModal(currentEditUser, true);
}
</script>

<style scoped lang="less"></style>
