<template lang="pug">
.page.page--countries
  basic-state-block(
    title="Yakında"
    description="Burayı senin için hazırlıyoruz. Yakında bu alanda ülkelerin asgari ücret verileri, asgari ücret çalışan sayısı oranları gibi değerleri görebileceksin."
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
