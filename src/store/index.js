import Vue from 'vue'
import Vuex from 'vuex'

import Experiences from '@/store/modules/Experiences'

Vue.use(Vuex)

export default new Vuex.Store({
  debug: process.env.NODE_ENV !== 'production',
  strict: process.env.NODE_ENV !== 'production',

  modules: {
    Experiences
  }
})
