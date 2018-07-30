<template>
  <div>
    <v-icon v-for="_ in nFull" :key="'f'+_" :color="color">
      star
    </v-icon
    ><v-icon v-for="_ in nHalf" :key="'h'+_" :color="color">
      star_half
    </v-icon
    ><v-icon v-for="_ in nEmpty" :key="'e'+_" :color="color">
      star_border
    </v-icon>
  </div>
</template>

<script>
export default {
  props: {
    rating: Number,

    max: {
      type: Number,
      default: 5
    },

    color: {
      type: String,
      default: 'yellow'
    }
  },

  computed: {
    nFull() {
      return Math.floor(this.rating) || []
    },

    nHalf() {
      return (this.rating % 1) === 0 ? [] : 1
    },

    nEmpty() {
      return this.max - (this.nFull + this.nHalf) || []
    }
  }
}
</script>