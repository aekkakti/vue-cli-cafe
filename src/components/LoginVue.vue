<script>
import store from "@/store";
export default {
  data() {
    return {
      login: "",
      password: "",
    };
  },
  methods: {
    loginAccount() {
      const userData = {
        login: this.login,
        password: this.password,
      };
      this.$store.dispatch('AUTH_REQUEST', userData)
          .then(()=> this.$router.push("/"));
    },
  },
};
</script>

<template>
  <form class="loginForm" @submit.prevent="loginAccount">
    <h2>Авторизация</h2>
    <label>Логин</label>
    <input type="text" required v-model="login" /><br>
    <label>Пароль</label>
    <input type="password" required v-model="password" /> <br>
    <button type="submit">Войти</button>
  </form>
</template>

<style scoped>

.loginForm {
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 0 auto;
}
</style>
