import { createPinia } from "pinia";
import type { App } from "vue";
import useLoginStore from "./module/login";
const store = createPinia();
function registerStore(app: App<Element>) {
  app.use(store);
  const loginStore = useLoginStore();
  loginStore.loadLocalCacheAction();
}
export default registerStore;
