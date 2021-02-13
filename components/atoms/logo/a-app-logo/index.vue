<template lang="pug">
.a-rk-app-logo
  span rk-nuxt-atomic-design-starter
    x-material-icon(name="star-circle" :size="32")
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.a-rk-app-logo {
  display: flex;
  align-items: center;
  color: #012353;
  font-size: 2em;

  i {
    margin-left: 14px;
  }
}
</style>
