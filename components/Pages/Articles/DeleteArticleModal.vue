<template>
  <b-modal v-model="modalShow" centered title="Delete Article">
    <p class="my-4">Are you sure to delete Article?</p>
    <template #modal-footer>
      <b-overlay
        :show="isLoading"
        rounded
        opacity="0.6"
        spinner-small
        spinner-variant="primary"
        class="d-inline-block"
      >
        <b-button
          variant="outline-secondary"
          class="px-4"
          @click="modalShow = false"
        >
          No
        </b-button>
      </b-overlay>

      <b-overlay
        :show="isLoading"
        rounded
        opacity="0.6"
        spinner-small
        spinner-variant="primary"
        class="d-inline-block"
      >
        <b-button class="px-4" variant="danger" @click="onConfirm">
          Yes
        </b-button>
      </b-overlay>
    </template>
  </b-modal>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    articleSlug: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isLoading: false,
    }
  },
  computed: {
    modalShow: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },
  methods: {
    async onConfirm() {
      try {
        const { articleSlug } = this
        this.isLoading = true
        await this.$axios.delete(`/articles/${articleSlug}`)

        this.$bvToast.toast('Article deleted successfuly', {
          title: 'Article deleted',
          variant: 'success',
          solid: true,
        })
        this.modalShow = false
        this.isLoading = false
        console.log('ssssssssssssssssss')
        this.$emit('delete')
      } catch (error) {
        this.modalShow = false
        this.isLoading = false
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
