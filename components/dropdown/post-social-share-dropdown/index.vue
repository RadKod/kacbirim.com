<template lang="pug">
.post-social-share-dropdown
  dropdown-menu(direction="right" dropup withDropdownCloser)
    template(v-slot:trigger)
      vs-button(type="gradient" color="dark" icon="ios_share") Paylaş
    template(v-slot:body)
      ul.post-social-share-dropdown-list
        // Copy Url
        vs-button.post-social-share-dropdown-list__item.post-social-share-dropdown-list__item--copyUrl(
          type="flat"
          color="dark"
          icon="ri-link"
          dropdown-closer
          size="medium"
          icon-pack="ri"
          v-clipboard:copy="url"
          v-clipboard:success="showSuccessMessageCopyPostLink"
          v-clipboard:error="showErrorMessageCopyPostLink"
        ) Bağlantıyı Kopyala

        // Twitter
        vs-button.post-social-share-dropdown-list__item.post-social-share-dropdown-list__item--twitter(
          type="flat"
          color="dark"
          icon="ri-twitter-fill"
          size="medium"
          icon-pack="ri"
          dropdown-closer
          @click.native="share(twitterShareUrl)"
        ) Twitter

        // Facebook
        vs-button.post-social-share-dropdown-list__item.post-social-share-dropdown-list__item--facebook(
          type="flat"
          color="dark"
          icon="ri-facebook-fill"
          size="medium"
          icon-pack="ri"
          dropdown-closer
          @click.native="share(facebookShareUrl)"
        ) Facebook

        // Whatsapp
        vs-button.post-social-share-dropdown-list__item.post-social-share-dropdown-list__item--whatsapp(
          type="flat"
          color="dark"
          icon="ri-whatsapp-fill"
          size="medium"
          icon-pack="ri"
          dropdown-closer
          @click.native="share(whatsappShareUrl)"
        ) Whatsapp

        // Telegram
        vs-button.post-social-share-dropdown-list__item.post-social-share-dropdown-list__item--telegram(
          type="flat"
          color="dark"
          icon="ri-telegram-fill"
          size="medium"
          icon-pack="ri"
          dropdown-closer
          @click.native="share(telegramShareUrl)"
        ) Telegram
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: false,
      default: ''
    },
    title: {
      type: String,
      required: false,
      default: ''
    },
    tags: {
      type: [Array, String],
      required: false,
      default: null
    }
  },
  computed: {
    twitterShareUrl() {
      return this.tags
        ? `https://twitter.com/share?url=${this.url}&text=${this.title}&via=kacbirim&hashtags=${this.tags}`
        : `https://twitter.com/share?url=${this.url}&text=${this.title}&via=kacbirim`
    },
    facebookShareUrl() {
      return `https://facebook.com/sharer.php?u=${this.url}`
    },
    whatsappShareUrl() {
      return `https://api.whatsapp.com/send?text=${this.url}`
    },
    telegramShareUrl() {
      return `https://telegram.me/share/url?url=${this.url}&text=${this.title}`
    }
  },
  methods: {
    share(url) {
      window.open(url, '_blank')
    },
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
.post-social-share-dropdown {
  position: relative;

  .v-dropdown-menu {
    &__container {
      margin-bottom: calc(var(--base-m-y) / 2);
      border-radius: var(--border-radius-base);
    }
  }

  &-list {
    position: relative;

    &__item {
      display: flex;
      justify-content: flex-start;
      width: 100%;
      font-size: 14px;
      font-family: inherit;
      border-radius: 0;

      .vs-button {
        &--icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          margin-right: 0.6rem !important;
          color: var(--color-icon-02);
          font-size: 18px;
          background-color: #222;
          border-radius: 100%;
        }
      }

      &--copyUrl {
        .vs-button {
          &--icon {
            background-color: var(--color-copyUrl-01);
          }
        }
      }

      &--twitter {
        .vs-button {
          &--icon {
            background-color: var(--color-twitter-01);
          }
        }
      }

      &--facebook {
        .vs-button {
          &--icon {
            background-color: var(--color-facebook-01);
          }
        }
      }

      &--whatsapp {
        .vs-button {
          &--icon {
            background-color: var(--color-whatsapp-01);
          }
        }
      }

      &--telegram {
        .vs-button {
          &--icon {
            background-color: var(--color-telegram-01);
          }
        }
      }
    }
  }
}
</style>
