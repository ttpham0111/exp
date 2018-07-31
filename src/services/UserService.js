import Vue from 'vue'
import firebase from 'firebase/app'
import 'firebase/auth'
import firebaseui from 'firebaseui'

import router from '@/router'

firebase.initializeApp({
  apiKey: 'AIzaSyBUHHh762mAMFQ5kZiW0zIsPQn-JF4acYw',
  authDomain: 'exp-el.firebaseapp.com',
  databaseURL: 'https://exp-el.firebaseio.com',
  projectId: 'exp-el',
  storageBucket: '',
  messagingSenderId: '377869263120'
})

class UserService {
  constructor() {
    this.auth = firebase.auth()
    this.auth.signInAnonymously()

    this._ui = new firebaseui.auth.AuthUI(this.auth)
  }

  install(V, options) {
    V.mixin({
      beforeCreate() {
        const options = this.$options
        if (options.userService) {
          this.$userService = options.userService
        } else if (options.parent && options.parent.$userService) {
          this.$userService = options.parent.$userService
        }
      }
    })
  }

  startUI(el) {
    this._ui.start(el, {
      autoUpgradeAnonymousUsers: true,
      signInSuccessUrl: router.resolve({name: 'Experience'}).href,
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],

      callbacks: {
        signInSuccessWithAuthResult(authResult, redirectUrl) {
          router.push({'name': 'Experience'})
          return false
        },

        signInFailure(err) {
          if (err.code !== 'firebaseui/anonymous-upgrade-merge-conflict') {
            return Promise.resolve()
          }
          // TODO: Resolve merge conflict
        }
      }
    })
  }

  get() {
    return this.auth.currentUser
  }
}

const service = new UserService()
Vue.use(service)

export default service
