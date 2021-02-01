<template>
  <header class="header">
    <b-container
      fluid
      class="d-flex align-items-center justify-content-between"
    >
      <div class="left-side d-flex">
        <div class="logo">Arvan Challenge</div>
        <Welcome class="ml-4" />
      </div>
      <div class="right-side">
        <b-button variant="outline-primary" @click="$logout">Logout</b-button>
      </div>
    </b-container>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header {
  background-color: $charcoal-grey-color;
  position: fixed;
  z-index: 1;
  line-height: 60px;
  color: #fff;
  width: 100%;
  .logo {
    font-size: 22px;
    user-select: none;
  }
}
</style>
