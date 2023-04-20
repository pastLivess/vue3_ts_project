import { createApp } from "vue";
import App from "./App.vue";
import "normalize.css";
import "@/assets/css/index.less";
import registerIcons from "./global/register-icons";
import router from "./router";
import store from "./store";
const app = createApp(App);

app.use(router).use(store).use(registerIcons).mount("#app");
