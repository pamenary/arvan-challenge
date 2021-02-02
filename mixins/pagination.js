export default {
  data() {
    return {
      total: 50,
      perPage: 10,
      page: 1,
    }
  },
  computed: {
    defaultParams() {
      return {
        offset: this.page === 1 ? 0 : (this.page - 1) * this.perPage,
        limit: this.perPage,
      }
    },
  },
  mounted() {
    this.getList()
  },
}
