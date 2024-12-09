<script>
import image from "@/assets/img/calendar.svg";
import clock from "@/assets/img/clock.svg";
import blockAnalitick from "@/components/ui/blockAnalytics.vue";
export default {
  components: { blockAnalitick },
  data() {
    return {
      image,
      clock,
    };
  },
};
</script>

<template>
  <div class="firstBlock">
    <blockAnalitick textChange="Всего смен" maininfoChange="10" discriptChange="В этом месяце: 2" :imgChange="image" />
    <blockAnalitick
      :imgChange="clock"
      textChange="Часов за месяц"
      maininfoChange="72"
      discriptChange="В этом месяце: 10"
    />
  </div>
</template>

<style scoped>
.firstBlock {
  display: flex;
  gap: 30px;
}
</style>
