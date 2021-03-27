<template lang="pug">
vs-card.widget.sponsor-widget
  template(slot="header")
    span.widget__title Sponsor Olun
  template(slot="media")
    .sponsor-widget__banner
      img.sponsor-widget__bannerBg(src="@/assets/img/elements/sponsors-hero-bg-1600.jpg" alt="RadKod Sponsorluk" draggable="false")
      img.sponsor-widget__bannerOctocat(src="@/assets/img/elements/sponsors-mona.svg" alt="RadKod Sponsorluk" draggable="false")
  p.widget__description Açık kaynak ve kamu yararına olan diğer bir çok projenin sürekliliği için <strong>RadKod</strong> Ekibine bağış yapabilirsin.
  template(slot="footer")
    vs-row(vs-justify="flex-end" vs-align="center")
      nuxt-link(to="/sponsorluk")
        vs-button(
          type="gradient"
          color="var(--color-interactive-01)"
          icon="ri-heart-fill"
          icon-pack="ri"
          gradient-color-secondary="var(--color-interactive-02)"
          title="Sponsor Ol"
        ) Sponsor Ol
</template>

<script>
export default {}
</script>

<style lang="scss">
.sponsor-widget {
  position: relative;

  &__banner {
    position: static;
    width: 100%;
    height: auto;
  }

  &__bannerBg {
    width: 100%;
    height: 100%;
  }

  &__bannerOctocat {
    position: absolute;
    top: 0;
    right: 0;
    width: 40% !important;
    animation: flyingOctocat 4s linear both infinite;
  }

  @keyframes flyingOctocat {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(5px) translateX(1px);
    }

    100% {
      transform: translateY(0);
    }
  }
}
</style>
