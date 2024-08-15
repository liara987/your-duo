<script setup lang="ts">
import { ref, watch } from 'vue'
import { useDisplay } from 'vuetify'
import _debounce from 'lodash/debounce'
import axios from 'axios'
const API_KEY = import.meta.env.VITE_GIANT_BOMB_REG_TOKEN

const { smAndUp } = useDisplay()
const dialog = defineModel<boolean>({ default: false })

interface Props {
  games: [{ name: string }]
  disabled: boolean
  gameName?: string
  nickName: string
  howLongPlaysQuantity?: string
  howLongPlaysTime?: string
  socialMedia: string
  daysPlay?: [string]
  gameList: string[]
  timePlay?: [string]
}

const formDuo = ref<Props>({
  games: [{ name: '' }],
  disabled: false,
  gameName: undefined,
  nickName: '',
  howLongPlaysQuantity: undefined,
  howLongPlaysTime: undefined,
  socialMedia: '',
  daysPlay: undefined,
  gameList: [''],
  timePlay: undefined
})

const search = ref(null)
const rules = [
  (value: any) => {
    if (value) {
      formDuo.value.disabled = false
      return true
    } else {
      formDuo.value.disabled = true
      return 'This field is required.'
    }
  }
]

watch(
  () => formDuo.value.gameName as String,
  (newVal) => {
    console.log(newVal)

    updateModel(newVal)
  }
)

const updateModel = _debounce(async (newVal) => {
  const req = await axios.get(`
          https://www.giantbomb.com/api/search/?
          api_key=${API_KEY}&
          format=json&
          sort=game:desc&
          field_list=name,platforms&
          resources=game&
          filter=platforms:94&
          query=${newVal}
          `)
  formDuo.value.games = req.data.results
  formDuo.value.gameList = clearArray()
  formDuo.value.games.map((game: { name: string }) => {
    formDuo.value.gameList.push(game.name)
  })

  formDuo.value.gameList = removeDuplicatedNames(formDuo.value.gameList)
}, 500)

function removeDuplicatedNames(gameData: string[]): string[] {
  return gameData.filter((item, index) => gameData.indexOf(item) === index)
}

function clearArray(): string[] {
  return []
}
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
          <span class="font-weight-black text-h6 text-sm-h5" background="red">Publish duo</span>
        </template>
        <v-card-text>
          <v-row dense>
            <v-col cols="12">
              <v-combobox
                v-model:search="search"
                :hide-no-data="false"
                v-model="formDuo.gameName"
                label="* Game name"
                variant="underlined"
                placeholder="Valorant"
                :items="formDuo.gameList"
                :rules="rules"
                auto-select-first
                clearable
                required
              >
                <template v-slot:no-data>
                  <v-list-item>
                    <v-list-item-title>
                      No results matching "<strong>{{ search }}</strong
                      >". Press <kbd>enter</kbd> to create a new one
                    </v-list-item-title>
                  </v-list-item>
                </template>
              </v-combobox>
            </v-col>

            <v-col cols="12">
              <v-text-field
                label="* What is your nickname?"
                clearable
                variant="underlined"
                placeholder="NightShadow8742"
                :rules="rules"
                v-model="formDuo.nickName"
                required
              ></v-text-field>
            </v-col>

            <v-label text="How long do you play?" class="pl-1"></v-label>
            <v-col cols="12" class="d-flex">
              <v-col cols="6">
                <v-select
                  label="Quantity"
                  :items="['1', '2', '3', '4', '5', '5+']"
                  variant="underlined"
                  v-model="formDuo.howLongPlaysQuantity"
                ></v-select>
              </v-col>
              <v-col cols="6">
                <v-select
                  label="Time"
                  :items="['day', 'week', 'month', 'year']"
                  variant="underlined"
                  v-model="formDuo.howLongPlaysTime"
                ></v-select>
              </v-col>
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
                v-model="formDuo.daysPlay"
                multiple
              ></v-autocomplete>
            </v-col>

            <v-col cols="12" sm="3">
              <v-text-field
                label="When do you play?"
                hide-details="auto"
                variant="underlined"
                type="time"
                v-model="formDuo.timePlay"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                label="Social media contact"
                clearable
                variant="underlined"
                placeholder="discord or steam or twitch etc..."
                v-model="formDuo.socialMedia"
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
            :disabled="formDuo.disabled"
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
