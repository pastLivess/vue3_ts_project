import { ref } from "vue";
import type pageModal from "@/components/page-modal/page-modal.vue";
export default function usePageModal(editCallBack?: any) {
  const pageModalRef = ref<InstanceType<typeof pageModal>>();
  // 新建与删除
  function handlerNewPage() {
    pageModalRef.value?.setShowModal();
  }
  function handlerEditPage(itemData: any) {
    pageModalRef.value?.setShowModal(itemData, true);
    if (editCallBack) editCallBack(itemData);
    console.log(itemData);
  }
  return { pageModalRef, handlerNewPage, handlerEditPage };
}
