<script setup lang="ts">
import data from '../../database.json'

interface cardType {
  title: string
  src: string
  description: string
}

const model = defineModel()
const cards: cardType[] = data
</script>

<template>
  <v-sheet class="rounded-lg" elevation="8" max-width="100%" rounded-xl center justify-center>
    <v-slide-group class="p-10" v-model="model" show-arrows center-active>
      <v-slide-group-item v-for="card in cards" v-slot="{ isSelected, toggle, selectedClass }">
        <v-card
          class="bg-primary"
          :class="['ma-3', selectedClass]"
          color="grey-lighten-1"
          height="290"
          width="200"
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
            <v-card-title class="text-white" v-text="card.title"></v-card-title>
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
          <h3 class="text-h6">{{ cards[Number(model)].title }}</h3>
          <p class="text-body-1 pa-6">
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
</style>
