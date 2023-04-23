<template>
  <div class="user-content">
    <div class="header">
      <div class="title">{{ contentConfig.header?.title ?? "数据列表" }}</div>
      <el-button
        @click="createNewUser"
        style="height: 32px"
        size="large"
        type="primary"
      >
        {{ contentConfig.header?.btnTitle ?? "数据列表" }}
      </el-button>
    </div>
    <div class="main">
      <el-table :data="pageList" border style="width: 100%">
        <template v-for="item in contentConfig.propsList" :key="item.label">
          <template v-if="item.type === 'timer'">
            <el-table-column v-bind="item">
              <template #default="score">
                {{ formatUTC(score.row[item.prop]) }}
              </template>
            </el-table-column>
          </template>
          <template v-else-if="item.type === 'handler'">
            <el-table-column v-bind="item">
              <template #default="scope">
                <el-button
                  @click="handlerEdit(scope.row)"
                  text
                  icon="edit"
                  type="primary"
                  size="small"
                >
                  编辑
                </el-button>
                <el-button
                  @click="handlerDelete(scope.row.id)"
                  text
                  icon="delete"
                  type="danger"
                  size="small"
                >
                  删除
                </el-button>
              </template>
            </el-table-column>
          </template>
          <template v-else-if="item.type === 'custom'">
            <el-table-column v-bind="item">
              <template #default="scope">
                <slot
                  :name="item.slotName"
                  v-bind="scope"
                  :prop="item.prop"
                ></slot>
              </template>
            </el-table-column>
          </template>
          <template v-else>
            <el-table-column v-bind="item"></el-table-column>
          </template>
        </template>
      </el-table>
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[6, 12, 18]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageTotalCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import useSystemStore from "@/store/module/system";
import { storeToRefs } from "pinia";
import { formatUTC } from "@/utils/format";
import { ref } from "vue";
import type { IdType } from "@/types";

interface IProps {
  contentConfig: {
    header?: {
      title?: string;
      btnTitle?: string;
    };
    propsList: any[];
  };
}
const props = defineProps<IProps>();

const systemStore = useSystemStore();
const { pageList, pageTotalCount } = storeToRefs(systemStore);
const pageSize = ref(6);
const currentPage = ref(1);

fetchPageListData();
function handleSizeChange() {
  fetchPageListData();
}
function handleCurrentChange() {
  fetchPageListData();
}
function fetchPageListData(formData = {}) {
  const size = pageSize.value;
  const offset = (currentPage.value - 1) * size;
  const info = { offset, size, ...formData };
  systemStore.fetchPageListAction("department", info);
}
const emits = defineEmits(["createEditUser"]);
// 编辑用户
function handlerEdit(currentEditUser: any) {
  emits("createEditUser", currentEditUser);
}
function handlerDelete(id: IdType) {
  systemStore.fetchDeletePageAction("department", id);
}
function createNewUser() {
  emits("createEditUser");
}
defineExpose({
  fetchPageListData
});
</script>

<style scoped lang="less">
.user-content {
  .header {
    margin-top: 20px;
    padding: 12px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
  }
  .main {
    background-color: #fff;
    :deep(.el-table--border) {
      display: flex;
      justify-content: center;
      padding: 10px;
    }
    :deep(.el-pagination) {
      justify-content: flex-end;
    }
  }
}
</style>
