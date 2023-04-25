<template>
  <div class="user-content">
    <div class="header">
      <div class="title">用户列表</div>
      <el-button
        v-if="isCreate"
        @click="createNewUser"
        style="height: 32px"
        size="large"
        type="primary"
      >
        新建用户
      </el-button>
    </div>
    <div class="main">
      <el-table :data="userList" border style="width: 100%">
        <el-table-column align="center" type="selection" width="80" />
        <el-table-column align="center" type="index" label="序号" width="80" />
        <el-table-column
          align="center"
          prop="name"
          label="用户名"
          width="120"
        />
        <el-table-column
          align="center"
          prop="realname"
          label="真实姓名"
          width="120"
        />
        <el-table-column
          align="center"
          prop="cellphone"
          label="手机号码"
          width="120"
        />
        <el-table-column align="center" prop="enable" label="状态" width="100">
          <template #default="scope">
            <el-button plain :type="scope.row.enable ? 'success' : 'danger'">
              {{ scope.row.enable ? "启用" : "禁用" }}
            </el-button>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="createAt"
          label="创建时间"
          width="220"
        >
          <template #default="scope">
            {{ formatUTC(scope.row.createAt) }}
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="updateAt"
          label="更新时间"
          width="220"
        >
          <template #default="scope">
            {{ formatUTC(scope.row.updateAt) }}
          </template>
        </el-table-column>
        <el-table-column align="center" prop="date" label="操作" width="200">
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
      </el-table>
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[6, 12, 18]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="userTotalCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import useSystemStore from "@/store/module/system";
import usePermissions from "@/hook/usePermissions";
import { storeToRefs } from "pinia";
import { formatUTC } from "@/utils/format";
import { ref } from "vue";
import type { IdType } from "@/types";
const systemStore = useSystemStore();
const { userList, userTotalCount } = storeToRefs(systemStore);
const pageSize = ref(6);
const currentPage = ref(1);
// 用户权限判断
const isCreate = usePermissions("users:create");
const isDelete = usePermissions("users:delete");
const isUpdate = usePermissions("users:update");
const isQuery = usePermissions("users:query");
fetchUserListData();
function handleSizeChange() {
  fetchUserListData();
}
function handleCurrentChange() {
  fetchUserListData();
}
function fetchUserListData(formData = {}) {
  if (!isQuery) return;
  const size = pageSize.value;
  const offset = (currentPage.value - 1) * size;
  const info = { offset, size, ...formData };
  systemStore.fetchUserListAction(info);
}
const emits = defineEmits(["createEditUser"]);
// 编辑用户
function handlerEdit(currentEditUser: any) {
  emits("createEditUser", currentEditUser);
}
function handlerDelete(id: IdType) {
  systemStore.fetchDeleteUserAction(id);
}
function createNewUser() {
  emits("createEditUser");
}
defineExpose({
  fetchUserListData
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
