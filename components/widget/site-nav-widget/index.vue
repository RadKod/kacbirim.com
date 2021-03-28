<template lang="pug">
vs-card.widget.site-nav-widget
  template(v-slot:header)
    span.widget__title Sayfalar
  template(v-slot:media)
    block-nav(:items="navItems")
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        {
          title: 'Hakkında',
          link: '/sayfa/hakkinda'
        },
        {
          title: 'İletişim',
          link: '/sayfa/iletisim'
        },
        {
          title: 'Sponsorluk',
          link: '/sponsorluk'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.site-nav-widget {
  position: relative;
  overflow: hidden;
}
</style>
