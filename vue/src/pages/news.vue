<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import buttom from "@/components/Button.vue";

function handleMessage(msg, l) {
  console.log("Сообщение от ребенка:", msg, l);
}
</script>

<template>
  <h1>news</h1>
  <buttom @messageSent="handleMessage" />
</template>

<style scoped>
h1 {
  font-size: 30px;
  color: green;
}
</style>
