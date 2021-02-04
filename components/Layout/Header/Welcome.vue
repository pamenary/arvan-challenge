<template>
  <span class="welcome">{{ welcome }}</span>
</template>

<script>
export default {
  computed: {
    welcome() {
      return `Welcome ${this.$user?.username}`
    },
  },
}
</script>

<style lang="scss" scoped></style>
