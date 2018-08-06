<template>
  <form @submit.prevent="onSubmit">
    <v-text-field
      v-model="form.name"
      autofocus
      browser-autocomplete="off"
      name="title"
      label="Title"
      maxlength="50"
      counter
      v-validate="'required|max:50'"
      :error-messages="errors.collect('title')"
    />

    <input
      ref="imageUpload"
      type="file"
      accept="image/*"
      @change="previewImage"
      hidden />
    <v-card
      class="mt-3 mb-4"
      color="grey lighten-2"
    >
      <v-card-media
        :src="previewimage_url || form.image_url"
        height="200px"
        @click="$refs.imageUpload.click()"
      >
        <v-container
          v-if="!(previewimage_url || form.image_url)"
          fill-height
          fluid
          pa-2
        >
          <v-layout
            align-center
            justify-center
            fill-height
          >
            <v-icon large>
              add_photo_alternate
            </v-icon>
          </v-layout>
        </v-container>
      </v-card-media>
    </v-card>

    <v-combobox
      v-model="form.tags"
      append-icon=""
      label="Tags"
      hide-no-data
      hide-selected
      multiple
      name="tags"
      small-chips
      v-validate="'alpha_num'"
      :error-messages="errors.collect('tags')"
    >
    </v-combobox>

    <v-switch
      label="Private"
      v-model="form.is_private"
      hint="Only viewable by the group"
      persistent-hint
    />

    <v-combobox
      v-model="form.collaborators"
      append-icon=""
      label="Group"
      hint="Enter email addresses"
      persistent-hint
      hide-no-data
      hide-selected
      multiple
      name="group"
      deletable-chips
      small-chips
      v-validate="'email'"
      :error-messages="errors.collect('group')"
    >
    </v-combobox>

    <v-layout class="mt-4">
      <v-btn
        block
        color="primary"
        :dark="!submitDisabled"
        :disabled="submitDisabled"
        type="submit"
      >
        Save
      </v-btn>

      <v-btn
        v-if="showNext"
        class="mr-0"
        color="primary"
        @click="$emit('next')"
      >
        <v-icon>navigate_next</v-icon>
      </v-btn>
    </v-layout>

  </form>
</template>

<script>
export default {
  props: {
    formData: Object,
    showNext: Boolean,
    loading: Boolean
  },

  data() {
    return {
      form: this.formData || {},
      previewimage_url: ''
    }
  },

  computed: {
    submitDisabled() {
      return this.errors.any()
    }
  },

  watch: {
    formData() {
      this.form = this.formData || {}
    }
  },

  methods: {
    previewImage(event) {
      this.form.image = event.target.files[0]
      const reader = new FileReader()
      reader.addEventListener('load', () => {
        this.previewimage_url = reader.result
      }, false)
      if (this.form.image) reader.readAsDataURL(this.form.image)
    },

    onSubmit() {
      this.$validator.validateAll()
        .then(valid => {
          if (valid) {
            this.$emit('submit', this.form)
          } else {
            const numErrors = this.errors.count()
            const message = numErrors + ' ' +
                            this.$options.filters.pluralize(numErrors, 'error')
            this.$emit('error', message)
            this.showSnackbar = true
          }
        })
    }
  }
}
</script>
