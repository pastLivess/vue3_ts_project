<template>
  <div class="user-content">
    <div class="header">
      <div class="title">用户列表</div>
      <el-button style="height: 32px" size="large" type="primary">
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
          <template #default>
            <el-button text icon="edit" type="primary" size="small">
              编辑
            </el-button>
            <el-button text icon="delete" type="danger" size="small">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import useSearchStore from "@/store/module/system";
import { storeToRefs } from "pinia";
import { formatUTC } from "@/utils/format";
const searchStore = useSearchStore();
searchStore.fetchUserListAction();
const { userList } = storeToRefs(searchStore);
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
    :deep(.el-table--border) {
      display: flex;
      justify-content: center;
      padding: 10px;
    }
  }
}
</style>
