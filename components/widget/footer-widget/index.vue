<template lang="pug">
footer.widget.footer-widget
  p.footer-widget__description
    | kacbirim.com - Uluslararası birim fiyat karşılaştırması.
    <br>
  nav.footer-widget__nav
    template(v-for="nav in navItems")
      nuxt-link.footer-widget__navLink(:to="nav.link" :title="nav.title") {{ nav.title }}
  .footer-widget__radkod
    a.footer-widget__radkodLogo(href="https://radkod.com" title="Startup Ekibi" target="_blank")
      img.footer-widget__radkodLogoImage(src="@/assets/img/icons/svg/radkod-logo.svg" alt="RadKod" width="28")
      strong.footer-widget__radkodLogoTitle RadKod
    span &nbsp;tarafından.
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        {
          title: 'Hakkında',
          link: '/sayfa/hakkinda'
        },
        {
          title: 'İletişim',
          link: '/sayfa/iletisim'
        },
        {
          title: 'Bülten Aboneliği',
          link: '/bulten-aboneligi'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.footer-widget {
  position: relative;

  &__description {
    margin-bottom: var(--base-m-y);
    color: var(--color-text-03);
    font-size: 12px;
  }

  &__nav {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: var(--base-m-y);
  }

  &__navLink {
    position: relative;
    margin-right: calc(var(--base-m-x) / 4);
    color: var(--color-text-07);
    font-size: 12px;

    &:hover {
      color: var(--color-text-01);
    }

    &::after {
      margin-left: calc(var(--base-m-x) / 4);
      color: var(--color-text-07);
      content: '•';
    }

    &:last-child {
      &::after {
        display: none;
      }
    }
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
