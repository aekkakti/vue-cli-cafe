<script>
import store from "@/store"
import REGISTER_REQUEST from "@/store/index"
import {mapGetters} from "vuex";
export default {
  data() {
    return {
      name: "",
      login: "",
      password: "",
      photo_file: "",
      role_id: null
    }
  },
  computed: {
    ...mapGetters['userInfoArray'],
    userInfoArray() {
      return this.userInfoArray
    },
  },
  methods: {
    register() {
      const User = {
        name: this.name,
        login: this.login,
        password: this.password,
        photo_file: this.photo_file,
        role_id: this.role_id
      }

      this.$store
          .dispatch('REGISTER_REQUEST', User)
          .then(() => this.$router.push("/"));
    }
  }
}
</script>

<template>
<form class="registerUser" @submit.prevent="register">
  <h2>Добавление нового сотрудника</h2>
  <label for="name">Имя</label><br>
  <input type="text" required v-model="name"/><br>
  <label for="login">Логин</label><br>
  <input type="text" required v-model="login"/><br>
  <label for="password">Пароль</label><br>
  <input type="password" required v-model="password"/><br>
  <label for="photo">Фото</label><br>
  <input type="file" v-on:change="photo_file"/><br>
  <label for="selectRole">Роль</label><br>
  <select v-model="role_id">
      <option value="1">Администратор</option>
      <option value="2">Официант</option>
      <option value="3">Повар</option>
  </select><br>
  <button type="submit">Отправить</button><br>
  <button type="reset">Отмена</button><br>

</form>
</template>

<style scoped>

.registerUser {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 250px;
}
</style>