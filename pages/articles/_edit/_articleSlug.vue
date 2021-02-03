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
  mounted() {
    this.getArticle()
  },
  methods: {
    async getArticle() {
      try {
        const slug = this.$route.params.articleSlug
        const { data } = await this.$axios.get(`/articles/${slug}`)
        this.form = data.article
      } catch (error) {}
    },
    async onSubmit(form) {
      try {
        const slug = this.$route.params.articleSlug
        this.isLoading = true
        await this.$axios.put(`/articles/${slug}`, {
          article: {
            ...form,
          },
        })
        this.isLoading = false
        this.$bvToast.toast('Well done! Article updated successfuly', {
          title: 'Article updated',
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
