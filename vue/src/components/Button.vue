<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import { defineEmits } from "vue";

const emit = defineEmits(["messageSent"]); // Определение события

function sendMessage() {
  emit("messageSent", "Привет от ребенка!", "123"); // Отправка события с данными
}
</script>

<template>
  <button @click="sendMessage">Отправить сообщение</button>
</template>

<style scoped>
h1 {
  font-size: 30px;
  color: green;
}
</style>
