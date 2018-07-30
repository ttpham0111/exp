<template>
  <v-app>
    <side-nav v-model="showSidenav" />

    <router-view name="toolbar" @toggle-sidenav="toggleSidenav" />

    <v-content>
      <v-container fluid fill-height>
        <router-view name="content" />
      </v-container>
    </v-content>

    <footer-nav v-if="$vuetify.breakpoint.smAndDown" />
  </v-app>
</template>

<script>
import SideNav from '@/components/SideNav'
import FooterNav from '@/components/FooterNav'

export default {
  components: {
    SideNav,
    FooterNav
  },

  data() {
    return {
      showSidenav: false
    }
  },

  methods: {
    toggleSidenav() {
      this.showSidenav = !this.showSidenav
    }
  }
}
</script>
