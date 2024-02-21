import {createStore} from "vuex";
import {
    loginRequest,
    logoutRequest,
    registerRequest,
    addOrderRequest,
    showWorkShifts,
    openWorkshiftRequest,
    closeWorkshiftRequest,
    viewUsers,
    viewUser
} from "@/utils/api";

export default createStore({
    state: {
        token: localStorage.getItem('myAppToken') || '',
        users: [],
        user: {},
        workshifts: [],
        orders: [],
    },
    getters: {
        isAuthenticated: (state) => !!state.token,
        getWorkshifts: (state) => state.workshifts,
        getUsers: (state) => state.users,
        getUser: (state) => state.user
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
        REGISTER_SUCCESS: (state, user) => {
            state.users.push(user)
        },
        SET_USERS: (state, users) => {
            state.users = users;
        },
        SET_USER: (state, user) => {
            state.user = user;
        },
        REMOVE_USER: (state, userId) => {
            state.users = state.users.filter(user => user.id === userId)
        },
        WORKSHIFT_SHOW: (state, workshifts) => {
            state.workshifts = workshifts
        },
        CLOSE_WORKSHIFT: (state, workshifts) => {
            const index = state.workshifts.map(item => item.id).indexOf(workshifts)
            state.workshifts[index].active = false
        },
        OPEN_WORKSHIFT: (state, workshifts) => {
            const index = state.workshifts.map(item => item.id).indexOf(workshifts)
            state.workshifts[index].active = true
        },
        ADD_ORDER_SUCCESS: (state, orders) => {
            state.orders.push(...orders)
        },
        ADD_ORDER_ERROR: (state) => {
            state.orders = ""
        },
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
            return new Promise ((resolve) => {
                registerRequest(user)
                    .then(() => {
                        commit('REGISTER_SUCCESS', user);
                        resolve();
                    })
            })
        },
        USERS_REQUEST({commit}) {
            return new Promise ((resolve) => {
                viewUsers()
                    .then((token) => {
                        commit('SET_USERS', token);
                        resolve();
                    })
            })
        },
        USER_REQUEST({commit}) {
            return new Promise ((resolve) => {
                viewUser()
                    .then((token) => {
                        commit('SET_USER', token);
                        resolve();
                    })
            })
        },
        WORKSHIFTS_REQUEST ({ commit }) {
            return new Promise((resolve) => {
                showWorkShifts()
                    .then((result) => {
                        commit('WORKSHIFT_SHOW', result)
                        resolve()
                    })
            })
        },
        REMOVE_USER_REQUEST({ commit }) {
            return new Promise((resolve) => {
                showWorkShifts()
                    .then((result) => {
                        commit('REMOVE_USER', result)
                        resolve()
                    })
            })
        },
        OPEN_WORKSHIFT_REQUEST({ commit }) {
            return new Promise ((resolve) => {
                openWorkshiftRequest()
                    .then((result) => {
                        commit('OPEN_WORKSHIFT', result)
                        resolve()
                    })
            })
        },
        CLOSE_WORKSHIFT_REQUEST ({ commit }) {
            return new Promise ((resolve) => {
                closeWorkshiftRequest()
                    .then((result) => {
                        commit('CLOSE_WORKSHIFT', result)
                        resolve()
                    })
            })
        },
        ADD_ORDER_REQUEST( {commit }) {
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
