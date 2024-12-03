import "@/assets/clear.css";
import "@/assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import VueCookies from "vue-cookies";
import router from "@/modules/routing";

createApp(App).use(router).use(VueCookies).mount("#app");
//createMemoryHistory
//createWebHashHistory
