<template>
  <v-sheet class="rounded-lg" elevation="8" max-width="100vw" rounded-xl centerjustify-center>
    <v-slide-group v-model="model" show-arrows center-active>
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
            {{ cards[Number(model)].title }} - {{ cards[Number(model)].description }}
          </p>
        </div>
      </v-sheet>
    </v-expand-transition>
  </v-sheet>
</template>

<script setup lang="ts">
const model = defineModel()
const cards = [
  {
    title: 'Starfield',
    src: 'https://upload.wikimedia.org/wikipedia/pt/4/43/Capa_do_jogo_Starfield.jpg',
    description:
      'Lorem ipsum odor amet, consectetuer adipiscing elit. Lobortis varius arcu venenatis faucibus vivamus massa consequat. Vestibulum nullam luctus iaculis id eros aliquet tempor pretium dignissim. Auctor habitant sapien molestie litora hendrerit justo purus. Ut interdum dapibus imperdiet curabitur rutrum vulputate quam laoreet? Hac placerat praesent suspendisse morbi dolor tortor. Nibh duis nisl pulvinar finibus porttitor tortor. Duis vulputate pretium eleifend taciti hendrerit dictumst efficitur fames. Luctus proin magna sollicitudin integer mi class. Bibendum proin montes per ultrices id consectetur iaculis penatibus.'
  },
  {
    title: 'Soulcalibur 6',
    src: 'https://assetsio.gnwcdn.com/soulcalibur_box_art.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp',
    description:
      'Lorem ipsum odor amet, consectetuer adipiscing elit. Lobortis varius arcu venenatis faucibus vivamus massa consequat. Vestibulum nullam luctus iaculis id eros aliquet tempor pretium dignissim. Auctor habitant sapien molestie litora hendrerit justo purus. Ut interdum dapibus imperdiet curabitur rutrum vulputate quam laoreet? Hac placerat praesent suspendisse morbi dolor tortor. Nibh duis nisl pulvinar finibus porttitor tortor. Duis vulputate pretium eleifend taciti hendrerit dictumst efficitur fames. Luctus proin magna sollicitudin integer mi class. Bibendum proin montes per ultrices id consectetur iaculis penatibus.'
  },
  {
    title: 'Monster Hunter World Iceborne',
    src: 'https://www.adrenaline.com.br/wp-content/uploads/2023/08/monster-hunter-world-iceborne-capa.jpg',
    description:
      'Lorem ipsum odor amet, consectetuer adipiscing elit. Lobortis varius arcu venenatis faucibus vivamus massa consequat. Vestibulum nullam luctus iaculis id eros aliquet tempor pretium dignissim. Auctor habitant sapien molestie litora hendrerit justo purus. Ut interdum dapibus imperdiet curabitur rutrum vulputate quam laoreet? Hac placerat praesent suspendisse morbi dolor tortor. Nibh duis nisl pulvinar finibus porttitor tortor. Duis vulputate pretium eleifend taciti hendrerit dictumst efficitur fames. Luctus proin magna sollicitudin integer mi class. Bibendum proin montes per ultrices id consectetur iaculis penatibus.'
  },
  {
    title: 'Valorant',
    src: 'https://files.tecnoblog.net/wp-content/uploads/2021/06/Beta-Key-Art_VALORANT-1060x596.jpg',
    description:
      'Lorem ipsum odor amet, consectetuer adipiscing elit. Lobortis varius arcu venenatis faucibus vivamus massa consequat. Vestibulum nullam luctus iaculis id eros aliquet tempor pretium dignissim. Auctor habitant sapien molestie litora hendrerit justo purus. Ut interdum dapibus imperdiet curabitur rutrum vulputate quam laoreet? Hac placerat praesent suspendisse morbi dolor tortor. Nibh duis nisl pulvinar finibus porttitor tortor. Duis vulputate pretium eleifend taciti hendrerit dictumst efficitur fames. Luctus proin magna sollicitudin integer mi class. Bibendum proin montes per ultrices id consectetur iaculis penatibus.'
  },
  {
    title: 'Tekken 8',
    src: 'https://image.api.playstation.com/vulcan/ap/rnd/202212/1621/rCvLik1PKDSoCaEvTIx42H3Q.png',
    description:
      'Lorem ipsum odor amet, consectetuer adipiscing elit. Lobortis varius arcu venenatis faucibus vivamus massa consequat. Vestibulum nullam luctus iaculis id eros aliquet tempor pretium dignissim. Auctor habitant sapien molestie litora hendrerit justo purus. Ut interdum dapibus imperdiet curabitur rutrum vulputate quam laoreet? Hac placerat praesent suspendisse morbi dolor tortor. Nibh duis nisl pulvinar finibus porttitor tortor. Duis vulputate pretium eleifend taciti hendrerit dictumst efficitur fames. Luctus proin magna sollicitudin integer mi class. Bibendum proin montes per ultrices id consectetur iaculis penatibus.'
  },
  {
    title: 'Street Fighter 6',
    src: 'https://i0.wp.com/ovicio.com.br/wp-content/uploads/2022/12/20221216-ovicio-street-capa.jpg?resize=555%2C555&ssl=1',
    description:
      'Lorem ipsum odor amet, consectetuer adipiscing elit. Lobortis varius arcu venenatis faucibus vivamus massa consequat. Vestibulum nullam luctus iaculis id eros aliquet tempor pretium dignissim. Auctor habitant sapien molestie litora hendrerit justo purus. Ut interdum dapibus imperdiet curabitur rutrum vulputate quam laoreet? Hac placerat praesent suspendisse morbi dolor tortor. Nibh duis nisl pulvinar finibus porttitor tortor. Duis vulputate pretium eleifend taciti hendrerit dictumst efficitur fames. Luctus proin magna sollicitudin integer mi class. Bibendum proin montes per ultrices id consectetur iaculis penatibus.'
  }
]
</script>
