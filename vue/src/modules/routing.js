import { createMemoryHistory, createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import VueCookies from "vue-cookies";
import axios from "axios";
//импорт страниц
import news from "@/pages/news.vue";
import shift from "@/pages/shift.vue";
import chats from "@/pages/chats.vue";
import accounting from "@/pages/accounting.vue";
import loginIn from "@/pages/loginIn.vue";
import NotFound from "@/pages/NotFound.vue";

//описание маршрутов
const routes = [
  { path: "/", name: "news", component: news },
  { path: "/shift", name: "shift", component: shift },
  { path: "/chats", name: "chats", component: chats },
  { path: "/accounting", name: "accounting", component: accounting },
  { path: "/loginIn", name: "loginIn", component: loginIn },
  { path: "/:NotFoundUrl(.*)", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

async function isAuth() {
  return true;
  let f = false;
  await axios
    .post("/api/authenticateToken")
    .then((response) => {
      f = response.data.isToken;
    })
    .catch((error) => console.error(error));
  return f;
}

router.beforeEach(async (to, from, next) => {
  let isAuthToken = false;
  isAuthToken = await isAuth();
  if (to.path !== "/loginIn" && !isAuthToken) {
    next({ name: "loginIn" });
  } else if (to.path === "/loginIn" && isAuthToken) {
    next({ name: "news" });
  } else {
    next();
  }
});

export default router;
