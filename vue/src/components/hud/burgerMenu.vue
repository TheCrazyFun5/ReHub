<script>
// import HelloWorld from './components/HelloWorld.vue'
import Logo from "@/components/ui/logo.vue";
import themesButton from "@/components/ui/themesButton.vue";
import burgerButton from "@/components/ui/burgerButton.vue";

export default {
  components: {
    Logo,
    themesButton,
    burgerButton,
  },
};
</script>

<template>
  <div class="burgerMenu">
    <Logo />
    <themesButton />
    <RouterLink to="/"
      ><burgerButton
        srcIcon="https://fresco.wallset.ru/images/detailed/1208/3086.jpg"
    /></RouterLink>
  </div>
</template>

<style scoped></style>
