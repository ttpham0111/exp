<template>
  <v-layout row>
    <v-flex>
      <v-list two-line>
        <v-list-tile v-for="experience in experiences" :key="experience.title"
                     avatar
                     :to="{name: 'Events', params: {experienceId: experience.id}}">
          <v-list-tile-avatar>
            <img v-if="experience.image" :src="experience.image">
            <v-icon v-else class="grey lighten-1 white--text">location_city</v-icon>
          </v-list-tile-avatar>
        
          <v-list-tile-content>
            <v-list-tile-title>{{ experience.title }}</v-list-tile-title>
            <v-list-tile-sub-title>
              {{ experience.events.length }}
              {{ experience.events.length | pluralize('event')}}
            </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script>
import ExperiencesService from '@/services/ExperiencesService'

export default {
  data() {
    return {
      experiences: []
    }
  },

  created() {
    this.experiences = ExperiencesService.get()
  }
}
</script>
