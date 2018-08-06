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
                :src="activity.image_url" />
            </v-flex>

            <v-flex xs7>
              <v-card-title class="pa-0">
                <div>
                  <div class="title mb-2">
                    <a :href="activity.source_metadata.url" target="_blank">
                      {{ activity.name }}
                    </a>
                  </div>
                  <div class="d-md-flex"">
                    <div class="source-logo-wrapper pr-1">
                      <img :src="getYelpStars(activity.source_metadata.rating)">
                    </div>
                    <div>
                      {{ activity.source_metadata.review_count }}
                      {{ activity.source_metadata.review_count | pluralize('review') }}
                    </div>
                  </div>
                  <div>{{ activity.source_metadata.location.address1 }}</div>
                  <div>
                    {{ activity.source_metadata.location.city }},
                    {{ activity.source_metadata.location.state }}
                  </div>
                </div>
              </v-card-title>
            </v-flex>
          </v-layout>

          <v-card-actions>
            <slot
              name="actions"
              :index="i"
              :activity="activity"
            />

            <v-spacer />
            
            <a :href="activity.source_metadata.url" target="_blank">
              <img
                src="../../../assets/yelp/logo-regular.png"
                height="35em" />
            </a>
          </v-card-actions>

          <slot
            name="footer"
            :index="i"
            :activity="activity"
          />
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    activities: Array
  },

  methods: {
    getYelpStars(rating) {
      return require('../../../assets/yelp/stars/regular/regular_' + rating + '.png')
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
