<template>
  <v-flex>
    <v-list>
      <v-list-tile v-for="activity in activities" :key="activity.name"
             avatar
             @click="">
        <v-list-tile-avatar>
          <img v-if="activity.image" :src="activity.image">
          <v-icon v-else class="grey lighten-1 white--text">event_note</v-icon>
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>{{ activity.name }}</v-list-tile-title>
          <v-list-tile-sub-title>
            {{ activity.type }}
          </v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-flex>
</template>

<script>
export default {
  props: {
    activities: Array
  }
}
</script>
