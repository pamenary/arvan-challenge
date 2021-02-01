<template>
  <div class="page-register d-flex justify-content-center align-items-center">
    <RegisterForm :loading="true" />
  </div>
</template>

<script>
export default {
  layout: 'blank',
}
</script>

<style lang="scss" scoped>
.page-register {
  height: 100vh;
}
</style>
