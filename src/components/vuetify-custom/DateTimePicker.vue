<template>
  <v-menu
    v-model="showDateTimePicker"
    :close-on-content-click="false"
    :nudge-right="40"
    lazy
    transition="scale-transition"
    offset-y
    full-width
    max-width="290px"
    min-width="290px"
  >
    <v-text-field
      slot="activator"
      :value="datetimeStr"
      :label="label"
      clearable
      hide-details
      readonly
      @click:clear="onClear"
    />

    <v-tabs
      v-model="selectedTab"
      grow
      icons
      light
    >
      <v-tab href="#date">Date</v-tab>

      <v-tab href="#time">Time</v-tab>

      <v-tab-item id="date">
        <v-date-picker
          v-model="date"
          no-title
          :min="minDateStr"
          @input="selectedTab = 'time'"
        />
      </v-tab-item>

      <v-tab-item id="time">
        <v-time-picker
          v-model="time"
          @input="onSelectDateTime"
        />
      </v-tab-item>
    </v-tabs>
  </v-menu>
</template>

<script>
import moment from 'moment'

const DATE_FORMAT = 'YYYY-MM-DD'
const TIME_FORMAT = 'HH:mm'
const READ_FORMAT = DATE_FORMAT + ' hh:mm A'

export default {
  props: {
    value: moment,
    label: String,
    minDate: moment
  },

  data() {
    return {
      selectedTab: null,
      showDateTimePicker: false,

      date: this.initialDate,
      time: this.initialTime
    }
  },

  watch: {
    value: {
      handler() {
        this.date = this.initialDate
        this.time = this.initialTime
      },
      immediate: true
    }
  },

  computed: {
    initialDate() {
      return this.value ? this.value.format(DATE_FORMAT) : null
    },

    initialTime() {
      return this.value ? this.value.format(TIME_FORMAT) : null
    },

    minDateStr() {
      return this.minDate ? this.minDate.format(DATE_FORMAT) : null
    },

    datetime() {
      if (!this.date || !this.time) return null
      return moment(this.date + ' ' + this.time, DATE_FORMAT + ' ' + TIME_FORMAT)
    },

    datetimeStr() {
      return this.datetime ? this.datetime.format(READ_FORMAT) : null
    }
  },

  methods: {
    onSelectDateTime() {
      this.$emit('input', this.datetime)
    },

    onClear() {
      this.date = null
      this.time = null
      this.$emit('input', this.datetime)
    }
  }
}
</script>
