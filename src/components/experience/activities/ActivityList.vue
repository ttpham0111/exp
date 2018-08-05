<template>
  <v-container
    fluid
    grid-list-lg
    px-0
  >
    <v-layout row wrap>
      <v-flex
        v-for="(activity, i) in activities"
        xs12
      >
        <v-card>
          <v-layout>
            <v-flex xs5>
              <v-card-media
                class="ml-2"
                :height="$vuetify.breakpoint.mdAndUp ? '150px' : '100%'"
                :src="activity.imageUrl" />
            </v-flex>

            <v-flex xs7>
              <v-card-title class="pa-0">
                <div>
                  <div class="title mb-2">
                    <a :href="activity.sourceMetadata.url" target="_blank">
                      {{ activity.name }}
                    </a>
                  </div>
                  <div class="d-md-flex"">
                    <div class="source-logo-wrapper pr-1">
                      <img :src="getYelpStars(activity.sourceMetadata.rating)">
                    </div>
                    <div>
                      {{ activity.sourceMetadata.review_count }}
                      {{ activity.sourceMetadata.review_count | pluralize('review') }}
                    </div>
                  </div>
                  <div>{{ activity.sourceMetadata.location.address1 }}</div>
                  <div>
                    {{ activity.sourceMetadata.location.city }},
                    {{ activity.sourceMetadata.location.state }}
                  </div>
                </div>
              </v-card-title>
            </v-flex>
          </v-layout>

          <v-divider light></v-divider>

          <v-card-actions>
            <v-btn
              flat
              @click="onSelectActivity(i, activity)"
            >
              {{ action }}
            </v-btn>

            <v-spacer />
            
            <a :href="activity.sourceMetadata.url" target="_blank">
              <img
                src="../../../assets/yelp/logo-regular.png"
                height="35em" />
            </a>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    activities: Array,
    action: String
  },

  methods: {
    getYelpStars(rating) {
      return require('../../../assets/yelp/stars/regular/regular_' + rating + '.png')
    },

    onSelectActivity(i, activity) {
      console.log(i, activity)
      this.$emit('select', i, activity)
    }
  }
}
</script>

<style scoped>
  .v-card__media__background {
    background-clip: border-box;
  }

  @media (min-width: 960px) {
    .d-md-flex {
      display: flex;
    }
  }
</style>
