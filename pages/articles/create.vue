<template>
  <div class="page-article-create">
    <PageTitle title="New Article" />
    <ArticleForm
      v-model="form"
      class="mt-4"
      :is-loading="isLoading"
      @submit="onSubmit"
    />
  </div>
</template>

<script>
export default {
  middleware: 'authenticated',
  data() {
    return {
      form: {
        tagList: [],
      },
      isLoading: false,
    }
  },
  head: {
    title: 'New Article',
  },
  methods: {
    async onSubmit(form) {
      try {
        this.isLoading = true
        await this.$axios.post('/articles', {
          article: {
            ...form,
          },
        })
        this.isLoading = false
        this.$bvToast.toast('Well done! Article created successfuly', {
          title: 'New Article',
          variant: 'success',
          solid: true,
        })
        this.$router.push('/articles')
      } catch (error) {
        this.isLoading = false
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
