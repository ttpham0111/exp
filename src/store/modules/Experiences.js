function createExperience(state, experience) {
  state.experiences.push(experience)
  state.experienceIdLookup[experience.id] = experience
}

export default {
  namespaced: true,

  state: {
    experiences: [],
    experienceIdLookup: {},
    eventIdLookup: {}
  },

  mutations: {
    refresh(state, experiences) {
      state.experiences = []
      experiences.forEach(experience => createExperience(state, experience))
    },

    create(state, experience) {
      createExperience(state, experience)
    },

    addEvent(state, experienceId, event) {
      state.experienceIdLookup[experienceId].events.push(event)
      state.eventIdLookup[event.id] = event
    }
  }
}
