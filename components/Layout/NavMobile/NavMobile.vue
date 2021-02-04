<template>
  <b-navbar toggleable type="dark" variant="dark" sticky>
    <b-navbar-brand to="/">Arvan Challenge</b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <BIconList />
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item v-for="(item, index) of menu" :key="index" :to="item.link">
          {{ item.label }}
        </b-nav-item>
        <b-nav-item @click="$logout"> Logout </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import mainMenu from '@/config/sidebar'
import { BIconList } from 'bootstrap-vue'

export default {
  components: {
    BIconList,
  },
  data() {
    return {
      menu: [],
    }
  },
  mounted() {
    mainMenu.forEach((element) => {
      this.menu.push(...element.subMenu)
    })
  },
}
</script>

<style lang="scss" scoped></style>
