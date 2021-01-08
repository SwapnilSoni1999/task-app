import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuth: false,
    currUser: {},
    currRoute: {
      name: 'Login',
      path: '/login'
    }
  },
  mutations: {
    AUTH(state, bool) {
      state.isAuth = bool
    },
    CURR_USER(state, user) {
      state.currUser = user
    }
  },
  actions: {
    authenticate({ commit }, user) {
      commit('AUTH', true)
      commit('CURR_USER', user)
    },
    logout({ commit }) {
      commit('AUTH', false)
      commit('CURR_USER', {})
    }
  },
  getters: {
    isAuth(state) {
      return state.isAuth
    },
    currUser(state) {
      return state.currUser
    }
  },
  modules: {
  }
})
