<template>
  <div class="page-register d-flex justify-content-center align-items-center">
    <RegisterForm :is-loading="isLoading" @submit="onSubmit" />
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
  methods: {
    async onSubmit(form) {
      try {
        this.isLoading = true
        const { data } = await this.$axios.post('/users/', {
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
.page-register {
  height: 100vh;
}
</style>
