<template lang="pug">
.main-feed-post-list
  template(v-if="posts.length > 0")
    .post-card__observer.post-card__observer--pushStateRemover(
      v-if="posts.length > 0"
      v-observe-visibility="(isVisible) => removePushState(isVisible)"
    ) Observer
    template(v-for="(post, index) in posts")
      post-card(:post="post")
        template(v-slot:observer)
          client-only
            .post-card__observer(
              v-if="posts.length > 0 && index > 0"
              v-observe-visibility="(isVisible, entry) => setPushState(isVisible, entry, post)"
            ) Observer
  template(v-else)
    p Henüz post yok..
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: false,
      default: null
    }
  },
  methods: {
    setPushState(isVisible, entry, post) {
      this.$nextTick(() => {
        if (isVisible) {
          window.history.pushState(null, 'postCardObserverPushState', `/${post.slug}`)
        }
      })
    },
    removePushState(isVisible) {
      if (isVisible) {
        window.history.pushState(null, 'postCardObserverPushState', `/`)
      }
    }
  }
}
</script>

<style lang="scss">
.main-feed-post-list {
  position: relative;

  .post-card {
    $post-card: '.post-card';

    margin-bottom: calc(var(--base-m-y) * 4);

    &__observer {
      &--pushStateRemover {
        top: unset;
        left: unset;
        background-color: #f0f;
        transform: unset;
      }
    }
  }
}
</style>
