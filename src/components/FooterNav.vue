<template>
  <v-footer app fixed height="auto">
    <v-layout column>
      <v-tabs fixed-tabs icons-and-text height="60">
        <v-tabs-slider color="accent darken-3" style="height: 3px"></v-tabs-slider>
        
        <v-tab
          v-for="nav in mainNavs"
          :key="nav.title"
          :to="nav.to"
        >
          <small>{{ nav.title }}</small>
          <v-icon>{{ nav.icon }}</v-icon>
        </v-tab>
      </v-tabs>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  props: {
    mainNavs: Array
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
