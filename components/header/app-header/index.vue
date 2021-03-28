<template lang="pug">
.app-header
  .app-header__inner.container
    nuxt-link.app-header__brand(to="/" title="kacbirim.com")
      app-logo.app-header__brandLogo(:width="40" :height="40")
      strong.app-header__brandTitle Kaç Birim?
    app-nav.d-none.d-lg-flex
    nuxt-link.d-lg-none(to="/sponsorluk")
      vs-button(
        type="gradient"
        color="var(--color-interactive-01)"
        icon="ri-heart-fill"
        size="small"
        icon-pack="ri"
        gradient-color-secondary="var(--color-interactive-02)"
        title="Sponsor Ol"
      ) Sponsor Ol
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

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

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
