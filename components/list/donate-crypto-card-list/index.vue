<template lang="pug">
.donate-crypto-card-list
  template(v-for="card in list")
    donate-crypto-card(:title="card.title" :description="card.description" :link="card.link" :buttonText="card.buttonText")
</template>

<script>
export default {
  data() {
    return {
      list: [
        /* {
          title: 'Niye mi aldım 5 Mülyonu?',
          description: '5₺ değerinde kripto para bağışla. Küçük iyidir.',
          link: 'https://commerce.coinbase.com/checkout/6eee31be-dc6e-43b3-8688-6771fff58b99',
          buttonText: '5₺'
        },
        {
          title: '10₺ Bağışla',
          description: '10₺ değerinde kripto para bağışla. Bi filtre kahve alabiliriz.',
          link: 'https://commerce.coinbase.com/checkout/9cb99a2f-f9d9-489b-b69a-810755738559',
          buttonText: '10₺'
        }, */
        {
          title: '50₺ Bağışla',
          description: '50₺ değerinde kripto para bağışla.',
          link: 'https://commerce.coinbase.com/checkout/ea3686e7-6586-4dc1-bfd6-1135d516d7c7',
          buttonText: '50₺'
        },
        {
          title: '100₺ Bağışla',
          description: '100₺ değerinde kripto para bağışla. Bunu çok iyi bir şey için kullanacağız.',
          link: 'https://commerce.coinbase.com/checkout/638a603d-acc8-4f40-bf42-6533bb145b3d',
          buttonText: '100₺'
        },
        {
          title: 'İstediğin Kadar Bağışla',
          description: 'Dilediğin miktarda kripto para bağışla. Her an her şey olabilir.',
          link: 'https://commerce.coinbase.com/checkout/9cde6a2c-b479-4d90-bec4-36979be786fb',
          buttonText: 'DİLEDİĞİN MİKTARDA KRİPTO PARA BAĞIŞLA'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.donate-crypto-card-list {
  .donate-crypto-card {
    margin-bottom: calc(var(--base-m-y) * 2);
    padding-bottom: var(--base-p-y);
    border-bottom: 3px solid var(--color-border-01);

    &:last-child {
      padding-bottom: 0;
      border-bottom: 0;
    }
  }
}
</style>
