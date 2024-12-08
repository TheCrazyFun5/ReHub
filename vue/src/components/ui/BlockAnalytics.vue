<script>
export default {
  props: {
    textChange: {
      type: String,
      Required: true,
    },
    maininfoChange: {
      type: String,
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
      <img :src="imgChange" alt="My img" />
    </header>
    <div class="mainInfocard">{{ maininfoChange }}</div>
    <div class="discriptionsCard">{{ discriptChange }}</div>
  </div>
</template>

<style scoped>
.mainBlock {
  max-width: 400px;
  max-height: 246px;
  width: 100%;
  height: 100%;
  margin: 9px;
  background-color: #ffffff;
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
  color: #1c1c1c;
  margin-bottom: 18px;
}

.discriptionsCard {
  font-size: 25px;
  color: #7c7c7c;
  margin-top: 10px;
}

.mainInfocard {
  font-size: 90px;
  color: #1c1c1c;
}
</style>
