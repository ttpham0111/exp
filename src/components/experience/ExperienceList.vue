<template>
  <v-container fluid grid-list-md pa-0 ma-0>
    <v-layout row wrap>
      <template v-for="(group, i) in groups">
        <v-flex xs12>
          <v-divider v-if="i > 0" class="mt-3"></v-divider>
          <h4 class="ma-1">{{ group.label }}</h4>
        </v-flex>

        <v-flex v-for="experience in group.experiences" :key="experience.id"
                xs12 md6 lg3 xl2>
          <v-card>
            <v-card-media height="200px" :src="experience.imageUrl">
              <v-container fill-height fluid pa-2 class="overlay">
                <v-layout fill-height>
                  <v-flex>
                    <span class="headline white--text" v-text="experience.name"></span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-media>

            <v-card-actions>
              <v-chip label color="transparent">
                <v-icon left>event_note</v-icon>
                {{ experience.numActivities }}
              </v-chip>

              <v-chip label color="transparent">
                <v-icon left>people_outline</v-icon>
                {{ experience.numCollaborators }}
              </v-chip>

              <v-spacer></v-spacer>
              
              <v-btn icon>
                <v-icon>edit</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>share</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </template>
    </v-layout>
  </v-container>
</template>

<script>
import StarRating from '@/components/experience/StarRating'

export default {
  components: {
    StarRating
  },

  props: {
    experiences: Array
  },

  computed: {
    sortedByStartsAt() {
      const toSort = this.experiences.slice()
      toSort.sort((a, b) => {
        return a.startsAt - b.startsAt
      })
      return toSort
    },

    groups() {
      const groups = {}
      this.sortedByStartsAt.forEach(experience => {
        let name = experience.startsAt.format('MMMM YYYY')
        if (groups.hasOwnProperty(name)) groups[name].push(experience)
        else groups[name] = [experience]
      })

      return Object.keys(groups).map(k => ({label: k, experiences: groups[k]}))
    }
  }
}
</script>

<style>
.overlay {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
