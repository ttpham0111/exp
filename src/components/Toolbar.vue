<template>
  <v-toolbar app dark fixed
             color="light-blue darken-3" class="text-xs-center text-lg-left">
    <v-toolbar-side-icon @click.stop="$emit('toggle-sidenav')"></v-toolbar-side-icon>
    <v-toolbar-title>EXP</v-toolbar-title>
  </v-toolbar>
</template>
