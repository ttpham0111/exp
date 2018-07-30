import axios from 'axios'
import Vue from 'vue'

import store from '@/store'
import { Experience } from '@/models/Experience'
import { NoResultError } from '@/services/errors'

class ExperiencesService {
  constructor() {
    this.state = store.state.Experiences
  }

  install(V, options) {
    V.mixin({
      beforeCreate() {
        const options = this.$options
        if (options.experiencesService) {
          this.$experiencesService = options.experiencesService
        } else if (options.parent && options.parent.$experiencesService) {
          this.$experiencesService = options.parent.$experiencesService
        }
      }
    })
  }

  get(refresh) {
    if (refresh || !this.state.initialized) {
      return axios.get('/api/experiences/mine')
        .then(res => {
          return res.data
        })
        .then(experiences => {
          experiences.forEach(experience => {
            store.commit('Experiences/create', new Experience(experience))
          })

          if (!this.state.initialized) store.commit('Experiences/init')
          return this.state.experiences
        })
    } else {
      return new Promise((resolve, reject) => {
        resolve(this.state.experiences)
      })
    }
  }

  getId(experienceId) {
    if (this.state.experienceIdLookup.hasOwnProperty(experienceId)) {
      return new Promise((resolve, reject) => {
        resolve(this.state.experienceIdLookup[experienceId])
      })
    } else {
      return this.get(true)
        .then(() => {
          if (this.state.experienceIdLookup.hasOwnProperty(experienceId)) {
            return this.state.experienceIdLookup[experienceId]
          } else {
            throw new NoResultError(experienceId)
          }
        })
    }
  }

  create(experience) {
    return axios.post('/api/experiences', experience)
      .then(res => {
        return res.data
      })
      .then(experience => {
        experience = new Experience(experience)
        store.commit('Experiences/create', experience)
        return experience
      })
  }
}

const service = new ExperiencesService()
Vue.use(service)

export default service
