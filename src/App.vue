<template>
  <v-app>
    <toolbar />
    <side-nav v-model="showSidenav" />

    <v-content>
      <v-container fluid fill-height>
        <router-view />
      </v-container>
    </v-content>

    <footer-nav v-if="$vuetify.breakpoint.smAndDown" />
  </v-app>
</template>

<script>
import Toolbar from '@/components/toolbar/Toolbar'
import SideNav from '@/components/SideNav'
import FooterNav from '@/components/FooterNav'

export default {
  components: {
    Toolbar,
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
