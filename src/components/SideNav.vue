<template>
  <v-navigation-drawer app fixed
                       :value="value" @input="$emit('input', $event)">
    <v-list>
      <v-list-tile
        v-for="nav in mainNavs"
        :key="nav.title"
        :to="nav.to"
      >
        <v-list-tile-action>
          <v-icon v-html="nav.icon"></v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="nav.title"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    value: Boolean,
    mainNavs: Array
  }
}
</script>
