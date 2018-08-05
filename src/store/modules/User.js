export default {
  namespaced: true,

  state: {
    user: null
  },

  mutations: {
    set(state, user) {
      state.user = user
    }
  }
}
