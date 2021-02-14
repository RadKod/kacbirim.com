<template lang="pug">
vs-card.post-card
  .post-card__header(slot="header")
    app-logo.post-card__avatar.mr-base(:width="32" :height="32")
    strong.post-card__userFirstName Kaç Birim?
  .post-card__media(slot="media")
    img.post-card__image(src="@/assets/img/elements/kacbirim_com_template.fw.png" draggable="false")
  .post-card__info
    p.post-card__description Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    .post-card__tags
      nuxt-link.post-card__tag(to="/" title="tag") #80000
      nuxt-link.post-card__tag(to="/" title="tag") #araba
    vs-divider
    time.post-card__time
      vs-icon(color="var(--color-text-03)" icon="access_time" size="16px")
      | Karşılaştırma Tarihi: 12.04.2021
  .post-card__footer(slot="footer")
    vs-row.post-card__actions(vs-justify="flex-end")
      vs-button.post-card__actionButton(type="gradient" color="dark" icon="link") Bağlantısını Kopyala
</template>

<script>
export default {}
</script>

<style lang="scss">
.post-card {
  position: relative;
  border: 1px solid var(--color-border-01);
  box-shadow: var(--box-shadow-base);

  &__header {
    display: flex;
    align-items: center;
  }

  &__image {
    width: 100%;
    height: auto;
    background-color: var(--color-ui-01);
  }

  &__info {
    padding: var(--base-p-y) var(--base-p-x);
    padding-bottom: 0;
  }

  &__description {
    color: var(--color-text-03);
    font-size: 14px;
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
    word-wrap: break-word;
  }

  &__tag {
    margin-right: 0.4rem;
  }

  &__time {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    color: var(--color-text-03);
    font-size: 12px;

    i {
      margin-right: 0.4rem;
    }
  }
}
</style>
