<template>
  <v-layout column justify-space-between>
    <v-btn fab fixed bottom right color="light-blue accent-3"
           style="bottom: 6em;"
           :to="{name: 'ActivityForm', param: {experienceId}}">
      <v-icon>add</v-icon>
    </v-btn>

    <v-tabs-items v-model="activeTab">
      <v-tab-item id="activity-list">
        <activity-list :activities="activities"></activity-list>
      </v-tab-item>

      <v-tab-item id="activities-map">
        <activities-map :activities="activities"></activities-map>
      </v-tab-item>
    </v-tabs-items>

    <v-tabs fixed-tabs grow
            v-model="activeTab">
      <v-tab href="#activity-list">
        <v-icon>list</v-icon>
      </v-tab>

      <v-tab href="#activity-map">
        <v-icon>map</v-icon>
      </v-tab>
    </v-tabs>
  </v-layout>
</template>

<script>
import ActivityList from '@/components/experiences/activities/ActivityList'
import ActivitiesMap from '@/components/experiences/activities/ActivitiesMap'
import ExperiencesService from '@/services/ExperiencesService'

export default {
  components: {
    ActivityList,
    ActivitiesMap
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
    this.activities = ExperiencesService.getActivities(this.experienceId)
  }
}
</script>
