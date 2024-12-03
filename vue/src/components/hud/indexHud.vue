<script>
import burgerMenu from "@/components/hud/burgerMenu.vue";
import topMenu from "@/components/hud/topMenu.vue";

export default {
  components: {
    burgerMenu,
    topMenu,
  },
};
</script>

<template>
  <div class="mainHud">
    <burgerMenu />
    <topMenu />
    <RouterView />
  </div>
</template>

<style scoped></style>
