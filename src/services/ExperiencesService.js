import axios from 'axios'
import Vue from 'vue'

import store from '@/store'
import { Experience } from '@/models/Experience'
import { NoResultError } from '@/services/errors'

class ExperiencesService {
  constructor() {
    this.state = store.state.Experiences
    this.initialized = false
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
    if (refresh || !this.initialized) {
      return axios.get('/api/experiences/mine')
        .then(res => {
          return res.data
        })
        .then(experiences => {
          experiences = experiences.map(exp => new Experience(exp))
          store.commit('Experiences/refresh', experiences)
          this.initialized = true
          return this.state.experiences
        })
    } else {
      return Promise.resolve(this.state.experiences)
    }
  }

  getId(experienceId) {
    if (this.state.experienceIdLookup.hasOwnProperty(experienceId)) {
      return Promise.resolve(this.state.experienceIdLookup[experienceId])
    } else {
      return this.get()
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
