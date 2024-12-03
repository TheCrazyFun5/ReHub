import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import VueCookies from "vue-cookies";

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

function isAuth() {
  if (VueCookies.isKey("auth")) {
    console.log(VueCookies.get("auth"));
    return true;
  }
  return false;
}

router.beforeEach(async (to, from, next) => {
  if (to.path !== "/loginIn" && !isAuth()) {
    next({ name: "loginIn" });
  } else if (to.path === "/loginIn" && isAuth()) {
    next({ name: "news" });
  } else {
    next();
  }
});

export default router;
