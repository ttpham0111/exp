<template>
  <v-app>
    <v-navigation-drawer app fixed v-model="showNav">
      <v-list>
        <v-list-tile v-for="(item, i) in items" :key="i">
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app color="light-blue darken-3" dark>
      <v-toolbar-side-icon @click.stop="showNav = !showNav"></v-toolbar-side-icon>
      <v-toolbar-title>EXP</v-toolbar-title>
    </v-toolbar>

    <v-content>
      <v-container fluid fill-height>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      showNav: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }]
    }
  }
}
</script>
