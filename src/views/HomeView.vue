<script setup lang="ts">
import Banner from '@/components/Banner.vue'
import Logo from '@/components/Logo.vue'
import Slider from '@/components/Slider.vue'
</script>

<template>
  <main class="d-flex flex-column align-center">
    <Logo class="mt-3 mt-sm-5" />
    <section class="mb-3 mb-sm-5 d-flex align-center flex-column">
      <h1 class="text-h6 text-sm-h4 font-weight-black">
        Find your duo here!
      </h1>
      <h2 class="text-subtitle-1 text-sm-h6 text-color-subtext">
        Select a game you want to play...
      </h2>
    </section>
    <section class="d-flex justify-center mb-8 w-100">
      <Slider />
    </section>
    <section class="w-100 mb-16">
      <Banner />
    </section>    
  </main>
</template>

<style lang="scss"></style>
