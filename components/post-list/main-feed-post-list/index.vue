<template lang="pug">
.main-feed-post-list
  template(v-for="post in posts")
    post-card(:post="post")
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: false,
      default: null
    }
  }
}
</script>

<style lang="scss">
.main-feed-post-list {
  position: relative;

  .post-card {
    margin-bottom: calc(var(--base-m-y) * 4);
  }
}
</style>
