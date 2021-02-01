export default {
  computed: {
    $user() {
      if (this.$store.state.auth.user) {
        return this.$store.state.auth.user
      }
    },
    $isLogin() {
      return !!this.$store.state.auth.user?.token
    },
    $token() {
      return this.$store.state.auth.user?.token
    },
  },
  methods: {
    $logout() {
      this.$store.dispatch('auth/logout')
      localStorage.removeItem('user')
      this.$router.push('/login')
    },
  },
}
