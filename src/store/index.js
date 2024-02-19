import {createStore} from "vuex";
import {loginRequest, logoutRequest, registerRequest, addOrderRequest} from "@/utils/api";

export default createStore({
    state: {
        token: localStorage.getItem('myAppToken') || '',
        userInfoArray: [],
        orders: []
    },
    getters: {
        isAuthenticated: (state) => !!state.token,
        registerUser: state => state.orders
    },
    mutations: {
        AUTH_SUCCESS: (state, token) => {
            state.token = token
        },
        AUTH_ERROR: (state) => {
            state.token = ""
        },
        LOGOUT_SUCCESS: (state) => {
            state.token = ""
        },
        LOGOUT_ERROR: (state, token) => {
            state.token = token
        },
        // переделать добавление пользователя
        REGISTER_SUCCESS: (state, userInfoArray) => {
            state.userInfoArray = userInfoArray
        },
        REGISTER_ERROR: (state) => {
            state.userInfoArray = ""
        },
        ADD_ORDER_SUCCESS: (state, orders) => {
            state.orders.push(...orders)
        },
        ADD_ORDER_ERROR: (state) => {
            state.orders = ""
        }
    },
    actions: {
        AUTH_REQUEST({commit}, user) {
            return new Promise((resolve, reject) => {
                loginRequest(user)
                    .then((token) => {
                        commit('AUTH_SUCCESS', token);
                        localStorage.setItem('myAppToken', token);
                        resolve();
                    })
                    .catch((error) => {
                        commit('AUTH_ERROR');
                        localStorage.removeItem('myAppToken')
                        reject(error);
                    });
            })
        },
        LOGOUT_REQUEST: ({commit}, user) => {
            return new Promise((resolve, reject) => {
                logoutRequest(user)
                    .then((token) => {
                        commit('LOGOUT_SUCCESS', token);
                        localStorage.removeItem('myAppToken');
                        resolve();
                    })
                    .catch(() => {
                        commit('LOGOUT_ERROR')
                        reject()
                    })
            })
        },
        REGISTER_REQUEST({commit}, user) {
            return new Promise ((resolve, reject) => {
                registerRequest(user)
                    .then((token) => {
                        commit('REGISTER_SUCCESS', token);
                        localStorage.setItem('myAppToken', token);
                        resolve();
                    })
                    .catch(() => {
                        commit('REGISTER_ERROR')
                        reject()
                    })
            })
        },
        ADD_ORDER_REQUEST( {commit}) {
            return new Promise((resolve, reject) => {
                addOrderRequest()
                    .then((orders) => {
                        commit('ADD_ORDER_REQUEST', orders)
                        localStorage.setItem('orders', orders)
                        resolve()
                    })
                    .catch((error) => {
                        commit('ADD_ORDER_ERROR')
                        reject(error)
                    })
            })
        }
    },
    modules: {},
});
