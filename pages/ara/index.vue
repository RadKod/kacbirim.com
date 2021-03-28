<template lang="pug">
.page.page--search
  basic-state-block(
    title="Yakında"
    description="İçerik sayımız henüz çok az, daha fazlası için çalışıyoruz. İçerik sayımız arttığında kolayca filtreleyebilmek için bu özelliği sunacağız.."
  )
    template(v-slot:head)
      img(src="@/assets/img/elements/thinking.png" alt="Çalışmada" draggable="false")
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.page {
  position: relative;

  .basic-state-block {
    max-width: 40rem;
    margin: 0 auto;
  }
}
</style>
