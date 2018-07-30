<template>
  <v-flex>
    <v-list>
      <v-list-tile v-for="event in events" :key="event.name"
             avatar
             @click="">
        <v-list-tile-avatar>
          <img v-if="event.image" :src="event.image">
          <v-icon v-else class="grey lighten-1 white--text">event_note</v-icon>
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>{{ event.name }}</v-list-tile-title>
          <v-list-tile-sub-title>
            {{ event.type }}
          </v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-flex>
</template>

<script>
export default {
  props: {
    events: Array
  }
}
</script>
