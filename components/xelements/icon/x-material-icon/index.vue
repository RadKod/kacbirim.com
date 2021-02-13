<template lang="pug">
i.x-material-icon(:class="iconClass" :style="{ 'font-size': `${size}px` }")
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      required: false,
      default: 16
    }
  },
  computed: {
    iconClass() {
      return `zmdi zmdi-${this.name}`
    }
  }
}
</script>
