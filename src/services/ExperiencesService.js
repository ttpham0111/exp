import store from '@/store'

class ExperiencesService {
  get() {
    return store.state.Experiences.experiences
  }

  getEvents(experienceId) {
    const experience = this.get().find(experience => experience.id === experienceId)
    return experience ? experience.events : []
  }

  create(experience) {
    store.commit('Experiences/create', experience)
  }
}

export default new ExperiencesService()
