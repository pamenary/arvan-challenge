<template>
  <div class="page-login d-flex justify-content-center align-items-center">
    <LoginForm :loading="true" />
  </div>
</template>

<script>
export default {
  layout: 'blank',
}
</script>

<style lang="scss" scoped>
.page-login {
  height: 100vh;
}
</style>
