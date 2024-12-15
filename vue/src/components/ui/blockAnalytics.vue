<script>
import imgClock from "../../assets/img/chartAssets/imgClock.vue";
import imgCalendar from "../../assets/img/chartAssets/imgCalendar.vue";
export default {
  components: { imgClock, imgCalendar },
  props: {
    textChange: {
      type: String,
      Required: true,
    },
    maininfoChange: {
      type: Object,
      Required: true,
    },
    discriptChange: {
      type: String,
      Required: true,
    },
    imgChange: {
      type: String,
      Required: true,
    },
  },
};
</script>

<template>
  <div class="mainBlock">
    <header>
      <div class="nameTag">{{ textChange }}</div>
      <div><slot /></div>
    </header>
    <div class="mainInfocard">{{ maininfoChange }}</div>
    <div class="discriptionsCard">{{ discriptChange }}</div>
  </div>
</template>

<style scoped>
.mainBlock {
  max-width: 390px;
  max-height: 246px;
  width: 100%;
  height: 100%;
  background-color: transparent;
  padding: 30px 30px 30px 38px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 8px 2px rgba(124, 124, 124, 0.2);
  -moz-box-shadow: 0px 0px 8px 2px rgba(124, 124, 124, 0.2);
  box-shadow: 0px 0px 8px 2px rgba(124, 124, 124, 0.2);
}
header {
  display: flex;
  justify-content: space-between;
}

.nameTag {
  font-size: 40px;
  color: var(--ColorTextCart);
  margin-bottom: 18px;
}

.discriptionsCard {
  font-size: 25px;
  color: #7c7c7c;
  margin-top: 10px;
}

.mainInfocard {
  font-size: 90px;
  color: var(--ColorTextCart);
}
</style>
