<template>
  <v-navigation-drawer app fixed
                       :value="value" @input="$emit('input', $event)">
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
</template>

<script>
export default {
  props: {
    value: Boolean
  },

  data() {
    return {
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }]
    }
  }
}
</script>
