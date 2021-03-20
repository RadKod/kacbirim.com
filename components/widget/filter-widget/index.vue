<template lang="pug">
vs-card.widget.filter-widget
  template(slot="header")
    span.widget__title Filtreler
  template(slot="media")
    img.widget__banner.filter-widget__banner(src="@/assets/img/elements/thinking.png" alt="Çalışmada" draggable="false")
  p.widget__description.my-base İçerik sayımız henüz çok az, daha fazlası için çalışıyoruz. İçerik sayımız arttığında kolayca filtreleyebilmek için bu özelliği sunacağız..
</template>

<script>
export default {}
</script>

<style lang="scss">
.filter-widget {
  position: relative;
}
</style>
