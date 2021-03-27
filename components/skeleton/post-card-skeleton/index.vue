<template lang="html">
  <div class="skeleton post-card-skeleton">
    <content-loader :width="400" :height="460" :speed="2" primary-color="#ddd" secondary-color="#eee">
      <circle cx="19" cy="21" r="12" />
      <rect x="42" y="16" rx="2" ry="2" width="140" height="10" />
      <rect x="0" y="42" rx="2" ry="2" width="400" height="320" />
      <rect x="21" y="380" rx="0" ry="0" width="354" height="12" />
      <rect x="21" y="400" rx="0" ry="0" width="354" height="12" />
      <rect x="21" y="420" rx="0" ry="0" width="184" height="12" />
    </content-loader>
  </div>
</template>

<script>
import { ContentLoader } from 'vue-content-loader'

export default {
  components: { ContentLoader }
}
</script>

<style lang="scss" scoped>
.post-card-skeleton {
  background-color: var(--color-ui-02);
  border-radius: var(--border-radius-base);
}
</style>
