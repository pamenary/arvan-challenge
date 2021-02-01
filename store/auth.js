export const state = () => ({
  user: null,
})

export const mutations = {
  SET_USER(state, payload) {
    state.user = payload
  },
}

export const actions = {
  setUser({ commit }, payload) {
    commit('SET_USER', payload)
    this.$axios.setToken(payload.token, 'Token')
  },

  logout({ commit }) {
    localStorage.removeItem('user')
    commit('SET_USER', null)
  },
}
