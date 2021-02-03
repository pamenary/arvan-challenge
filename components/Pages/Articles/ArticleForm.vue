<template>
  <ValidationObserver
    ref="observer"
    v-slot="{ invalid, handleSubmit }"
    class="d-flex flex-column"
  >
    <b-form @submit.stop.prevent="handleSubmit(onSubmit)">
      <b-row>
        <b-col cols="10">
          <validation-provider
            v-slot="{ errors }"
            name="Title"
            :rules="{ required: true }"
          >
            <b-form-group
              label="Title"
              label-for="title"
              :invalid-feedback="errors[0]"
              :state="!errors.length"
            >
              <b-form-input
                id="title"
                v-model="form.title"
                name="title"
                placeholder="Title"
              />
            </b-form-group>
          </validation-provider>

          <validation-provider
            v-slot="{ errors }"
            name="Description"
            :rules="{ required: true }"
          >
            <b-form-group
              label="Description"
              label-for="description"
              :invalid-feedback="errors[0]"
              :state="!errors.length"
            >
              <b-form-input
                id="description"
                v-model="form.description"
                name="description"
                placeholder="Description"
              />
            </b-form-group>
          </validation-provider>

          <validation-provider
            v-slot="{ errors }"
            name="Body"
            :rules="{ required: true }"
          >
            <b-form-group
              label="Body"
              label-for="body"
              :invalid-feedback="errors[0]"
              :state="!errors.length"
            >
              <b-form-textarea
                id="body"
                v-model="form.body"
                name="body"
                placeholder="Current Body"
                rows="12"
              />
            </b-form-group>
          </validation-provider>

          <b-overlay
            :show="isLoading"
            rounded
            opacity="0.6"
            spinner-small
            spinner-variant="primary"
            class="d-inline-block"
          >
            <b-button type="submit" variant="primary" :disabled="invalid">
              Submit
            </b-button>
          </b-overlay>
        </b-col>
        <b-col cols="2">
          <Tags v-model="form.tagList" />
        </b-col>
      </b-row>
    </b-form>
  </ValidationObserver>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    form: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },
  methods: {
    onSubmit() {
      this.$emit('submit', this.form)
    },
  },
}
</script>

<style lang="scss" scoped></style>
