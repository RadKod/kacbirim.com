<template lang="pug">
vs-card.widget.github-widget
  template(slot="header")
    span.widget__title GitHub'da Biz
  template(slot="media")
    img.widget__banner.discord-widget__banner.mb-base(src="@/assets/img/elements/github_1.png" alt="Community" draggable="false")
  p.widget__description RadKod startup ekibi olarak çözüm ürettiğimiz projeleri daima GitHub profilimizde yayınlarız. Bu proje dahil açık kaynak bir çok projeye profilimizden erişebilirsin.
  template(slot="footer")
    vs-row(vs-justify="flex-end" vs-align="center")
      vs-button(
        type="gradient"
        color="var(--color-github-01)"
        icon="ri-github-fill"
        icon-pack="ri"
        gradient-color-secondary="var(--color-github-01)"
        title="RadKod GitHub Profili"
        :href="{ url: 'https://github.com/RadKod' }"
        target
      ) GitHub Profilimize Bak
</template>

<script>
export default {}
</script>

<style lang="scss">
.github-widget {
  position: relative;

  &__banner {
    position: relative;
    width: 100%;
    height: auto;
  }
}
</style>
