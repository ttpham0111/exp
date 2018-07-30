export default {
  namespaced: true,

  state: {
    initialized: false,
    experiences: [],
    experienceIdLookup: {},
    eventIdLookup: {}
  },

  mutations: {
    init(state) {
      state.initialized = true
    },

    create(state, experience) {
      state.experiences.push(experience)
      state.experienceIdLookup[experience.id] = experience
    },

    addEvent(state, experienceId, event) {
      state.experienceIdLookup[experienceId].events.push(event)
      state.eventIdLookup[event.id] = event
    }
  }
}
