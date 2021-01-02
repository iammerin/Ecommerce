<template>
  <v-row align="center" justify="center" class="mt-2">
    <v-col cols="10">
      <v-row>
        <v-col cols="3">
          <v-card
            class="mx-auto"
            max-width="300"
            tile
          >
            <v-list disabled>
              <v-subheader>REPORTS</v-subheader>
              <v-list-item-group
                v-model="selectedItem"
                color="primary"
              >
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                >
                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>
        <v-col cols="9">
          <v-carousel
            hide-delimiters
            cycle
            interval="6000"
            progress
            progress-color="primary"
          >
            <v-carousel-item
              v-for="(item, i) in carouselItems"
              :key="i"
            >
              <v-img
                :src="item.src"
                :lazy-src="item.src"
                class="fill-height"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="primary"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'CarouselWithMenu',
  data () {
    return {
      carouselItems: [
        {
          src: 'https://picsum.photos/1100/500?random=1'
        },
        {
          src: 'https://picsum.photos/1100/500?random=2'
        },
        {
          src: 'https://picsum.photos/1100/500?random=3'
        },
        {
          src: 'https://picsum.photos/1100/500?random=4'
        }
      ],
      selectedItem: 1,
      items: [
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' }
      ]
    }
  }
}
</script>

<style></style>
