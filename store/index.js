export const actions = {
  async nuxtClientInit(store, { req }) {
    let user = localStorage.getItem('user')
    if (user) {
      user = JSON.parse(user)
      await store.dispatch('auth/setUser', user)
      const { data } = await this.$axios.get('/user')
      localStorage.setItem('user', JSON.stringify(data.user))
      store.dispatch('auth/setUser', data.user)
    }
  },
}
