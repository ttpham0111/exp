<template>
  <v-app>
    <toolbar @toggle-sidenav="toggleSidenav" />
    <side-nav
      v-model="showSidenav"
      :main-navs="mainNavs" />

    <v-content>
      <v-container fluid fill-height>
        <router-view />
      </v-container>
    </v-content>

    <footer-nav
      v-if="$vuetify.breakpoint.smAndDown"
      :main-navs="mainNavs" />
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
      showSidenav: this.$vuetify.breakpoint.mdAndUp,

      mainNavs: [
        {
          title: 'Explore',
          icon: 'fab fa-wpexplorer',
          to: {name: 'Explore'}
        },
        {
          title: 'Experience',
          icon: 'fa-play',
          to: {name: 'Experience'}
        },
        {
          title: 'Express',
          icon: 'far fa-comments',
          to: {name: 'Express'}
        },
        {
          title: 'Favorites',
          icon: 'favorite_border',
          to: {name: 'Favorites'}
        }
      ]
    }
  },

  methods: {
    toggleSidenav() {
      this.showSidenav = !this.showSidenav
    }
  }
}
</script>
