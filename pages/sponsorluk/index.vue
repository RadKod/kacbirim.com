<template lang="pug">
.page.page--sponsoring
  sponsoring-cover
  .container
    h2 Desteğinle Buradayız
    br
    p Kaç Birim? - kacbirim.com projesi şu anda kar amacı gütmeyen bir projedir. Açık kaynak ve kamu yararına olan diğer bir çok projenin sürekliliği için <strong>RadKod</strong> Ekibine bağış yapabilirsin.
    br
    p Türkiye'de ne yazık ki Paypal veya Stripe gibi platformlar desteklenmiyor. Bu nedenle bağışları kripto para ödemeleri ile kabul ediyoruz. Alt tarafta yer alan butonlardan her hangi birine tıklayarak ödeme işlemini başlatabilirsin. Kripto para ödemelerinde global bir platform olan Coinbase aracılığını kullanıyoruz, ek olarak bağışçının bilgilerini elde etmek her ne kadar zor olsa da bunları tespit ettiğimiz takdirde senin bilgilerine bu sayfada oluşturacağımız sponsor listesinde yer vereceğiz.
    br
    small Dipnot: Paribu, Btctürk gibi yerli platformlar BTC, ETH gibi yüksek hacimli coinler için düşük miktarlarda transfer desteklemez. Düşük miktarlar için LTC'yi seçebilir ya da özgür cüzdanlar üzerinden transfer yapabilirsiniz.
    br
    donate-crypto-card-list.my-2
</template>

<script>
export default {
  layout: 'full',
  head() {
    return {
      title: 'Sponsorluk - Kaç Birim?'
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
}
</style>
