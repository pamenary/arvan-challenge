<template>
  <div class="tags">
    <div class="title">Tags</div>

    <b-overlay
      :show="isLoading"
      spinner-variant="primary"
      spinner-type="grow"
      spinner-small
      rounded="sm"
      class="mt-2"
    >
      <NewTag @submit="onCreateTag" />
    </b-overlay>

    <b-overlay
      :show="isLoading"
      spinner-variant="primary"
      spinner-type="grow"
      spinner-small
      rounded="sm"
    >
      <b-card class="tags-list nice-scroll mt-4">
        <b-form-checkbox-group
          v-model="selected"
          :options="tags"
          value-field="name"
          text-field="name"
          stacked
        />
      </b-card>
    </b-overlay>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      tags: [],
      isLoading: false,
    }
  },
  computed: {
    selected: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },
  mounted() {
    this.getTags()
  },
  methods: {
    async getTags() {
      try {
        this.isLoading = true
        const { data } = await this.$axios.get('/tags')

        this.tags = data.tags.sort().map((item) => {
          return {
            name: item,
          }
        })
        this.isLoading = false

        if (this.selected.length > 0) {
          this.tags.unshift(
            ...this.selected.map((item) => {
              return {
                name: item,
              }
            })
          )
        }
      } catch (error) {
        this.isLoading = false
      }
    },
    onCreateTag(tag) {
      this.tags.unshift(tag)
      this.selected.unshift(tag)
    },
  },
}
</script>

<style lang="scss" scoped>
.tags {
  .tags-list {
    max-height: 345px;
    min-height: 345px;
  }
  ::v-deep {
    .custom-checkbox {
      margin-bottom: 14px;
    }
  }
}
</style>
