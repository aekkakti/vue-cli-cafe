import { createStore } from "vuex";

export default createStore({
  state: {},
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  mutations: {},
  actions: {},
  modules: {},
});
