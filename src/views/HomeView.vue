<script setup lang="ts">
import Header from '../components/Header.vue'
import Slider from '../components/Slider.vue'
</script>

<template>
  <main class="d-flex flex-column align-center">
    <Header class="mt-16" />
    <section class="mt-12 mb-5 d-flex align-start flex-column">
      <h1 class="title">Find your duo here!</h1>
      <h2 class="subtitle">Select a game you want to play...</h2>
    </section>
    <section class="d-flex justify-center mb-16 w-100">
      <Slider />
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
