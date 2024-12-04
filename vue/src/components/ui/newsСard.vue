<script>
export default {
  data() {
    return {
      tag: false,
    };
  },
  props: {
    data1: {
      type: Object,
      default: { title: "title", date: "2.12.2024", minText: "Описание", maxText: "Описание" },
    },
  },
  created() {
    let dateNewstemp = this.data1.date;
    let dateNews = dateNewstemp.split(".");
    let newDate = new Date();
    if (newDate.getFullYear() === Number(dateNews[2])) {
      if (newDate.getMonth() + 1 === Number(dateNews[1])) {
        if (newDate.getDate() === Number(dateNews[0]) || newDate.getDate() - 1 === Number(dateNews[0])) {
          this.tag = true;
        }
      }
    }
  },
};
</script>
<template>
  <div class="card">
    <div v-if="tag" class="card__teg-new"><p>Новое</p></div>
    <div class="card__content" :class="{ card__contentPading: !tag }">
      <header class="card__header">
        <h3>{{ data1.title }}</h3>
      </header>

      <main class="card__text">
        <p v-html="data1.minText"></p>
      </main>
      <footer class="card__footer">
        <h4>Дата публикации: {{ data1.date }}</h4>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 0px 0px 6.4px rgb(124, 124, 124, 25%);
  background-color: transparent;
  width: 23.125vw;
  min-width: 374.391px;
  border-radius: 10px;
  color: var(--ColorTextCart);
  .card__teg-new {
    position: relative;
    width: 23.125vw;
    display: flex;
    justify-content: flex-end;
    min-width: 374.391px;
    padding-bottom: 5px;
    > p {
      padding: 7px 29px;
      background-color: rgb(255, 21, 95, 45%);
      max-width: max-content;
      font-size: 16px;
      font-weight: 700;
      border-radius: 0px 10px;
      color: var(--ColorTextCartTag);
    }
  }
  .card__text {
    font-size: 20px;
    font-weight: 400;
    line-height: 21px;
  }
  .card__footer {
    text-align: end;
    font-size: 14px;
    font-weight: 400;
    color: #7c7c7c;
  }
}
.card__content {
  flex-grow: 1;
  padding: 0px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  .card__header {
    text-align: center;
    font-size: 24px;
    font-weight: 500;
  }
}

.card__contentPading {
  padding-top: 30px;
}
</style>
