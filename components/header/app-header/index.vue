<template lang="pug">
.app-header
  .container
    nuxt-link.app-header__brand(to="/" title="kacbirim.com")
      app-logo.app-header__brandLogo(:width="40" :height="40")
      strong.app-header__brandTitle kacbirim.com
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-index-header);
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--header-height);
  background-color: var(--color-ui-02);

  &__brand {
    display: flex;
    align-items: center;
    color: var(--color-text-03);
  }

  &__brandLogo {
    margin-right: 1rem;
  }

  &__brandTitle {
    color: var(--color-text-01);
    font-size: 20px;
  }
}
</style>
