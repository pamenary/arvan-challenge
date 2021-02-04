<template>
  <div class="page-login d-flex justify-content-center align-items-center">
    <LoginForm :is-loading="isLoading" @submit="onSubmit" />
  </div>
</template>

<script>
export default {
  layout: 'blank',
  middleware: 'notAuthenticated',
  data() {
    return {
      isLoading: false,
    }
  },
  head: {
    title: 'Login',
  },
  methods: {
    async onSubmit(form) {
      try {
        this.isLoading = true
        const { data } = await this.$axios.post('/users/login', {
          user: {
            ...form,
          },
        })
        this.isLoading = false
        localStorage.setItem('user', JSON.stringify(data.user))
        this.$store.dispatch('auth/setUser', data.user)
        this.$router.push('/')
      } catch (error) {
        this.isLoading = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.page-login {
  height: 100vh;
}
</style>
