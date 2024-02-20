<script>
import store from "@/store"

import {mapGetters} from "vuex";
import {removeUserRequest} from "@/utils/api";
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
    removeUserRequest,
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
        .dispatch('USERS_REQUEST', 'REMOVE_USER_REQUEST')
  }
}
</script>

<template>
<form id="registerUser" @submit.prevent="register" enctype="multipart/form-data" method="POST">
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
      <div class="card" v-for="userData in user">
        <div>
          <h3>Имя: {{ userData.name }}</h3>
          <p>Логин: {{ userData.login }}</p>
          <p>Роль: {{ userData.group }}</p>
          <!-- Дописать событие на клик  -->
          <button class="removeWorker" @click="removeUserRequest(userData.id)" v-if="userData.status !== 'fired'">Уволить сотрудника</button>
        </div>
      </div>
    </div>
</template>

<style scoped>

#registerUser {
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
.removeWorker {
  background-color: #f54b4b;
  border: 1px solid black;
  border-radius: 5px;
  transition: .9s;
  color: white;
  width: 300px;
  font-size: 20px;
}

.removeWorker:hover {
  background-color: #ab2424;
  color: white;
  cursor: pointer;
}

</style>