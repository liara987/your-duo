<script setup lang="ts">
import { useDisplay } from 'vuetify'

const { smAndUp } = useDisplay()
</script>

<template>
  <img
    :height="smAndUp ? 120 : 100"
    :width="smAndUp ? 120 : 100"
    alt="Your duo logo"
    src="@/assets/logo.png"
  />
</template>
