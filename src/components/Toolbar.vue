<template>
  <v-toolbar
    app
    dark
    fixed
    :extended="showSearch"
    color="light-blue darken-3">
    <v-toolbar-side-icon @click.stop="$emit('toggle-sidenav')"></v-toolbar-side-icon>
    
    <v-toolbar-title @click="goHome">
      EXP
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn
      icon
      @click="showSearch = !showSearch">
      <v-icon>search</v-icon>
    </v-btn>

    <v-toolbar-items>

      <v-btn
        v-if="showSignin"
        flat
        :to="{name: 'Auth'}"
      >
        Sign In
      </v-btn>

      <v-btn
        v-else
        flat
      >
        $userService.get().displayName
      </v-btn>
    </v-toolbar-items>

    <v-text-field
      v-if="showSearch"
      slot="extension"
      v-model="search"
      autofocus
      clearable
      light
      solo
      name="search"
      label="Find an experience"
      append-icon="search"
      @keyup.enter.native="onSearch" />
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      showSearch: false
    }
  },

  computed: {
    showSignin() {
      const user = this.$userService.get()
      return !user || user.isAnonymous
    }
  },

  methods: {
    goHome() {
      this.$router.push({'name': 'Explore'})
    },

    onSearch() {
      this.search = ''
      this.showSearch = false
    }
  }
}
</script>