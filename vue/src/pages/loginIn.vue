<script>
// import HelloWorld from './components/HelloWorld.vue'
import themesButton from "@/components/ui/themesButton.vue";
import Logo from "@/components/ui/logo.vue";
import mainInput from "@/components/ui/mainInput.vue";
export default {
  components: {
    Logo,
    mainInput,
    themesButton,
  },
  data() {
    return {
      text: "",
      test2: "",
    };
  },
  methods: {},
};
</script>

<template>
  <section className="loginIn">
    <br />
    <main>
      <div className="formLogin">
        <h2 class="title mainColorText">Добро пожаловать 👋</h2>
        <mainInput id="UserName" @hop="(ino) => (test2 = ino)" />
        <mainInput paceholder="Логин" id="UserName" @hop="(ino) => (text = ino)" />

        <p>1{{ text }}2{{ test2 }}</p>
      </div>
    </main>
    <footer className="footer__loginIn"><themesButton /> <Logo /> <br /></footer>
  </section>
</template>

<style scoped>
.loginIn {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.footer__loginIn {
  display: flex;
  justify-content: space-between;
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.formLogin {
  max-width: 568px;
  display: flex;
  flex-direction: column;
}
.title {
  font-size: 60px;
  text-align: center;
  line-height: 66px;
}
</style>
