<template>
  <v-menu
    v-model="showMenu"
    nudge-bottom="40px"
  >
    <v-btn
      slot="activator"
      icon
    >

      <v-avatar>
        <img
          v-if="user.photoURL"
          src="user.photoURL" />
        <v-icon v-else>account_circle</v-icon>
      </v-avatar>
    </v-btn>

    <v-card>
      <v-list three-line>
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img
              v-if="user.photoURL"
              src="user.photoURL" />
            <v-icon v-else>account_circle</v-icon>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>{{ user.displayName }}</v-list-tile-title>
            <v-list-tile-sub-title>
              {{ user.email }}
              <span v-if="!user.emailVerified">(Unverified)</span>
            </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-divider></v-divider>

      <v-list>
        <v-list-tile
          avatar
          @click="logout"
        >
          <v-list-tile-avatar>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Sign Out</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card>
  </v-menu>

</template>

<script>
import { User } from '@/models/User'

export default {
  props: {
    user: User
  },

  data() {
    return {
      showMenu: false
    }
  },

  methods: {
    logout() {
      this.$userService.logout()
    }
  }
}
</script>