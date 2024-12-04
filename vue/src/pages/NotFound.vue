<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <h1>404 {{ route.path }}</h1>
</template>

<style scoped>
h1 {
  font-size: 30px;
  color: green;
}
</style>
