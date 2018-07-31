import { User } from '@/models/User'

export default {
  namespaced: true,

  state: {
    user: new User()
  },

  mutations: {
    set(state, user) {
      state.user = user
    }
  }
}
