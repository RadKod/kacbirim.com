<template lang="pug">
.main-feed-post-list
  post-card(v-for="i in 4")
</template>

<script>
export default {}
</script>

<style lang="scss">
.main-feed-post-list {
  position: relative;

  .post-card {
    margin-bottom: calc(var(--base-m-y) * 4);
  }
}
</style>
