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
      @keyup.enter.native="onSearch"
      @click:append="onSearch"
      @click:clear="onClear"
    ></v-text-field>
    
    <activity-list 
      :activities="activities"
      :action="action"
      @select="onSelectActivity" />
  </div>
</template>

<script>
import ActivityList from '@/components/experience/activities/ActivityList'

const MODE_VIEW = 0
const MODE_SEARCH = 1

export default {
  components: {
    ActivityList
  },

  props: {
    value: Array
  },

  data() {
    return {
      mode: MODE_VIEW,
      selected: this.value || [],

      search: '',
      found: [],
      loading: false
    }
  },

  watch: {
    search() {
      if (this.search === '') this.mode = MODE_VIEW
    }
  },

  computed: {
    activities() {
      if (this.mode === MODE_VIEW) return this.value
      else return this.found
    },

    action() {
      return this.mode === MODE_VIEW ? 'Remove' : 'Add to Experience'
    }
  },

  methods: {
    onClear() {
      this.mode = MODE_VIEW
    },

    onSearch() {
      this.mode = MODE_SEARCH
      this.loading = true

      navigator.geolocation.getCurrentPosition((position) => {
        this.$activitiesService.find({
          term: this.search,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
          .then((activities) => {
            this.loading = false
            this.found = activities
          })
      })
    },

    onSelectActivity(i, activity) {
      if (this.mode === MODE_VIEW) this.$delete(this.selected, i)
      else this.selected.push(activity)

      this.$emit('input', this.selected)
      this.search = ''
    }
  }
}
</script>
