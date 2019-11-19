import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAutenticated: false,
    isSubscribed: false,
    error: false
  },
  mutations: {
    ACTUALIZA_USUARIO (state, payload){
      state.isAutenticated = payload.isAutenticated,
      state.isSubscribed = payload.isSubscribed,
      state.error = payload.error
    }
  },
  actions: {

  }
})