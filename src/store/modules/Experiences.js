function createExperience(state, experience) {
  const i = state.experiences.length
  state.experiences.push(experience)
  state.experienceIdLookup[experience.id] = i
}

export default {
  namespaced: true,

  state: {
    experiences: [],
    experienceIdLookup: {},
    activityIdLookup: {}
  },

  mutations: {
    refresh(state, experiences) {
      state.experiences = []
      experiences.forEach(experience => createExperience(state, experience))
    },

    create(state, experience) {
      createExperience(state, experience)
    },

    update(state, {id, experience}) {
      const i = state.experienceIdLookup[id]
      state.experiences[i] = experience
    }
  }
}
