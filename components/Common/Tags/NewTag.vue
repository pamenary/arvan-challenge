<template>
  <b-form @submit.stop.prevent="onSubmit">
    <b-form-group label-for="tag">
      <b-form-input
        id="tag"
        v-model="form.tag"
        name="tag"
        placeholder="New tag"
      />
    </b-form-group>
  </b-form>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      form: {
        tag: null,
      },
    }
  },
  methods: {
    onSubmit() {
      if (this.form.tag) {
        this.$emit('submit', this.form.tag)
        this.form.tag = null
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
