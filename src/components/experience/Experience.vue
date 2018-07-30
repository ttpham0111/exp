<template>
  <v-layout>
    <v-btn fab fixed bottom right color="light-blue accent-4"
           :style="{bottom: $vuetify.breakpoint.xsOnly ? '76px' : '16px'}"
           :to="{name: 'ExperienceForm'}">
      <v-icon>add</v-icon>
    </v-btn>

    <experience-list :experiences="experiences" />
  </v-layout>
</template>

<script>
import ExperienceList from '@/components/experience/ExperienceList'

export default {
  components: {
    ExperienceList
  },

  data() {
    return {
      experiences: []
    }
  },

  mounted() {
    this.$experiencesService.get()
      .then(experiences => {
        this.experiences = experiences
      })
  }
}
</script>
