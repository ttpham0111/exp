import axios from 'axios'
import Vue from 'vue'

import { Activity } from '@/models/Activity'

class ActivitiesService {
  install(V, options) {
    V.mixin({
      beforeCreate() {
        const options = this.$options
        if (options.activitiesService) {
          this.$activitiesService = options.activitiesService
        } else if (options.parent && options.parent.$activitiesService) {
          this.$activitiesService = options.parent.$activitiesService
        }
      }
    })
  }

  find(query) {
    return axios.get('/api/activities', {params: query})
      .then((res) => res.data)
      .then(activities => {
        return activities.map(act => new Activity(act))
      })
  }
}

const service = new ActivitiesService()
Vue.use(service)

export default service
