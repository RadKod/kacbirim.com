<template lang="pug">
nav.app-nav
  template(v-for="nav in items")
    nuxt-link.app-nav__link(:to="nav.link" :title="nav.title")
      template(v-if="$route.path === nav.link")
        vs-icon(:icon="nav.activeIcon" size="28px" icon-pack="ri")
      template(v-else)
        vs-icon(:icon="nav.icon" size="28px" icon-pack="ri")
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Anasayfa',
          link: '/',
          icon: 'ri-home-5-line',
          activeIcon: 'ri-home-5-fill'
        },
        {
          title: 'Ara',
          link: '/ara',
          icon: 'ri-search-line',
          activeIcon: 'ri-search-fill'
        },
        {
          title: 'Ülkeler',
          link: '/ulkeler',
          icon: 'ri-global-line',
          activeIcon: 'ri-global-fill'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.app-nav {
  display: flex;

  &__link {
    display: flex;
    align-items: center;
    margin-left: calc(var(--base-m-x) * 2);
    color: var(--color-icon-01);
  }
}
</style>
