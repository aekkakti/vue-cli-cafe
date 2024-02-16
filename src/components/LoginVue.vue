<script>
import store from "@/store";
import AUTH_REQUEST from "@/store/index.js";
export default {
  data() {
    return {
      login: "",
      password: "",
    }
  },
  methods: {
    login() {
      const userData = {
        login: this.login,
        password: this.password,
      }
    }
  }
}
</script>
<template></template>
<style scoped></style>
