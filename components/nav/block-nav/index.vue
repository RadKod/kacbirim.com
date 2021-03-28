<template lang="pug">
nav.block-nav
  template(v-for="nav in items")
    nuxt-link.block-nav__link(:to="nav.link" :title="nav.title")
      .block-nav__linkIcon(v-if="nav.icon")
        template(v-if="$route.path === nav.link")
          vs-icon(:icon="nav.activeIcon" size="26px" icon-pack="ri")
        template(v-else)
          vs-icon(:icon="nav.icon" size="26px" icon-pack="ri")
      span.block-nav__linkTitle {{ nav.title }}
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
.block-nav {
  display: flex;
  flex-direction: column;

  &__link {
    display: flex;
    align-items: center;
    padding: calc(var(--base-p-y) / 2) calc(var(--base-p-x) / 1);
    color: var(--color-icon-01);
    background-color: transparent;

    &:hover {
      background-color: var(--color-hover-01);
    }

    &.nuxt-link-exact-active {
      background-color: var(--color-active-01);
    }
  }

  &__linkIcon {
    display: flex;
    margin-right: 0.6rem;
  }

  &__linkTitle {
    font-size: 16px;
  }
}
</style>
