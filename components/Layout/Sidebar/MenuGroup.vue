<template>
  <div class="menu-group">
    <div class="title">
      {{ group.title }}
    </div>

    <ul>
      <li v-for="(item, index) of group.subMenu" :key="index">
        <nuxt-link :to="item.link">
          {{ item.label }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    group: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.menu-group {
  color: #fff;
  margin-top: 13px;
  .title {
    padding-left: 18px;
    font-size: 22px;
    user-select: none;
  }
  ul {
    padding: 0;
    margin-top: 27px;
    li {
      list-style: none;
      a {
        padding-left: 18px;
        display: block;
        line-height: 43px;
        color: #fff;
        &.nuxt-link-exact-active,
        &:hover {
          background-color: rgba(255, 255, 255, 0.15);
          text-decoration: none;
        }
      }
    }
  }
}
</style>
