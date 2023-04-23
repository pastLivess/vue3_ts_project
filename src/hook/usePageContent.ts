import { ref } from "vue";
import type pageContent from "@/components/page-content/page-content.vue";
export default function usePageContent() {
  const pageContentRef = ref<InstanceType<typeof pageContent>>();
  function handlerQueryForm(queryInfo: any) {
    pageContentRef.value?.fetchPageListData(queryInfo);
  }
  function handlerResetForm() {
    pageContentRef.value?.fetchPageListData();
  }
  return { pageContentRef, handlerQueryForm, handlerResetForm };
}
