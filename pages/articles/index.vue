<template>
  <div class="page-articles">
    <PageTitle title="All Posts" />
    <AllPosts class="mt-4" />
  </div>
</template>

<script>
export default {
  middleware: 'authenticated',
  head: {
    title: 'All Posts',
  },
}
</script>

<style lang="scss" scoped></style>
