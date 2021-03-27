<template lang="pug">
.page.page--sponsoring
  sponsoring-cover
  .container
    h2 Desteğinle Buradayız
    br
    p Kaç Birim? - kacbirim.com projesi şu anda kar amacı gütmeyen bir projedir. Açık kaynak ve kamu yararına olan diğer bir çok projenin sürekliliği için <strong>RadKod</strong> Ekibine bağış yapabilirsin.
    br
    p Türkiye'de ne yazık ki Paypal veya Stripe gibi platformlar desteklenmiyor. Bu nedenle bağışları kripto para ödemeleri ile kabul ediyoruz. Alt tarafta yer alan butona tıklayarak ödeme işlemini başlatabilirsin. Kripto para ödemelerinde bağışçının bilgilerini elde etmek her ne kadar zor olsa da bunları tespit ettiğimiz takdirde senin bilgilerine bu sayfada oluşturacağımız sponsor listesinde yer vereceğiz.
    br
    vs-button.donate-with-crypto-trigger(
      ref="donateTriggerButton"
      type="gradient"
      color="var(--color-interactive-01)"
      icon="ri-heart-fill"
      size="large"
      icon-pack="ri"
      gradient-color-secondary="var(--color-interactive-02)"
      title="KRİPTO PARA İLE BAĞIŞ YAP"
      :disabled="isLoadingDonateModal"
      @click="openDonateModal"
    )
      span.d-flex.align-items-center(v-if="isLoadingDonateModal")
        preloader-spinner.donate-with-crypto-trigger__loadingIcon
        span Yükleniyor..
      span(v-else) KRİPTO PARA İLE BAĞIŞ YAPMAK İÇİN TIKLA
    .donate-crypto
      a.donate-with-crypto(ref="donateWithCrypto" href="https://commerce.coinbase.com/checkout/9cde6a2c-b479-4d90-bec4-36979be786fb")
      script(src="https://commerce.coinbase.com/v1/checkout.js?version=201807" defer).
      a.donate-crypto__alternativeLink(href="https://commerce.coinbase.com/checkout/9cde6a2c-b479-4d90-bec4-36979be786fb" target="_blank") Eğer yukardaki buton çalışmıyorsa bu bağlantıyı kullanabilirsin.
</template>

<script>
export default {
  layout: 'full',
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

<style lang="scss" scoped>
.page {
  position: relative;

  .sponsoring-cover {
    margin-bottom: calc(var(--base-m-y) * 3);
  }

  .donate-with-crypto-trigger {
    margin-bottom: var(--base-m-y);

    &__loadingIcon {
      margin: 0 0.4rem 0 0;
      filter: invert(1);
    }
  }

  .donate-crypto {
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
}
</style>
