<template>
  <aside class="sidebar">
    <div class="nice-scroll d-flex flex-column">
      <MenuGroup v-for="group of mainMenu" :key="group.slug" :group="group" />
    </div>
  </aside>
</template>

<script>
import mainMenu from '@/config/sidebar'
export default {
  data() {
    return {
      mainMenu,
    }
  },
}
</script>

<style lang="scss" scoped>
.sidebar {
  background-color: $water-blue-color;
  position: fixed;
  width: 250px;
  height: 100vh;
  top: 0;
  left: 0;
  .nice-scroll {
    height: calc(100vh - 60px);
    margin-top: 60px;
  }
}
</style>
