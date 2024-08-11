<script setup lang="ts">
import { useDisplay } from 'vuetify'

const dialog = defineModel<boolean>({ default: false })
const { smAndUp } = useDisplay()

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
          Publicar anúncio
        </v-btn>
      </template>

      <v-card>
        <template v-slot:title>
          <span class="font-weight-black text-h5" background="red">Publique um anúncio</span>
        </template>
        <v-card-text>
          <v-row dense>
            <v-col cols="12">
              <v-text-field
                label="Nome do Jogo*"
                required
                clearable
                variant="underlined"
                placeholder="Fortnite"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                label="Qual seu nome? (nickname)*"
                required
                clearable
                variant="underlined"
                placeholder="NightShadow8742"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                label="A quanto tempo joga?"
                clearable
                variant="underlined"
                placeholder="3 Anos"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                label="Rede social para contato*"
                required
                clearable
                variant="underlined"
                placeholder="discord, steam, twitch etc..."
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="9">
              <v-autocomplete
                :items="['sexta', 'sabado', 'domingo', 'segunda', 'terça', 'quarta', 'quinta']"
                label="Dias da semana que joga"
                variant="underlined"
                multiple
              ></v-autocomplete>
            </v-col>

            <v-col cols="12" sm="3">
              <v-text-field
                label="Qual horário joga?"
                hide-details="auto"
                model-value="00:00:00"
                variant="underlined"
                type="time"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text="Cancelar"
            variant="flat"
            @click="dialog = false"
            color="color-subtext"
            size="large"
            rounded="x-large"
            class="text-subtitle-1 font-weight-medium"
          ></v-btn>

          <!-- <v-btn color="primary" text="Save" variant="tonal" @click="dialog = false"></v-btn> -->
          <v-btn
            @click="dialog = false"
            class="text-subtitle-1 ml-4 font-weight-medium"
            color="primary"
            prepend-icon="mdi-gamepad-variant-outline"
            variant="flat"
            size="large"
            rounded="x-large"
            text="Encontrar duo"
            disabled
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
