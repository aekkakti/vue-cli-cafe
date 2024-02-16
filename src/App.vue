<template>
  <nav>
    <router-link to="/">Главная</router-link> |
    <router-link to="/login">Авторизация </router-link> |
    <router-link to="/user">Регистрация </router-link> |
    <router-link to="/work-shift">Добавление смены </router-link> |
    <router-link to="/order">Добавление заказа </router-link> |
    <router-link to="/logout">Выход </router-link> |
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
