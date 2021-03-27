<template lang="pug">
.app-preloader(v-if="preloader.isLoading" ref="appPreloader")
  app-logo.mr-1(:width="40" :height="40")
  p Yükleniyor ..
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['preloader'])
  },
  mounted() {
    this.$nextTick(() => {
      if (!this.preloader.isAttached) {
        this.$store.commit('preloader/HIDE_PRELOADER')
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.app-preloader {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: var(--color-ui-03);
}
</style>
