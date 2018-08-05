<template>
  <v-layout align-center>
    <v-flex>
      <div id="firebaseui-auth-container"></div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    returnTo: String
  },

  mounted() {
    this.$userService.startUI('#firebaseui-auth-container')
  },

  beforeUpdate() {
    if (this.$userService.get()) {
      this.$router.push(this.returnTo || {'name': 'Explore'})
    }
  }
}
</script>
