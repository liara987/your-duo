<script setup lang="ts">
import Header from '../components/Header.vue'
</script>

<template>
  <main>
    <Header />
    <section class="find-duo">
      <h1 class="find-duo__title">Find your duo here!</h1>
      <h2 class="find-duo__subtitle">Select a game you want to play...</h2>
    </section>
  </main>
</template>

<style lang="scss">
main {
  display: flex;
  align-items: center;
  flex-direction: column;

  Header {
    margin-top: 4.625rem;
  }

  .find-duo {
    margin-top: 3rem;
    display: flex;
    align-items: start;
    flex-direction: column;

    &__title {
      font-size: 1.5rem;
      font-weight: 900;
      line-height: 38px;
      letter-spacing: -0.47px;
    }
    
    &__subtitle {
      font-size: 1rem;
      font-weight: 400;
      color: var(--color-subtext);
      
      line-height: 26px;      
      letter-spacing: -0.18px;
    }
  }
}
</style>
