// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VBtn,
  VCard,
  VChip,
  VCombobox,
  VDivider,
  VFooter,
  VGrid,
  VIcon,
  VList,
  VNavigationDrawer,
  VSnackbar,
  VStepper,
  VSubheader,
  VSwitch,
  VTabs,
  VTextField,
  VTimePicker,
  VToolbar,
  transitions
} from 'vuetify'
import { Ripple } from 'vuetify/es5/directives'
import 'vuetify/src/stylus/app.styl'
import VeeValidate from 'vee-validate'
import Vue2Filters from 'vue2-filters'

import App from '@/App'
import router from '@/router'

import ExperiencesService from '@/services/ExperiencesService'

Vue.use(Vuetify, {
  components: {
    VApp,
    VBtn,
    VCard,
    VChip,
    VCombobox,
    VDivider,
    VFooter,
    VGrid,
    VIcon,
    VList,
    VNavigationDrawer,
    VSnackbar,
    VStepper,
    VSubheader,
    VSwitch,
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
Vue.use(VeeValidate)
Vue.use(Vue2Filters)

Vue.config.productionTip = process.env.NODE_ENV !== 'production'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  experiencesService: ExperiencesService,
  components: { App },
  template: '<App/>'
})
