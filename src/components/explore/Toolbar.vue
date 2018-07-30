<template>
  <v-toolbar app clipped-left dark extended fixed prominent
             color="light-blue darken-3" class="text-xs-center text-lg-left">
    <v-toolbar-side-icon @click.stop="emit('toggle-sidenav')"></v-toolbar-side-icon>
    <v-toolbar-title>EXP</v-toolbar-title>

    <v-text-field slot="extension" clearable light solo
                  name="search" label="Find an experience"
                  append-icon="search"
                  @input="autocomplete"></v-text-field>
  </v-toolbar>
</template>

<script>
import debounce from 'lodash/debounce'

export default {
  data() {
    return {}
  },

  methods: {
    autocomplete: debounce((text) => {
      console.log(text)
    }, 250, {leading: true, trailing: false})
  }
}
</script>
