import { ref } from "vue";
import type pageModal from "@/components/page-modal/page-modal.vue";
export default function usePageModal() {
  const pageModalRef = ref<InstanceType<typeof pageModal>>();
  // 新建与删除
  function handlerNewPage() {
    pageModalRef.value?.setShowModal();
  }
  function handlerEditPage(queryInfo: any) {
    pageModalRef.value?.setShowModal(queryInfo, true);
  }
  return { pageModalRef, handlerNewPage, handlerEditPage };
}
