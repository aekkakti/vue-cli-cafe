<template>
  <nav>
    <router-link to="/">Главная | </router-link>
    <router-link to="/login" v-if="!this.$store.getters.isAuthenticated">Авторизация | </router-link>
    <router-link to="/user" v-if="this.$store.getters.isAuthenticated">Регистрация | </router-link>
    <router-link to="/work-shift" v-if="this.$store.getters.isAuthenticated">Смены | </router-link>
    <router-link to="/order" v-if="this.$store.getters.isAuthenticated">Добавление заказа | </router-link>
    <router-link to="/logout" v-if="this.$store.getters.isAuthenticated">Выход | </router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script setup></script>
