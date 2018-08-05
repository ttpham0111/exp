import Vue from 'vue'
import Router from 'vue-router'

import routes from '@/router/routes'
import UserService from '@/services/UserService'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !UserService.get()) {
    UserService.returnTo = to.fullPath
    next({
      name: 'Auth',
      params: {returnTo: to.fullPath}
    })
  } else next()
})

export default router
