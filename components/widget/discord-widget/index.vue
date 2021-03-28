<template lang="pug">
vs-card.widget.discord-widget
  template(slot="header")
    span.widget__title Discord Sunucumuza Katılın
  template(slot="media")
    img.widget__banner.discord-widget__banner.mb-base(src="@/assets/img/elements/discord_1.gif" alt="Community" draggable="false")
  p.widget__description Bazen yazılım hakkında konuşuruz, bazen oyun oynarız, <strong>RadKod</strong> discord sunucumuza katılabilirsin.
  template(slot="footer")
    vs-row(vs-justify="flex-end" vs-align="center")
      vs-button(
        type="gradient"
        color="var(--color-discord-01)"
        icon="ri-discord-fill"
        icon-pack="ri"
        gradient-color-secondary="var(--color-discord-02)"
        title="RadKod Discord Sunucusu"
        :href="{ url: 'https://discord.gg/GeNbfbJkfM' }"
        target
      ) Discord Sunucumuza Katıl
</template>

<script>
export default {}
</script>

<style lang="scss">
.discord-widget {
  position: relative;

  &__banner {
    position: relative;
    width: 100%;
    height: auto;
  }
}
</style>
