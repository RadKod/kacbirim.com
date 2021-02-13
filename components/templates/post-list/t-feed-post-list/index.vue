<template lang="pug">
.t-rk-feed-post-list
  template(v-for="post in posts")
    o-post-card(:post="post")
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
.t-rk-feed-post-list {
  position: relative;

  .o-rk-post-card {
    margin-bottom: 40px;
  }
}
</style>
