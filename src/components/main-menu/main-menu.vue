<template>
  <div class="main-menu">
    <el-menu
      text-color="#b7bdc3"
      active-text-color="#fff"
      background-color="#001529"
      :default-active="defaultActive"
      :collapse-transition="false"
      class="el-menu-vertical-demo"
      :collapse="isFold"
    >
      <template v-for="item in userInfoMenus" :key="item.id">
        <el-sub-menu :index="item.id + ''">
          <template #title>
            <el-icon>
              <component :is="item.icon.split('el-icon')[1]"></component>
            </el-icon>
            <span>{{ item.name }}</span>
          </template>
          <template v-for="iten in item.children" :key="iten.id">
            <el-menu-item :index="iten.id + ''" @click="handlerItemClick(iten)">
              <template #title>
                <span> {{ iten.name }}</span>
              </template>
            </el-menu-item>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";
import useLoginStore from "@/store/module/login";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { mapPathToMenu } from "@/utils/map-path-to-menu";
defineProps({
  isFold: {
    type: Boolean,
    default: true
  }
});
const loginStore = useLoginStore();
const { userInfoMenus } = storeToRefs(loginStore);

function handlerItemClick(item: any) {
  router.replace(item.url);
}

const defaultActive = computed(() => {
  const pathMenu = mapPathToMenu(
    router.currentRoute.value.fullPath,
    userInfoMenus.value
  );
  return pathMenu?.id + "";
});
</script>

<style scoped lang="less"></style>
