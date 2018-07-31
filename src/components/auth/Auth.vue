<template>
  <v-layout align-center>
    <v-flex>
      <div id="firebaseui-auth-container"></div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
    }
  },

  mounted() {
    this.$userService.startUI('#firebaseui-auth-container')
  }
}
</script>
