<script>
import axios from 'axios';
import themesButton from '@/components/ui/ThemesButton.vue';
import Logo from '@/components/ui/Logo.vue';
import mainInput from '@/components/ui/MainInput.vue';
import blueButton from '@/components/ui/BlueButton.vue';
export default {
  components: {
    Logo,
    mainInput,
    themesButton,
    blueButton,
  },
  data() {
    return {
      login: '',
      password: '',
      error: '',
    };
  },
  methods: {
    loginIn() {
      this.error = '';
      if (this.login.length > 1 && this.password.length > 1) {
        axios
          .post('/api/user/loginIn', {
            login: this.login,
            password: this.password,
          })
          .then((response) => {
            if (response.data.success) window.location.href = '/';
            if (response.data.error) this.error = response.data.error;
          })
          .catch((error) => console.error(error));
      }
    },
  },
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
        <blueButton :disabled="login.length < 1 || password.length < 1" @click="loginIn()" class="button">
          Вход
        </blueButton>
        <div class="error">{{ error }}</div>
      </div>
    </main>
    <footer className="footer__loginIn">
      <themesButton />
      <Logo />
      <br />
    </footer>
  </section>
</template>

<style scoped>
.error {
  margin-top: 30px;
  color: rgb(255, 21, 91, 90%);
}
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

.button {
  padding: 15px 80px;
  margin-top: 40px;
}
</style>
