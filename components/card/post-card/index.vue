<template lang="pug">
vs-card.post-card
  .post-card__header(slot="header")
    app-logo.post-card__avatar.mr-base(:width="32" :height="32")
    strong.post-card__userFirstName Kaç Birim?
  .post-card__media(slot="media")
    img.post-card__image(:src="post.image" draggable="false" :alt="post.description || 'kacbirim.com'")
  .post-card__info
    p.post-card__description(v-if="post.description") {{ post.description }}
    template(v-if="post.tags && post.tags.length > 0")
      .post-card__tags
        template(v-for="tag in post.tags")
          nuxt-link.post-card__tag(:to="`/etiket/${tag.slug}`" :title="tag.name") {{ `#${tag.name}` }}
    vs-divider
    time.post-card__time
      vs-icon(color="var(--color-text-03)" icon="access_time" size="16px")
      | Karşılaştırma Tarihi: {{ $moment(post.comparison_date).format('DD.MM.YYYY') }}
  .post-card__footer(slot="footer")
    vs-row.post-card__actions(vs-justify="flex-end")
      vs-button.post-card__actionButton(
        type="gradient"
        color="dark"
        icon="link"
        v-clipboard:copy="`${domain}/${post.slug}`"
        v-clipboard:success="showSuccessMessageCopyPostLink"
        v-clipboard:error="showErrorMessageCopyPostLink"
      ) Bağlantısını Kopyala
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      domain: process.env.DOMAIN
    }
  },
  methods: {
    showSuccessMessageCopyPostLink() {
      this.$izitoast.success({ title: 'Kalıcı bağlantı başarıyla kopyalandı.' })
    },
    showErrorMessageCopyPostLink() {
      this.$izitoast.error({ title: 'Bağlantı kopyalama başarısız oldu.' })
    }
  }
}
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
