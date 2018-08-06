<template>
  <v-layout row wrap align-content-start>
    <v-jumbotron
      dark
      :src="require('../../assets/explore.jpg')"
      gradient="to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.10) 100%"
    >
      <v-container
        fill-height
      >
        <v-layout align-center>
          <v-flex>
            <h3 class="display-2">Experience, Explore, Express</h3>

            <span class="subheading">
              Plan experiences in your local area. Share with your family and friends.
            </span>

            <v-divider class="my-3"></v-divider>

            <div class="title mb-3">Explore top experiences!</div>
            <v-btn
              class="mx-0"
              large
              color="primary"
            >
              Explore
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>

    <v-container
      v-if="experiences.length > 0"
      class="my-0 px-0"
      fluid
      grid-list-lg
    >
      <v-layout row wrap>
        <v-flex
          v-for="(experience, i) in experiences"
          :key="experience.id"
          xs12
          v-bind="{[`md${getSize(i)}`]: true}"
        >
          <v-card
            flat
            tile
          >
            <v-card-media
              :src="experience.image_url"
              height="320px"
            >
              <v-container
                class="overlay"
                fill-height
                fluid
                @click="onSelectExperience(experience)"
              >
                <v-layout
                  fill-height
                  align-center
                  justify-center
                >
                  <v-flex
                    xs12
                    flex-box
                    class='text-xs-center'
                  >
                    <span class="headline white--text">{{ experience.name }}</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-media>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      experiences: []
    }
  },

  mounted() {
    this.getExperiences()
  },

  methods: {
    getExperiences() {
      this.$experiencesService.getTop()
        .then(experiences => {
          this.experiences = experiences
        })
    },

    getSize(i) {
      return (i % 4 === 0 && i > 0) ? 8 : 4
    },

    onSelectExperience(experience) {
      this.$router.push({
        'name': 'ExploreExperience',
        params: {experienceId: experience.id}}
      )
    }
  }
}
</script>

<style>
.overlay {
  background-color: rgba(0, 0, 0, 0.3);
}

.v-jumbotron img {
  height: 100%;
}  
</style>
