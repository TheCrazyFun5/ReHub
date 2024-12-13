<script>
// import HelloWorld from './components/HelloWorld.vue'
import newsСard from "@/components/ui/newsСard.vue";
import axios from "axios";

export default {
  components: {
    newsСard,
  },
  data() {
    return {
      news: [],
      currentTime: new Date(),
    };
  },
<<<<<<< HEAD
<<<<<<< HEAD
  created() {},
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 3551408 (исправил ошибки слияния от Димы)
  created() {
    axios
      .get("/api/news/getNews")
      .then((response) => {
        this.news = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
>>>>>>> 5b1e082 (logout)
  mounted() {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  },
<<<<<<< HEAD
>>>>>>> 11b46e5 ([Server + Date])
=======
>>>>>>> 3551408 (исправил ошибки слияния от Димы)
};
</script>

<template>
  <div>
    <h1>Объявления компании</h1>
    <div class="news">
      <ul class="news_list">
        <li v-for="item in news" :key="item.id">
          <newsСard :dataItem="item" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 48px;
  color: var(--HeaderСolor);
}
.news {
  margin-top: 35px;
}
.news_list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 2px;
}
</style>
