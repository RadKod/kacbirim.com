<template lang="pug">
.m-rk-post-card-header
  a-card-title(:title="post.title")
  x-material-icon(name="more-vert" :size="22")
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.m-rk-post-card-header {
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 12px 14px;

  .a-rk-card-title {
    font-size: 22px;
  }

  .x-material-icon {
    color: var(--color-icon-01);
  }
}
</style>
