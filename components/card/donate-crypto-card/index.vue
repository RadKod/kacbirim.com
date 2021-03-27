<template lang="pug">
.donate-crypto-card
  h4.donate-crypto-card__title {{ title }}
  p.donate-crypto-card__description {{ description }}
  vs-button.donate-with-crypto-trigger(
    ref="donateTriggerButton"
    type="gradient"
    color="var(--color-interactive-01)"
    icon="ri-heart-fill"
    size="large"
    icon-pack="ri"
    gradient-color-secondary="var(--color-interactive-02)"
    :title="buttonText"
    :disabled="isLoadingDonateModal"
    @click="openDonateModal"
  )
    span.d-flex.align-items-center(v-if="isLoadingDonateModal")
      preloader-spinner.donate-with-crypto-trigger__loadingIcon
      span Yükleniyor..
    span(v-else) {{ buttonText }}
  .donate-with-crypto-wrapper
    a.donate-with-crypto(ref="donateWithCrypto" :href="link")
    script(src="https://commerce.coinbase.com/v1/checkout.js?version=201807" defer).
    a.donate-crypto-card__alternativeLink(:href="link" target="_blank") Eğer yukardaki buton çalışmıyorsa bu bağlantıyı kullanabilirsin.
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    buttonText: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isLoadingDonateModal: false
    }
  },
  head() {
    return {
      title: 'Sponsorluk - Kaç Birim?'
    }
  },
  methods: {
    openDonateModal() {
      this.$el.querySelector('.donate-with-crypto').click()
      this.isLoadingDonateModal = true
      setTimeout(() => {
        this.isLoadingDonateModal = false
      }, 2000)
    }
  }
}
</script>

<style lang="scss">
.donate-crypto-card {
  position: relative;

  &__description {
    margin: calc(var(--base-m-y) / 2) 0;
  }

  .donate-with-crypto-trigger {
    margin-bottom: calc(var(--base-m-y) / 2);

    &__loadingIcon {
      margin: 0 0.4rem 0 0;
      filter: invert(1);
    }
  }

  .donate-with-crypto {
    position: fixed;
    width: auto;
    height: auto;
    padding: 0;
    background: transparent;
    visibility: hidden;
    opacity: 0;
    transition: none;

    &:active {
      padding: 0 !important;
    }

    &__button {
      @include mq($until: tablet) {
        font-size: 12px;
      }
    }
  }

  &__alternativeLink {
    display: table;
    clear: both;
    color: var(--color-text-02);
    font-size: 12px;
    text-decoration: underline !important;

    &:hover {
      color: var(--color-text-03);
    }
  }
}
</style>
