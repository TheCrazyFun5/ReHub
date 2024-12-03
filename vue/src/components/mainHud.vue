<script>
import Logo from "@/components/ui/logo.vue";
import themesButton from "@/components/ui/themesButton.vue";

export default {
  components: {
    Logo,
    themesButton,
  },
};
</script>

<template>
  <div class="mainHud">
    <nav class="nav">
      <div class="topContent">
        <Logo />
        <themesButton />
      </div>
      <div class="centerContent">
        <div class="navButtons">
          <RouterLink to="/">Главная</RouterLink>
          <RouterLink to="/shift">Мои Смены</RouterLink>
          <RouterLink to="/chats">Сообщения</RouterLink>
          <button>IT-Отдел</button>
        </div>
      </div>
    </nav>
    <main>
      <h2>up</h2>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.mainHud {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  column-gap: 40px;
}

.nav {
  height: 100vh;
  width: 18.7vw;
  padding: 40px 30px;
  box-shadow: 0px 0px 11.7px var(--MainShadowColor);
}

.topContent {
  display: flex;
  justify-content: space-between;
}

.centerContent {
  margin-top: 40px;
}

.navButtons {
  display: flex;
  flex-direction: column;
}

h2 {
  font-size: 30px;
  color: yellow;
  border: 1px solid yellow;
  width: 100%;
}
</style>
