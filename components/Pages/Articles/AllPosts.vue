<template>
  <div class="all-posts">
    <b-table
      head-variant="light"
      hover
      :items="posts"
      :fields="fields"
      :busy="isLoading"
    >
      <template #cell(id)="{ index }">
        {{ index + 1 }}
      </template>

      <template #cell(author)="{ item }">
        @{{ item.author.username }}
      </template>

      <template #cell(tags)="{ item }">
        {{ item.tagList.join(', ') }}
      </template>

      <template #cell(createdAt)="{ item }">
        {{ item.createdAt | dateFormat }}
      </template>

      <template #cell(action)="{ item }">
        <div class="text-right">
          <b-dropdown right text="... " variant="primary" size="sm">
            <b-dropdown-item :to="`/articles/edit/${item.slug}`">
              Edit
            </b-dropdown-item>
            <b-dropdown-divider />
            <b-dropdown-item @click="onDelete(item)">Delete</b-dropdown-item>
          </b-dropdown>
        </div>
      </template>

      <template #table-busy>
        <div class="text-center my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
    </b-table>

    <b-pagination
      v-model="page"
      :total-rows="total"
      :per-page="perPage"
      :limit="4"
      hide-ellipsis
      hide-goto-end-buttons
      align="center"
      @change="onChangePage"
    />
  </div>
</template>

<script>
import paginationMixin from '@/mixins/pagination'

export default {
  mixins: [paginationMixin],
  data() {
    return {
      fields: [
        {
          key: 'id',
          label: '#',
        },
        {
          key: 'title',
          label: 'Title',
        },
        {
          key: 'author',
          label: 'Author',
        },
        {
          key: 'tags',
          label: 'Tags',
        },
        {
          key: 'createdAt',
          label: 'Created',
        },
        {
          key: 'action',
          label: '',
        },
      ],
      posts: [],
      isLoading: false,
      page: this.$route.params.articlesPage
        ? this.$route.params.articlesPage
        : 1,
    }
  },
  methods: {
    async getList() {
      try {
        this.isLoading = true
        const { data } = await this.$axios.get('/articles', {
          params: this.defaultParams,
        })
        this.posts = data.articles
        this.total = data.articlesCount
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
      }
    },
    onChangePage(page) {
      this.$router.push(`/articles/page/${page}`)
    },
    onDelete(item) {},
  },
}
</script>

<style lang="scss" scoped>
.all-posts {
}
</style>
