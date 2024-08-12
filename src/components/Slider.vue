<script setup lang="ts">
import { useDisplay } from 'vuetify'
import { ref } from 'vue'
import data from '../../database.json'

interface cardType {
  title: string
  src: string
  description: string
}

const model = defineModel()
const cards = ref<cardType[]>(data)
const { smAndUp } = useDisplay()
</script>

<template>
  <v-sheet width="100%" center justify-center>
    <v-slide-group v-model="model" show-arrows center-active>
      <v-slide-group-item v-for="card in cards" v-slot="{ toggle, selectedClass }">
        <v-card
          class="bg-primary"
          :class="['ma-sm-3 ma-2', selectedClass]"
          color="grey-lighten-1"
          :height="smAndUp ? 290 : 270"
          :width="smAndUp ? 200 : 180"
          rounded-lg
          @click="toggle"
        >
          <v-img
            :src="card.src"
            :alt="card.title"
            class="d-flex align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="100%"
            width="100%"
            cover
          >
            <v-card-title
              class="px-2 py-1 px-sm-4 py-sm-2 text-white text-sm-h6 text-subtitle-1 align-content-end"
              v-text="card.title"
            ></v-card-title>
            <template v-slot:placeholder>
              <div class="d-flex align-center justify-center fill-height">
                <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
              </div>
            </template>
          </v-img>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>

    <v-expand-transition>
      <v-sheet v-if="model != null" height="auto">
        <div class="d-flex flex-column fill-height align-center justify-center">
          <h3 class="text-sm-h6 text-subtitle-1 mt-sm-3">{{ cards[Number(model)].title }}</h3>
          <p class="text-subtitle-2 text-sm-body-1 pa-3 pa-sm-6">
            {{ cards[Number(model)].description }}
          </p>
        </div>
      </v-sheet>
    </v-expand-transition>
  </v-sheet>
</template>

<style>
div.v-sheet {
  background: transparent;
  box-shadow: none !important;
}

.v-card-title {
  height: 4rem;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%);
}
</style>
