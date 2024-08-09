<script setup lang="ts"></script>
<template>
  <v-banner
    lines="two"
    :stacked="false"
    class="d-flex justify-space-between px-8 py-6 rounded-lg"
  >
    <v-banner-text>
      <h4 class="font-weight-black text-h5">Não encontrou seu duo?</h4>
      <h6 class="text-subtitle-1">Publique um anúncio para encontrar novos players!</h6>
    </v-banner-text>
    <template v-slot:actions>
      <div class="d-flex align-center height-screen">
        <v-btn
          class="text-subtitle-1"
          size="large"
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
