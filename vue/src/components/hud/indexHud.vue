<script setup>
import burger from "@/components/hud/burger.vue";
import up from "@/components/hud/upHud.vue";
</script>

<template>
  <div className="hud">
    <burger />
    <div className="up__and__content">
      <up />
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 30px;
  color: green;
}
.hud {
  display: flex;
}
.up__and__content {
  width: 100%;
}
</style>
