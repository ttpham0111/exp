// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vue2Filters from 'vue2-filters'
import {
  Vuetify,
  VApp,
  VBtn,
  VDivider,
  VForm,
  VGrid,
  VIcon,
  VList,
  VNavigationDrawer,
  VStepper,
  VTabs,
  VTextField,
  VTimePicker,
  VToolbar,
  transitions
} from 'vuetify'
import { Ripple } from 'vuetify/es5/directives'
import 'vuetify/src/stylus/app.styl'

import App from './App'
import router from './router'
import store from './store'

Vue.use(Vuetify, {
  components: {
    VApp,
    VBtn,
    VDivider,
    VForm,
    VGrid,
    VIcon,
    VList,
    VNavigationDrawer,
    VStepper,
    VTabs,
    VTextField,
    VTimePicker,
    VToolbar,
    transitions
  },
  directives: {
    Ripple
  }
})
Vue.use(Vue2Filters)

Vue.config.productionTip = process.env.NODE_ENV !== 'production'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
