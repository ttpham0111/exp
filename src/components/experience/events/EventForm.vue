<template>
  <v-layout>
    <v-flex>
      <v-form ref="form" class="fill-height" @submit.prevent="onSubmit">
        <v-stepper v-model="currentStep" class="fill-height">
          <v-stepper-header>
            <v-stepper-step :complete="currentStep > 1" step="1">
              Find an event
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="currentStep > 2" step="2">
              Enter a time
              <small>Optional</small>
            </v-stepper-step>
          </v-stepper-header>
        
          <v-stepper-content step="1" fill-height>
            <v-text-field solo autofocus clearable
                          append-icon="search" label="Search"
                          @input="onSearch"></v-text-field>

            <v-list>
              
            </v-list>
          </v-stepper-content>

        
          <v-stepper-content step="2">
            <v-time-picker v-model="form.time"></v-time-picker>

            <v-btn color="primary" @click="currentStep = 3">Continue</v-btn>
          </v-stepper-content>
        </v-stepper>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
import debounce from 'lodash/debounce'

import EventService from '@/services/EventService'

export default {
  prop: {
    experienceId: String
  },

  data() {
    return {
      currentStep: 1,
      form: {
        time: null,
        event: null
      },

      autocompletedEvents: []
    }
  },

  methods: {
    onSearch: debounce((text) => {
      EventService.autocomplete(text)
        .then(data => {
          this.autocompletedEvents = data
        })
    }, 250, {leading: true, trailing: false}),

    onSubmit() {
      console.log(this.form)
    }
  }
}
</script>
