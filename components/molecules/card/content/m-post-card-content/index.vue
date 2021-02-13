<template lang="pug">
.m-rk-post-card-content
  a-post-card-image(:src="post.image" :alt-text="post.title")
  a-card-title.m-rk-post-card-content__description(:title="post.body")
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

<style lang="scss" scoped>
.m-rk-post-card-content {
  position: relative;

  &__description {
    display: inline-block;
    margin: 16px 0;
    padding: 8px 14px;
    color: var(--color-text-03);
    font-size: 16px;
  }
}
</style>
