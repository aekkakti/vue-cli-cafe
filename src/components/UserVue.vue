<script>
import store from "@/store"

import {mapGetters} from "vuex";
export default {
  data() {
    return {
      name: null,
      login: null,
      password: null,
      photo_file: null,
      role_id: null
    }
  },
  computed: {
    ...mapGetters(['getUsers']),
    users() {
      return this.getUsers;
    }
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
    },
  },
  mounted() {
    this.$store
        .dispatch('USERS_REQUEST')
  }
}
</script>

<template>
<form class="registerUser" @submit.prevent="register" enctype="multipart/form-data" method="POST">
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

  <h2>Все работники:</h2>
    <div class="cards" v-for="user in users">
      <div v-for="userData in user">
        <div class="card">
          <h3>Имя: {{ userData.name }}</h3>
          <p>Логин: {{ userData.login }}</p>
          <p>Роль: {{ userData.group }}</p>
        </div>
      </div>
    </div>
</template>

<style scoped>

.registerUser {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 250px;
}

.cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 100px;
}

.card {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  flex-direction: column;
  border: 2px solid black
}
</style>