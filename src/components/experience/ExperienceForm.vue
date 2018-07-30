<template>
  <v-layout wrap>
    <v-flex xs12 md6
      v-show="activeTab === TAB_EXPERIENCE_FORM"
    >
      <experience-form-experience
        :experience="experience"
        :show-next="showNext"
        @submit="onSubmitExperienceForm"
        @next="goToEventsForm"
        @error="display"
      />
    </v-flex>

    <v-flex xs12 md6
      v-if="experience"
      v-show="!showNext || activeTab === TAB_EVENTS_FORM"
    >
      <experience-form-events
        :experience="experience"
        @back="goToExperienceForm"
        @error="display"
      />
    </v-flex>


    <v-snackbar
      v-model="showSnackbar"
      :timeout="4000"
      top
    >
      {{ snackbarText }}
      <v-btn
        dark
        flat
        @click="showSnackbar = false"
      >
        Dismiss
      </v-btn>
    </v-snackbar>
  </v-layout>
</template>

<script>
import ExperienceFormExperience from '@/components/experience/ExperienceFormExperience'
import ExperienceFormEvents from '@/components/experience/ExperienceFormEvents'
import { NoResultError } from '@/services/errors'

const TAB_EXPERIENCE_FORM = 0
const TAB_EVENTS_FORM = 1

export default {
  components: {
    ExperienceFormExperience,
    ExperienceFormEvents
  },

  props: {
    experienceId: String
  },

  data() {
    return {
      loading: false,
      experience: null,

      snackbarText: '',
      showSnackbar: false,

      TAB_EXPERIENCE_FORM: TAB_EXPERIENCE_FORM,
      TAB_EVENTS_FORM: TAB_EVENTS_FORM,
      activeTab: TAB_EXPERIENCE_FORM
    }
  },

  computed: {
    showNext() {
      return this.experienceId && this.$vuetify.breakpoint.xsOnly
    }
  },

  created() {
    if (this.experienceId) this.getExperience()
  },

  watch: {
    $route() {
      if (this.experienceId) this.getExperience()
    }
  },

  methods: {
    display(msg) {
      this.snackbarText = msg
      this.showSnackbar = true
    },

    goToExperienceForm() {
      this.activeTab = TAB_EXPERIENCE_FORM
    },

    goToEventsForm() {
      this.activeTab = TAB_EVENTS_FORM
    },

    getExperience() {
      return this.$experiencesService.getId(this.experienceId)
        .then(experience => {
          this.experience = experience
        })
        .catch(err => {
          if (err instanceof NoResultError) {
            this.display('Experience not found')
            this.$router.go(-1)
          }
          throw err
        })
    },

    onSubmitExperienceForm(form) {
      return this.$experiencesService.create(form)
        .then(experience => {
          this.$router.push({
            name: 'ExperienceFormEdit',
            params: {experienceId: experience.id}
          })
        })
    }
  }
}
</script>
