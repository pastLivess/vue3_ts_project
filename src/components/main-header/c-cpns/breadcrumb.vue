<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="item in breadcrumb" :key="item.id">
        <el-breadcrumb-item :to="item.path">
          {{ item.name }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";
import useLoginStore from "@/store/module/login";
import { mapPathToBreadcrumbs } from "@/utils/map-menu-to-breadcrumb";
import { storeToRefs } from "pinia";
import { computed } from "vue";
const loginStore = useLoginStore();
const { userInfoMenus } = storeToRefs(loginStore);

// console.log(userInfoMenus);
const breadcrumb = computed(() => {
  return mapPathToBreadcrumbs(
    router.currentRoute.value.fullPath,
    userInfoMenus.value
  );
});
</script>

<style scoped lang="less">
.breadcrumb {
  display: flex;
  align-items: center;
}
</style>
