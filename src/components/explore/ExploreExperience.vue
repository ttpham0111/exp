<template>
  <v-layout row wrap>
    <v-flex xs12 md6>
      <h2>{{ safeExperience.name }}</h2>
      <v-card
        class="mt-3 mb-4"
        color="grey lighten-2"
      >
        <v-card-media
          :src="safeExperience.image_url"
          height="200px"
        >
        </v-card-media>
      </v-card>

      <v-divider class="my-2"></v-divider>

      <h3 class="mb-2">Comments</h3>

      <div v-if="$userService.get()">
        <v-textarea
          v-model="myComment"
          label="Express yourself"
          height="7em"
          no-resize
          outline
          hide-details
        ></v-textarea>

        <v-btn
          color="primary"
          class="mx-0"
          @click="onSubmitComment"
        >
          Submit
        </v-btn>
      </div>

      <v-list three-line>
        <v-list-tile v-for="comment in comments">
          <v-list-tile-avatar>
            <v-icon>comment</v-icon>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>
              {{ comment.owner }}
              <small>
                ({{ comment.createdAt | relativeTime }})
              </small>
            </v-list-tile-title>
            <v-list-tile-sub-title>{{ comment.text }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-flex>

    <v-flex
      xs12 md6
      class="pl-3"
    >
      <h2>Activities</h2>
      <activity-list :activities="activities"></activity-list>
    </v-flex>
  </v-layout>
</template>

<script>
import moment from 'moment'

import ActivityList from '@/components/experience/activities/ActivityList'

export default {
  components: {
    ActivityList
  },

  filters: {
    relativeTime(datetimeStr) {
      return moment(datetimeStr).fromNow()
    }
  },

  props: {
    experienceId: String
  },

  data() {
    return {
      experience: [],
      comments: [],
      myComment: ''
    }
  },

  computed: {
    safeExperience() {
      return this.experience || {}
    },

    activities() {
      return this.experience ? this.experience.activities : []
    }
  },

  watch: {
    $route() {
      if (this.experienceId) {
        this.getExperience()
        this.getComments()
      }
    }
  },

  created() {
    if (this.experienceId) {
      this.getExperience()
      this.getComments()
    }
  },

  methods: {
    getExperience() {
      this.$experiencesService.getTopId(this.experienceId)
        .then(experience => {
          this.experience = experience
        })
    },

    getComments() {
      this.$experiencesService.getComments(this.experienceId)
        .then(comments => {
          this.comments = comments
        })
    },

    onSubmitComment() {
      this.$experiencesService.addComment(this.experienceId, this.myComment)
        .then(comment => {
          this.comments.unshift(comment)
        })
    }
  }
}
</script>