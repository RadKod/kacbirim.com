<template lang="pug">
footer.widget.footer-widget
  p.footer-widget__description
    | kacbirim.com - Uluslararası birim fiyat karşılaştırması.
    <br>
  .footer-widget__radkod
    a.footer-widget__radkodLogo(href="https://radkod.com" title="Startup Ekibi" target="_blank")
      img.footer-widget__radkodLogoImage(src="@/assets/img/icons/svg/radkod-logo.svg" alt="RadKod" width="28")
      strong.footer-widget__radkodLogoTitle RadKod
    span &nbsp;tarafından.
</template>

<script>
export default {}
</script>

<style lang="scss">
.footer-widget {
  position: relative;

  &__description {
    margin-bottom: var(--base-m-y);
    color: var(--color-text-03);
    font-size: 12px;
  }

  &__radkod {
    display: flex;
    align-items: center;
    color: var(--color-text-02);
  }

  &__radkodLogo {
    display: flex;
    align-items: center;
  }

  &__radkodLogoImage {
    margin-right: 0.4rem;
  }

  &__radkodLogoTitle {
    color: var(--color-text-02);
  }
}
</style>
