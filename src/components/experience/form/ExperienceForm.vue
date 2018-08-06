<template>
  <v-layout wrap>
    <v-flex xs12 md6
      v-show="activeTab === TAB_EXPERIENCE_FORM"
    >
      <experience-form-experience
        ref="experienceForm"
        :form-data="experience"
        :show-next="showNext"
        @submit="onSubmitExperienceForm"
        @next="goToActivitiesForm"
        @error="display"
      />
    </v-flex>

    <v-flex xs12 md6
      :pl-4="!showNext"
      v-show="!showNext || activeTab === TAB_EVENTS_FORM"
    >
      <experience-form-activities
        v-model="activities"
        :show-prev="showNext"
        @submit="$refs.experienceForm.onSubmit()"
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
import ExperienceFormExperience from '@/components/experience/form/ExperienceFormExperience'
import ExperienceFormActivities from '@/components/experience/form/ExperienceFormActivities'
import { NoResultError } from '@/services/errors'
import { Experience } from '@/models/Experience'
import { Activity } from '@/models/Activity'

const TAB_EXPERIENCE_FORM = 0
const TAB_EVENTS_FORM = 1

export default {
  components: {
    ExperienceFormExperience,
    ExperienceFormActivities
  },

  props: {
    experienceId: String
  },

  data() {
    return {
      loading: false,
      experience: null,
      activities: null,

      snackbarText: '',
      showSnackbar: false,

      TAB_EXPERIENCE_FORM: TAB_EXPERIENCE_FORM,
      TAB_EVENTS_FORM: TAB_EVENTS_FORM,
      activeTab: TAB_EXPERIENCE_FORM
    }
  },

  computed: {
    editting() {
      return Boolean(this.experienceId)
    },

    showNext() {
      return this.$vuetify.breakpoint.xsOnly
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

    goToActivitiesForm() {
      this.activeTab = TAB_EVENTS_FORM
    },

    getExperience() {
      return this.$experiencesService.getId(this.experienceId)
        .then(experience => {
          // These were retrieved from the store and need to be modifyable
          experience = Object.assign(new Experience(), experience)
          experience.activities = experience.activities.map(activity => {
            return Object.assign(new Activity(), activity)
          })

          this.experience = experience
          this.activities = experience.activities
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
      let promise

      if (form.image) {
        promise = this.$experiencesService.uploadImage(form.image)
          .then(imageUrl => {
            form.image_url = imageUrl
          })
      } else {
        promise = Promise.resolve()
      }

      return promise.then(() => {
        let promise
        form.activities = this.activities

        if (this.editting) {
          promise = this.$experiencesService.update(this.experienceId, form)
        } else {
          promise = this.$experiencesService.create(form)
        }

        promise.then(experience => {
          this.display('Experience ' + (this.editting ? 'updated' : 'created'))

          this.$router.push({
            name: 'ExperienceFormEdit',
            params: {experienceId: experience.id}
          })
        })
      })
    }
  }
}
</script>
