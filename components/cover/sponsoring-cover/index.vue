<template lang="pug">
.sponsoring-cover
  img.sponsoring-cover__bg(src="@/assets/img/elements/sponsors-hero-bg-1600.jpg" alt="RadKod Sponsorluk" draggable="false")
  img.sponsoring-cover__octocat(src="@/assets/img/elements/sponsors-mona.svg" alt="RadKod Sponsorluk" draggable="false")
  h1.sponsoring-cover__title Sponsorluk
</template>

<script>
export default {}
</script>

<style lang="scss">
.sponsoring-cover {
  position: relative;
  display: block;
  width: 100%;
  height: auto;

  &__bg {
    width: 100%;
    height: 400px;
    object-fit: cover;
    object-position: 0 80%;
    @include mq($until: tablet) {
      height: 250px;
    }
  }

  &__octocat {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 300px;
    animation: flyingOctocatInCover 4s linear both infinite;
    @include mq($until: tablet) {
      width: 150px;
    }
  }

  &__title {
    font-size: 3rem;
    @include center(true, true);
  }

  @keyframes flyingOctocatInCover {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(20px) translateX(5px);
    }

    100% {
      transform: translateY(0);
    }
  }
}
</style>
