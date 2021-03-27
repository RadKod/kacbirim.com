<template lang="pug">
.state-block.basic-state-block
  .basic-state-block__head(v-if="$slots.head")
    slot(name="head")
  .basic-state-block__body
    h3 {{ title }}
    p {{ description }}
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: null
    },
    description: {
      type: String,
      required: false,
      default: null
    }
  }
}
</script>

<style lang="scss">
.basic-state-block {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__head {
    margin-bottom: calc(var(--base-m-y) * 2);

    img {
      display: block;
      max-width: 100%;
    }
  }

  &__body {
    position: relative;
    display: block;
    text-align: center;
  }
}
</style>
