<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import hud from "@/components/hud/indexHud.vue";
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <template v-if="route.path === '/loginIn'"><RouterView /></template>
  <div v-else>
    <hud />
  </div>
</template>

<style scoped>
nav {
  display: flex;
  gap: 30px;
}
</style>
