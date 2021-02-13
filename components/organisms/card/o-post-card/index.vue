<template lang="pug">
.o-rk-post-card
  m-post-card-header(:post="post")
  m-post-card-content(:post="post")
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
.o-rk-post-card {
  position: relative;
  display: block;
  background-color: var(--color-ui-02);
  border-radius: 8px;
  box-shadow: var(--shadow-soft);
}
</style>
