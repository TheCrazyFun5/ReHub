<script>
import srcImgDark from "@/assets/img/buttonThemDark.svg";
import srcImgLight from "@/assets/img/buttonThemLight.svg";

export default {
  data() {
    return {
      imgSrc: srcImgDark,
    };
  },
  methods: {
    ThemCheck() {
      const ThemName = localStorage.getItem("Them");
      if (ThemName) {
        if (ThemName === "Light") return (this.imgSrc = srcImgDark);
        return (this.imgSrc = srcImgLight);
      } else {
        localStorage.setItem("Them", "Light");
        return (this.imgSrc = srcImgDark);
      }
    },
    changingThem() {
      const ThemName = localStorage.getItem("Them");
      if (ThemName === "Light") {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("Them", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "Light");
        localStorage.setItem("Them", "Light");
      }
      this.imgSrc = this.ThemCheck();
    },
  },
  created() {
    this.ThemCheck();
  },
};
</script>

<template>
  <button @click="changingThem()" className="themesButton"><img :src="imgSrc" alt="" /></button>
</template>

<style scoped>
.themesButton {
  background-color: transparent;
}
</style>
