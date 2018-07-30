<template>
  <v-layout column justify-space-between>
    <v-btn fab fixed bottom right color="light-blue accent-3"
           style="bottom: 6em;"
           :to="{name: 'EventForm', param: {experienceId}}">
      <v-icon>add</v-icon>
    </v-btn>

    <v-tabs-items v-model="activeTab">
      <v-tab-item id="event-list">
        <event-list :events="events"></event-list>
      </v-tab-item>

      <v-tab-item id="events-map">
        <events-map :events="events"></events-map>
      </v-tab-item>
    </v-tabs-items>

    <v-tabs fixed-tabs grow
            v-model="activeTab">
      <v-tab href="#event-list">
        <v-icon>list</v-icon>
      </v-tab>

      <v-tab href="#event-map">
        <v-icon>map</v-icon>
      </v-tab>
    </v-tabs>
  </v-layout>
</template>

<script>
import EventList from '@/components/experiences/events/EventList'
import EventsMap from '@/components/experiences/events/EventsMap'
import ExperiencesService from '@/services/ExperiencesService'

export default {
  components: {
    EventList,
    EventsMap
  },

  props: {
    experienceId: String
  },

  data() {
    return {
      activeTab: null
    }
  },

  created() {
    this.events = ExperiencesService.getEvents(this.experienceId)
  }
}
</script>
