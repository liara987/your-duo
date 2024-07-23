<template>
  <v-sheet class="mx-auto" elevation="8" max-width="100%">
    <v-slide-group
      min-width="0"
      v-model="model"
      selected-class="bg-primary"
      show-arrows
      center-active
    >
      <v-slide-group-item v-for="n in 15" :key="n" v-slot="{ isSelected, toggle, selectedClass }">
        <v-card
          :class="['ma-3', selectedClass]"
          color="grey-lighten-1"
          height="290"
          width="200"
          border-xl
          @click="toggle"
        >
          <img
            height="100%"
            width="100%"
            src="https://upload.wikimedia.org/wikipedia/pt/4/43/Capa_do_jogo_Starfield.jpg"
            alt=""
          />
        </v-card>
      </v-slide-group-item>
    </v-slide-group>

    <v-expand-transition>
      <v-sheet v-if="model != null" height="200">
        <div class="d-flex fill-height align-center justify-center">
          <h3 class="text-h6">Selected {{ model }}</h3>
        </div>
      </v-sheet>
    </v-expand-transition>
  </v-sheet>
</template>
<script>
export default {
  data: () => ({
    model: null
  })
}
</script>
