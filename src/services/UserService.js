import Vue from 'vue'
import firebase from 'firebase/app'
import 'firebase/auth'
import firebaseui from 'firebaseui'

import router from '@/router'
import store from '@/store'
import { User } from '@/models/User'

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
    this.state = store.state.User

    this._initialized = false
    this.returnTo = ''

    // TODO: Fix this hacky authentication
    this.auth.onAuthStateChanged((user) => {
      this._onUserUpdate(user)

      if (user && !this._initialized) {
        router.push(this.returnTo || {'name': 'Explore'})
      }
      this._initialized = true
    })

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
    const self = this
    const anonymousUser = this.auth.currentUser

    this._ui.start(el, {
      autoUpgradeAnonymousUsers: true,
      signInSuccessUrl: router.resolve({name: 'Explore'}).href,
      signInOptions: [
        firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],

      callbacks: {
        signInSuccessWithAuthResult(authResult, redirectUrl) {
          self._onUserUpdate(authResult.user)
          router.push({'name': 'Explore'})
          return false
        },

        signInFailure(err) {
          if (err.code !== 'firebaseui/anonymous-upgrade-merge-conflict') {
            return Promise.resolve()
          }

          return self.auth.signInWithCredential(err.credential)
            .then(() => anonymousUser.delete())
            .then(() => router.push({'name': 'Explore'}))
        }
      }
    })
  }

  get() {
    return this.state.user
  }

  getAuthHeader(headers) {
    headers = headers || {}
    return this.auth.currentUser.getIdToken(true)
      .then(idToken => {
        headers.Authorization = 'Bearer ' + idToken
        return headers
      })
  }

  logout() {
    this.auth.signOut()
    router.push({name: 'Explore'})
  }

  _onUserUpdate(user) {
    store.commit('User/set', user && new User(user))
  }
}

const service = new UserService()
Vue.use(service)

export default service
