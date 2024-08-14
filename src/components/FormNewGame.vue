<script setup lang="ts">
import { useDisplay } from 'vuetify'
import { onBeforeMount, ref } from 'vue'
import axios from 'axios'

const API_KEY = import.meta.env.VITE_GIANT_BOMB_REG_TOKEN
const dialog = defineModel<boolean>({ default: false })
const { smAndUp } = useDisplay()
const games = ref<[{ name: string }]>([{ name: '' }])
const disabled = ref<boolean>(false)
const gameName = ref<string>()
const nickName = ref<string>()
const howLongPlays = ref<string>()
const socialMedia = ref<string>()
const daysPlay = ref<[]>()
const gameList = ref<[string]>([''])
const timePlay = ref<string>('00:00:00')

const rules = [
  (value: any) => {
    if (value) {
      disabled.value = false
      return true
    } else {
      disabled.value = true
      return 'This field is required.'
    }
  }
]

onBeforeMount(async () => {
  const req = await axios.get(`
  https://www.giantbomb.com/api/games/?
  api_key=${API_KEY}&
  format=json&
  sort=game:desc&
  field_list=name,platforms&
  resources=game&
  &filter=platforms:94
  `)
  games.value = req.data.results

  games.value.map((game: { name: string }, index: number) => {
    gameList.value.push(game.name)
  })
})
</script>

<template>
  <div class="pa-4 text-center">
    <v-dialog v-model="dialog" max-width="600" transition="dialog-bottom-transition" persistent>
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
          class="text-subtitle-1"
          :size="smAndUp ? 'x-large' : 'large'"
          color="primary"
          prepend-icon="mdi-magnify-plus-outline"
          variant="flat"
          v-bind="activatorProps"
        >
          Announce a duo
        </v-btn>
      </template>

      <v-card>
        <template v-slot:title>
          <span class="font-weight-black text-h6 text-sm-h5" background="red"
            >Publish an announce</span
          >
        </template>
        <v-card-text>
          <v-row dense>
            <v-col cols="12">
              <v-text-field                
                label="* Game name"
                clearable
                variant="underlined"
                placeholder="Fortnite"
                :rules="rules"
                v-model="gameName"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                label="* What is your nickname?"
                clearable
                variant="underlined"
                placeholder="NightShadow8742"
                :rules="rules"
                v-model="nickName"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                label="How long do you play?"
                clearable
                variant="underlined"
                placeholder="3 Years or 2 weeks etc... "
                v-model="howLongPlays"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                label="Social media contact"
                clearable
                variant="underlined"
                placeholder="discord or steam or twitch etc..."
                v-model="socialMedia"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="9">
              <v-autocomplete
                :items="[
                  'Friday',
                  'Saturday',
                  'Sunday',
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday'
                ]"
                label="Days that you play"
                variant="underlined"
                v-model="daysPlay"
                multiple
              ></v-autocomplete>
            </v-col>

            <v-col cols="12" sm="3">
              <v-text-field
                label="When do you play?"
                hide-details="auto"
                variant="underlined"
                type="time"
                v-model="timePlay"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="d-flex justify-center justify-sm-end">
          <v-btn
            text="Cancel"
            variant="flat"
            @click="dialog = false"
            color="color-subtext"
            size="large"
            rounded="x-large"
            class="text-subtitle-1 font-weight-medium"
          ></v-btn>

          <v-btn
            class="text-subtitle-1 ml-4 font-weight-medium"
            color="primary"
            prepend-icon="mdi-gamepad-variant-outline"
            variant="flat"
            size="large"
            rounded="x-large"
            text="Find duo"
            @click="dialog = false"
            :disabled="disabled"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<style lang="scss">
div.v-card-title {
  background: none;
  height: 100%;
}
</style>
