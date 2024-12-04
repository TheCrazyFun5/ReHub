<script>
import logo from "@/assets/img/logo.svg";

export default {
  data() {
    return {
      srcLogo: logo,
    };
  },
};
</script>

<template>
  <div class="Logo"><img :src="srcLogo" alt="" /><span>ReHub</span></div>
</template>

<style scoped></style>
