<template>
  <div class="layout-default">
    <Header class="header-desktop" />
    <NavMobile class="header-mobile" />
    <Sidebar class="sidebar-desktop" />
    <main class="main-content">
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.main-content {
  margin-left: 250px;
  padding: 24px 30px;
  padding-top: 84px;
}
@media (max-width: 1025px) {
  .sidebar-desktop,
  .header-desktop {
    display: none;
  }

  .main-content {
    padding: 15px;
    padding-top: 25px;
    margin-left: 0;
  }
}
@media (min-width: 1026px) {
  .header-mobile {
    display: none;
  }
}
</style>
