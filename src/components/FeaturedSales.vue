<template>
  <v-row
    align="center"
    justify="center"
    class="mt-5"
  >
    <v-col cols="10">
      <v-row class="mt-5 mb-10">
        <v-divider />
      </v-row>
      <v-row>
        <div class="text-h4">
          Flash Sale
        </div>
      </v-row>
      <v-row
        align="center"
        justify="center"
      >
        <v-card
          class="subheader pa-2"
          width="400px"
        >
          <v-card-text>
            On Sale Now
            <v-spacer />
            {{ time }}
          </v-card-text>
        </v-card>
      </v-row>
      <v-row class="mt-10 mb-10">
        <v-card
          width="500"
          height="300"
          v-for="(images, index) in salesImages"
          :key="index"
          class="mr-5"
        >
          <v-img
            :src="images.url"
            :lazy-src="images.url"
            :alt="images.alt"
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
                />
              </v-row>
            </template>
          </v-img>
        </v-card>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'FeaturedSales',
  data () {
    return {
      salesImages: [
        {
          url: 'https://picsum.photos//500/300?random=11',
          alt: 'Product name'
        },
        { url: 'https://picsum.photos/500/300?random=12', alt: 'Product name' },
        { url: 'https://picsum.photos/500/300?random=13', alt: 'Product name' }
      ],
      time: 50
    }
  },
  method: {
    timeRemaining () {
      if (this.time > 0) {
        setTimeout(() => {
          this.time -= 1
          this.timeRemaining()
        }, 1000)
      }
    }
  },
  created () {
    this.timeRemaining()
  }
}
</script>

<style></style>
