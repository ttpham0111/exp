<template>
  <v-layout>
    <v-flex>
      <v-form ref="form" class="fill-height" @submit.prevent="onSubmit">
        <v-stepper v-model="currentStep" class="fill-height">
          <v-stepper-header>
            <v-stepper-step :complete="currentStep > 1" step="1">
              Find an activity
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

import ActivitiesService from '@/services/ActivitiesService'

export default {
  prop: {
    experienceId: String
  },

  data() {
    return {
      currentStep: 1,
      form: {
        time: null,
        activity: null
      },

      autocompletedActivitiess: []
    }
  },

  methods: {
    onSearch: debounce((text) => {
      ActivitiesService.autocomplete(text)
        .then(data => {
          this.autocompletedActivitiess = data
        })
    }, 250, {leading: true, trailing: false}),

    onSubmit() {
      console.log(this.form)
    }
  }
}
</script>
