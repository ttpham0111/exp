<template>
  <v-toolbar
    app
    dark
    fixed
    :extended="showSearch"
    color="light-blue darken-3">
    <v-toolbar-side-icon @click="$emit('toggle-sidenav')"></v-toolbar-side-icon>
    
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
    </v-toolbar-items>

    <toolbar-user-menu
      v-if="!showSignin"
      :user="user"
    />

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
import ToolbarUserMenu from '@/components/toolbar/ToolbarUserMenu'

export default {
  components: {
    ToolbarUserMenu
  },

  data() {
    return {
      search: '',
      showSearch: false
    }
  },

  computed: {
    user() {
      return this.$userService.get()
    },

    showSignin() {
      return !this.user || this.user.isAnonymous
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