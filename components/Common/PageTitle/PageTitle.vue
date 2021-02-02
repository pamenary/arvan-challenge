<template>
  <div class="title">
    <span>{{ title }}</span>

    <div v-if="hasSlotData" class="content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  computed: {
    hasSlotData() {
      return this.$slots.default
    },
  },
}
</script>

<style lang="scss" scoped>
.title {
  > span {
    font-size: 40px;
    color: #000;
  }
}
</style>
