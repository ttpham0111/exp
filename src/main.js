// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VAvatar,
  VBtn,
  VCard,
  VChip,
  VCombobox,
  VDatePicker,
  VDivider,
  VFooter,
  VGrid,
  VIcon,
  VJumbotron,
  VList,
  VMenu,
  VNavigationDrawer,
  VSnackbar,
  VSubheader,
  VSwitch,
  VTabs,
  VTextarea,
  VTextField,
  VTimePicker,
  VToolbar,
  transitions
} from 'vuetify'
import { Ripple } from 'vuetify/es5/directives'
import 'vuetify/src/stylus/app.styl'
import VeeValidate from 'vee-validate'
import Vue2Filters from 'vue2-filters'
import 'firebaseui/dist/firebaseui.css'

import App from '@/App'
import router from '@/router'

import UserService from '@/services/UserService'
import ExperiencesService from '@/services/ExperiencesService'
import ActivitiesService from '@/services/ActivitiesService'

Vue.use(Vuetify, {
  components: {
    VApp,
    VAvatar,
    VBtn,
    VCard,
    VChip,
    VCombobox,
    VDatePicker,
    VDivider,
    VFooter,
    VGrid,
    VIcon,
    VJumbotron,
    VList,
    VMenu,
    VNavigationDrawer,
    VSnackbar,
    VSubheader,
    VSwitch,
    VTabs,
    VTextarea,
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
  activitiesService: ActivitiesService,
  userService: UserService,
  components: { App },
  template: '<App/>'
})
