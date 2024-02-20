<script>

import {mapGetters} from "vuex";
import {removeUserRequest, viewUser} from "@/utils/api";
export default {
  data() {
    return {
      name: null,
      login: null,
      password: null,
      photo_file: null,
      role_id: null,
      showModal: false
    }
  },
  computed: {
    ...mapGetters(['getUsers', 'getUser']),
    users() {
      return this.getUsers;
    },
    user() {
      return this.getUser;
    }
  },
  methods: {
    viewUser,
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
          <p>Должность: {{ userData.group }}</p>
          <!-- Дописать событие на клик  -->
          <button class="getInfo" v-on:click="showModal = true" @click="viewUser(userData.id)">Инфо о сотруднике</button><br><br>
          <button class="removeWorker" @click="removeUserRequest(userData.id)" v-if="userData.status !== 'fired'">Уволить сотрудника</button>
          <h2 v-if="userData.status === 'fired'">Уволен</h2>
        </div>
      </div>
      <div id="myDropdown" class="modal-container" v-if="showModal">
        <p>Идентификатор: {{ user.id }}</p>
        <p>Имя: {{ user.name }}</p>
        <p>Логин {{ user.login }}</p>
        <p>Роль: {{ user.group }}</p>
        <button @click="showModal = false">Закрыть</button>
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

.getInfo {
  background-color: #5475d3;
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

.getInfo:hover {
  background-color: #1f348f;
  color: white;
  cursor: pointer;
}

.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  gap: 30px;
  flex-direction: column;
  color: aliceblue
}


</style>