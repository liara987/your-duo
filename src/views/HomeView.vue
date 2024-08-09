<script setup lang="ts">
import Banner from '@/components/Banner.vue'
import Header from '../components/Header.vue'
import Slider from '../components/Slider.vue'
</script>

<template>
  <main class="d-flex flex-column align-center">
    <Header class="mt-5" />
    <section class="mb-5 d-flex align-center flex-column">
      <h1 class="text-h4 font-weight-black">Find your duo here!</h1>
      <h2 class="text-subtitle-1 text-color-subtext">Select a game you want to play...</h2>
    </section>
    <section class="d-flex justify-center mb-8 w-100">
      <Slider />
    </section>
    <section class="w-100 mb-16">
      <Banner />
    </section>
  </main>
</template>

<style lang="scss">
.title {
  font-size: 1.5rem;
  font-weight: 900;
  line-height: 38px;
  letter-spacing: -0.47px;
}

.subtitle {
  font-size: 1rem;
  font-weight: 400;
  color: var(--color-subtext);
  line-height: 26px;
  letter-spacing: -0.18px;
}
</style>
