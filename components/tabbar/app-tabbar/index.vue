<template lang="pug">
nav.app-tabbar
  template(v-for="nav in items")
    nuxt-link.app-tabbar__link(:to="nav.link" :title="nav.title")
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
        },
        {
          title: 'Keşfet',
          link: '/kesfet',
          icon: 'ri-compass-line',
          activeIcon: 'ri-compass-fill'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.app-tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: var(--z-index-tabbar);
  display: flex;
  width: 100%;
  height: var(--tabbar-height);
  background-color: var(--color-ui-02);
  box-shadow: var(--box-shadow-1);

  &__link {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    color: var(--color-icon-01);

    &:active {
      background-color: var(--color-active-01);
    }
  }
}
</style>
