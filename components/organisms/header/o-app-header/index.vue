<template lang="pug">
.o-rk-app-header
  a-app-logo
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.o-rk-app-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-index-header);
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--header-height);
  padding: 0 16px;
  background-color: var(--color-ui-02);
  border-bottom: 1px solid var(--color-border-02);
}
</style>
