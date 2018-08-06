<template>
  <div>
    <v-text-field
      v-model="search"
      solo
      clearable
      hide-details
      full-width
      label="Find activities"
      :loading="loading"
      append-icon="search"
      append-outer-icon="location_on"
      @keyup.enter.native="onSearch"
      @click:append="onSearch"
      @click:clear="onClear"
      @click:append-outer="showLocationSearch = !showLocationSearch"
    ></v-text-field>

    <v-text-field
      v-if="showLocationSearch"
      v-model="location"
      clearable
      class="mt-3"
      label="San Jose, CA"
      solo-inverted
    ></v-text-field>
    
    <activity-list :activities="activities">
      <template slot="actions" slot-scope="{ index, activity }">
        <v-btn @click="onSelectActivity(index, activity)">
          <span v-if="isViewing">Remove</span>
          <span v-else>Add to Experience</span>
        </v-btn>

        <v-chip
          v-if="isViewing"
          class="ml-2"
          :selected="showDateTimePickers === index"
          :disabled="activity.source === source.EVENTBRITE"
          @click="activity.source === source.EVENTBRITE || onShowDateTimePickers(index)"
        >
          <v-avatar>
            <v-icon>access_time</v-icon>
          </v-avatar>
          <span v-html="dateTimeRange(activity)"></span>
        </v-chip>
      </template>

      <template v-if="isViewing && showDateTimePickers === index"
        slot="footer"
        slot-scope="{ index, activity }"
      >
        <v-card-actions>
          <v-layout row wrap>
            <v-flex md6>
              <date-time-picker
                v-model="activity.starts_at"
                label="Starts at"
                :min-date="today"
                @input="$emit('input', selected)"
              />
            </v-flex>

            <v-flex md6>
              <date-time-picker
                v-model="activity.ends_at"
                label="Ends at"
                :min-date="activity.starts_at || today"
                @input="$emit('input', selected)"
              />
            </v-flex>
          </v-layout>
        </v-card-actions>
      </template>
    </activity-list>

    <v-layout v-if="!this.$vuetify.breakpoint.mdAndUp">
      <v-btn
        v-if="showPrev"
        class="ml-0"
        @click="$emit('back')"
      >
        <v-icon>navigate_before</v-icon>
      </v-btn>

      <v-btn
        block
        color="primary"
        type="submit"
        @click.prevent="$emit('submit')"
      >
        Save
      </v-btn>

    </v-layout>
  </div>
</template>

<script>
import moment from 'moment'

import ActivityList from '@/components/experience/activities/ActivityList'
import DateTimePicker from '@/components/vuetify-custom/DateTimePicker'

import { ActivitySource } from '@/models/Activity'

const MODE_VIEW = 0
const MODE_SEARCH = 1
const PRETTY_DATE_FORMAT = '[<strong>]ddd, D MMM[</strong>] [at] [<strong>]hh:mmA[</strong>]'

export default {
  components: {
    ActivityList,
    DateTimePicker
  },

  props: {
    value: Array,
    showPrev: Boolean
  },

  data() {
    return {
      source: ActivitySource,
      mode: MODE_VIEW,
      selected: this.value || [],

      search: '',
      found: [],
      loading: false,

      showDateTimePickers: null,

      location: '',
      showLocationSearch: false
    }
  },

  watch: {
    value() {
      this.selected = this.value
    },

    search() {
      if (this.search === '') this.mode = MODE_VIEW
    }
  },

  computed: {
    today() {
      return moment()
    },

    isViewing() {
      return this.mode === MODE_VIEW
    },

    activities() {
      return this.isViewing ? this.selected : this.found
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

    onClear() {
      this.mode = MODE_VIEW
    },

    onShowDateTimePickers(index) {
      this.showDateTimePickers = this.showDateTimePickers === index ? null : index
    },

    onSearch() {
      this.mode = MODE_SEARCH
      this.loading = true

      let fn = navigator.geolocation.getCurrentPosition.bind(navigator.geolocation)
      if (this.location) {
        fn = (cb) => cb(null)
      }

      fn((position) => {
        const params = {
          term: this.search
        }

        if (this.location) params.location = this.location
        else {
          params.latitude = position.coords.latitude
          params.longitude = position.coords.longitude
        }

        this.$activitiesService.find(params)
          .then((activities) => {
            this.loading = false
            this.found = activities
          })
      })
    },

    onSelectActivity(i, activity) {
      if (this.isViewing) this.$delete(this.selected, i)
      else this.selected.push(activity)

      this.$emit('input', this.selected)
      this.search = ''
    }
  }
}
</script>
