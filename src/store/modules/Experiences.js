import { Experience } from '@/models/Experience'
import {
  Event,
  EventType
} from '@/models/Event'
import ExperiencesService from '@/services/ExperiencesService'

export default {
  namespaced: true,

  state: {
    experiences: [
      new Experience({
        id: 'sf',
        title: 'San Francisco Trip',
        events: [
          new Event({
            name: 'Enter The Cafe',
            type: EventType.DINING
          })
        ]
      }),

      new Experience({
        id: 'la',
        title: 'Weekend in Los Angelos',
        events: [
          new Event({
            name: 'Sake2Me Sushi',
            type: EventType.DINING
          }),
          new Event({
            name: 'Laguna Beach',
            type: EventType.OTHER
          })
        ]
      })
    ]
  },

  mutations: {
    create(state, experience) {
      state.experiences.push(experience)
    }
  },

  actions: {
    create(context, experience) {
      ExperiencesService.create(experience)
    }
  }
}
