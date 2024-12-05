<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import navHud from "@/components/mainHud.vue";
import { useRoute } from "vue-router";
const route = useRoute();

function ThemCheck() {
  const ThemName = localStorage.getItem("Them");
  if (ThemName) {
    if (ThemName === "Light")
      return document.documentElement.setAttribute("data-theme", "Light");
    return document.documentElement.setAttribute("data-theme", "dark");
  } else {
    localStorage.setItem("Them", "Light");
    return document.documentElement.setAttribute("data-theme", "Light");
  }
}
ThemCheck();
</script>

<template>
  <template v-if="route.path === '/loginIn'"><RouterView /></template>
  <template v-else>
    <navHud />
  </template>
</template>

<style scoped>
nav {
  display: flex;
  gap: 30px;
}
</style>
