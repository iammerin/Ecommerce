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
        <v-col>
          <div class="text-h4">
            Flash Sale
          </div>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="8">
          <v-card flat>
            <v-card-text class="text-h6">
              On Sale Now
              <v-chip
                class="ma-2"
                color="red"
                text-color="white"
              >
                {{ time }}
              </v-chip>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card
            flat
            class="text-h6"
            style="margin-right: 20px;"
          >
            <v-card-text
              class="text-h6"
              style="text-align: right!important; margin-right: 20px;"
            >
              <v-btn
                text
                to="flashSale"
                :class="flashSalesClasses"
                @mouseover="hoverOver"
                @mouseout="hoverOut"
              >
                Show More
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="mt-2 mb-10">
        <v-col
          v-for="(images, index) in salesImages"
          :key="index"
          cols="4"
        >
          <v-card
            height="300"
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
        </v-col>
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
      time: 0,
      flashSalesClasses: ['text-h4', 'text-capitalize'],
      deadline: new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000)
    }
  },
  methods: {
    initializeClock () {
      const timeinterval = setInterval(() => {
        const t = this.timeRemaining()
        this.time = t.days + ' Days ' +
                    t.hours + ' Hrs ' +
                    t.minutes + ' Min ' +
                    t.seconds + ' Sec '
        if (t.total <= 0) {
          clearInterval(timeinterval)
        }
      }, 1000)
    },
    timeRemaining () {
      const total = Date.parse(this.deadline) - Date.parse(new Date())
      const seconds = Math.floor((total / 1000) % 60)
      const minutes = Math.floor((total / 1000 / 60) % 60)
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
      const days = Math.floor(total / (1000 * 60 * 60 * 24))
      return {
        total,
        days,
        hours,
        minutes,
        seconds
      }
    },
    hoverOver () {
      this.flashSalesClasses = ['text-h4', 'text-capitalize', 'animate__animated', 'animate__tada']
    },
    hoverOut () {
      this.flashSalesClasses = ['text-h4', 'text-capitalize']
    }
  },
  mounted () {
    this.initializeClock()
  }
}
</script>

<style></style>
