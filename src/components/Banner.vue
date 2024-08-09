<script setup lang="ts">
import { useDisplay } from 'vuetify'

const { smAndUp } = useDisplay()
</script>

<template>
  <v-banner
    lines="two"
    :stacked="false"
    class="d-flex flex-column flex-sm-row justify-space-between px-3 px-sm-8 py-2 py-sm-6 rounded-lg"
  >
    <v-banner-text class="pr-0">
      <h4 class="font-weight-black text-subtitle-1 text-sm-h5">Não encontrou seu duo?</h4>
      <h6 class="text-subtitle-2 text-sm-subtitle-2">
        Publique um anúncio para encontrar novos players!
      </h6>
    </v-banner-text>
    <template v-slot:actions>
      <div class="d-flex align-center justify-center w-100 mt-2 mt-sm-0">
        <v-btn
          class="text-subtitle-2 text-subtitle-sm-1"
          :size="smAndUp ? 'x-large' : 'large'"
          color="primary"
          prepend-icon="mdi-magnify-plus-outline"
          variant="flat"
        >
          Publicar anúncio
        </v-btn>
      </div>
    </template>
  </v-banner>
</template>

<style lang="scss">
div.v-banner-actions {
  margin: 0 !important;
  height: 60px;
  width: 100%;
}

div.v-banner {
  background: linear-gradient(
    90deg,
    rgba(149, 114, 252, 1) 0%,
    rgba(67, 231, 173, 1) 51%,
    rgba(225, 213, 93, 1) 100%
  );
}
</style>
