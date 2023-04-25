<template>
  <div class="user-content">
    <div class="header">
      <div class="title">{{ contentConfig.header?.title ?? "数据列表" }}</div>
      <el-button
        v-if="isCreate"
        @click="createNewUser"
        style="height: 32px"
        size="large"
        type="primary"
      >
        {{ contentConfig.header?.btnTitle ?? "数据列表" }}
      </el-button>
    </div>
    <div class="main">
      <el-table
        :data="pageList"
        border
        style="width: 100%"
        v-bind="contentConfig?.childrenTree"
      >
        <template v-for="item in contentConfig.propsList" :key="item.label">
          <template v-if="item.type === 'timer'">
            <el-table-column v-bind="item">
              <template #default="score">
                {{ formatUTC(score.row[item.prop]) }}
              </template>
            </el-table-column>
          </template>
          <template v-else-if="item.type === 'handler'">
            <el-table-column v-bind="item" v-if="isDelete && isUpdate">
              <template #default="scope">
                <el-button
                  v-if="isUpdate"
                  @click="handlerEdit(scope.row)"
                  text
                  icon="edit"
                  type="primary"
                  size="small"
                >
                  编辑
                </el-button>
                <el-button
                  v-if="isDelete"
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
import usePermissions from "@/hook/usePermissions";

interface IProps {
  contentConfig: {
    pageName: string;
    header?: {
      title?: string;
      btnTitle?: string;
    };
    propsList: any[];
    childrenTree?: any;
  };
}
const props = defineProps<IProps>();
// 用户按钮权限
const systemStore = useSystemStore();
const { pageList, pageTotalCount } = storeToRefs(systemStore);
const pageSize = ref(6);
const currentPage = ref(1);
const isCreate = usePermissions(`${props.contentConfig.pageName}:create`);
const isDelete = usePermissions(`${props.contentConfig.pageName}:create`);
const isUpdate = usePermissions(`${props.contentConfig.pageName}:create`);
const isQuery = usePermissions(`${props.contentConfig.pageName}:create`);
systemStore.$onAction(({ name, after }) => {
  if (
    name === "fetchDeletePageAction" ||
    name === "fetchEditPageAction" ||
    name === "fetchCreateNewUser"
  )
    // after会在回调成功时才会执行
    after(() => {
      currentPage.value = 1;
    });
});
fetchPageListData();
function handleSizeChange() {
  fetchPageListData();
}
function handleCurrentChange() {
  fetchPageListData();
}
function fetchPageListData(formData = {}) {
  if (!isQuery) return;
  const size = pageSize.value;
  const offset = (currentPage.value - 1) * size;
  const info = { offset, size, ...formData };
  systemStore.fetchPageListAction(props.contentConfig.pageName, info);
}
const emits = defineEmits(["editPage", "newPage"]);

function handlerDelete(id: IdType) {
  systemStore.fetchDeletePageAction(props.contentConfig.pageName, id);
}
function handlerEdit(currentEditUser: any) {
  console.log(currentEditUser);

  emits("editPage", currentEditUser);
}
function createNewUser() {
  emits("newPage");
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
