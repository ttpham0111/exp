<template>
  <v-footer app fixed height="auto">
    <v-layout column>
      <v-tabs fixed-tabs icons-and-text height="60">
        <v-tabs-slider color="accent darken-3" style="height: 3px"></v-tabs-slider>

        <v-tab :to="{name: 'Explore'}">
          <small>Explore</small>
          <v-icon>fab fa-wpexplorer</v-icon>
        </v-tab>

        <v-tab :to="{name: 'Experience'}">
          <small>Experience</small>
          <v-icon>fa-play</v-icon>
        </v-tab>

        <v-tab :to="{name: 'Express'}">
          <small>Express</small>
          <v-icon>far fa-comments</v-icon>
        </v-tab>

        <v-tab :to="{name: 'Bookmarks'}">
          <small>Bookmarks</small>
          <v-icon>far fa-bookmark</v-icon>
        </v-tab>
      </v-tabs>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style scoped>
.v-footer {
  border-top: 1px solid #bbb;
}

.v-tabs small {
  font-weight: 300;
  text-transform: initial;
}

.v-tabs__item {
  padding: 0;
}
.v-tabs__item--active > i {
  color: #0277bd;
}
</style>
