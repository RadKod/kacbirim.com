<template lang="pug">
footer.app-footer
  .container
    vs-col
      vs-row(vs-justify="space-between" vs-align="center")
        .app-footer__brand.d-flex.align-items-center
          p.app-footer__slogan Uluslararası birim fiyat karşılaştırması.
        .app-footer__publisher
          a.app-footer__publisherLink(href="https://radkod.com" title="RadKod.com")
            span.app-footer__publisherDescription RadKod tarafından
            img.app-footer__publisherLogo(src="@/assets/img/icons/svg/radkod-logo.svg" alt="RadKod" width="30" height="30")
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.app-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: var(--z-index-footer);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: var(--footer-height);
  font-size: 14px;
  background-color: var(--color-ui-02);

  &__slogan {
    color: var(--color-text-04);
  }

  &__publisher {
    color: var(--color-text-04);
  }

  &__publisherLink {
    display: flex;
    align-items: center;
    color: inherit;

    &:hover {
      text-decoration: underline !important;
    }
  }

  &__publisherLogo {
    margin-left: 1rem;
  }
}
</style>
