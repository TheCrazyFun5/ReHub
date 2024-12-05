<script>
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
      login: "",
      password: "",
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
        <div class="inputBox">
          <mainInput paceholder="Логин" id="Login" @back="(value) => (login = value)" />
          <mainInput type="Password" paceholder="Пароль" id="Password" @back="(value) => (password = value)" />
        </div>
      </div>
    </main>
    <footer className="footer__loginIn"><themesButton /> <Logo /> <br /></footer>
  </section>
</template>

<style scoped>
section.loginIn {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.footer__loginIn {
  display: flex;
  justify-content: space-between;
  padding-left: 23px;
  padding-bottom: 20px;
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.formLogin {
  max-width: 580px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  font-size: 60px;
  text-align: center;
  line-height: 66px;
}
.inputBox {
  max-width: 350px;
  margin-top: 70px;
  width: 100%;
  display: flex;
  gap: 25px;
  flex-direction: column;
}
</style>
