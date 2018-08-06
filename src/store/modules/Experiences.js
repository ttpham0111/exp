function createExperience(state, experience) {
  const i = state.experiences.length
  state.experiences.push(experience)
  state.experienceIdLookup[experience.id] = i
}

export default {
  namespaced: true,

  state: {
    topExperiences: [],
    topExperiencesById: {},

    experiences: [],
    experienceIdLookup: {},
    activityIdLookup: {}
  },

  mutations: {
    top(state, experiences) {
      state.topExperiences = []
      experiences.forEach(experience => {
        state.topExperiences.push(experience)
        state.topExperiencesById[experience.id] = experience
      })
    },

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
