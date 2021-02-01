export const actions = {
  async nuxtClientInit(store, { req }) {
    let user = localStorage.getItem('user')
    if (user) {
      user = JSON.parse(user)
      await store.dispatch('auth/setUser', user)
      await this.$axios.get('/user')
    }
  },
}
