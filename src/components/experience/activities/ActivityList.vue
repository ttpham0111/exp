<template>
  <v-container
    fluid
    grid-list-lg
    px-0
  >
    <v-layout row wrap>
      <v-flex
        v-for="(activity, i) in safeActivities"
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

                  <template v-if="activity.source === source.YELP">
                    <div class="d-md-flex"">
                      <div class="pr-1">
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
                  </template>

                  <template v-else-if="activity.source === source.EVENTBRITE">
                    <div v-html="dateTimeRange(activity)"></div>
                    <div>{{ activity.source_metadata.venue.name }}</div>
                    <div>{{ addressLine1(activity) }}</div>
                    <div>{{ addressLine2(activity) }}</div>
                  </template>
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
            
            <a
              v-if="activity.source === source.YELP"
              :href="activity.source_metadata.url"
              target="_blank"
            >
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
import { ActivitySource } from '@/models/Activity'

const PRETTY_DATE_FORMAT = '[<strong>]ddd, D MMM[</strong>] [at] [<strong>]hh:mmA[</strong>]'

export default {
  props: {
    activities: Array
  },

  data() {
    return {
      source: ActivitySource
    }
  },

  computed: {
    safeActivities() {
      return this.activities || []
    }
  },

  methods: {
    dateTimeRange(activity) {
      if (!activity.starts_at && !activity.ends_at) return 'Anytime'

      if (!activity.starts_at) return activity.ends_at.format(PRETTY_DATE_FORMAT)

      let str = activity.starts_at.format(PRETTY_DATE_FORMAT)
      if (activity.ends_at) {
        str += ' (' + activity.ends_at.to(activity.starts_at, true) + ')'
      }
      return str
    },

    getYelpStars(rating) {
      return require('../../../assets/yelp/stars/regular/regular_' + rating + '.png')
    },

    addressLine1(eventbriteActivity) {
      const address = eventbriteActivity.source_metadata.venue.address.localized_multi_line_address_display

      if (!address) return ''
      else if (address.length <= 2) return address[0]
      else return address[0] + ', ' + address[1]
    },

    addressLine2(eventbriteActivity) {
      const address = eventbriteActivity.source_metadata.venue.address.localized_multi_line_address_display

      if (address.length === 2) return address[1]
      else if (address && address.length >= 3) return address.splice(2).join(' ')
      else return ''
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
