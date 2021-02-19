<template>
  <v-row
    align="center"
    justify="center"
    class="mt-2"
  >
    <v-col cols="10">
      <v-row class="ThisOneOverHere">
        <v-col cols="12">
          <v-card elevation="24">
            <v-carousel
              hide-delimiters
              cycle
              interval="6000"
              progress
              progress-color="primary"
              height="73vh"
            >
              <v-carousel-item
                v-for="(item, i) in carouselItems"
                :key="i"
              >
                <v-img
                  :src="item.src"
                  :lazy-src="item.src"
                  class="fill-height"
                  max-width="100vw"
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
                  <v-col>
                    <v-sheet
                      color="transparent"
                      height="72vh"
                      class="d-flex align-content-end flex-wrap"
                      tile
                    >
                      <div class="pa-5">
                        <v-btn
                          text
                          :to="item.src"
                          :class="shopClasses"
                          @mouseover="hoverOver"
                          @mouseout="hoverOut"
                        >
                          Shop Now!
                        </v-btn>
                      </div>
                    </v-sheet>
                  </v-col>
                </v-img>
              </v-carousel-item>
            </v-carousel>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import 'animate.css'
export default {
  name: 'CarouselWithMenu',
  methods: {
    hoverOver () {
      this.shopClasses = ['text-h4', 'text-capitalize', 'animate__animated', 'animate__tada']
    },
    hoverOut () {
      this.shopClasses = ['text-h4', 'text-capitalize']
    }
  },
  data () {
    return {
      shopClasses: ['text-h4', 'text-capitalize'],
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
        {
          items: [
            { title: 'Dresses' },
            { title: 'Handbags' },
            { title: 'Shoes' },
            { title: 'Jackets' },
            { title: 'Shirts' }
          ],
          active: true,
          title: 'Clothing'
        },
        {
          items: [
            { title: 'Gaming' },
            { title: 'Laptop Skins' },
            { title: 'Apple' },
            { title: 'Dell' },
            { title: 'Lenovo' },
            { title: 'Microsoft' },
            { title: 'Asus' },
            { title: 'Adapters' },
            { title: 'Batteries' }
          ],
          title: 'Electronics'
        },
        {
          items: [
            { title: 'Sport Wear' },
            { title: 'Shorts' },
            { title: 'School Bags' },
            { title: 'Wipes' },
            { title: 'Footwear' },
            { title: 'Toys' },
            { title: 'Bags' },
            { title: 'Blazzers' }
          ],
          title: 'Education'
        },
        {
          items: [
            { title: 'Sport Wear' },
            { title: 'Shorts' },
            { title: 'School Bags' },
            { title: 'Wipes' },
            { title: 'Footwear' },
            { title: 'Toys' },
            { title: 'Bags' },
            { title: 'Blazzers' }
          ],
          title: 'Family'
        },
        {
          items: [
            { title: 'Sport Wear' },
            { title: 'Shorts' },
            { title: 'School Bags' },
            { title: 'Wipes' },
            { title: 'Footwear' },
            { title: 'Toys' },
            { title: 'Bags' },
            { title: 'Blazzers' }
          ],
          title: 'Health'
        },
        {
          items: [
            { title: 'Chair' },
            { title: 'Desk' },
            { title: 'Stamps' }
          ],
          title: 'Office'
        },
        {
          items: [
            { title: 'Sport Wear' },
            { title: 'Shorts' },
            { title: 'School Bags' },
            { title: 'Wipes' },
            { title: 'Footwear' },
            { title: 'Toys' },
            { title: 'Bags' },
            { title: 'Blazzers' }
          ],
          title: 'Promotions'
        }
      ]
    }
  }
}
</script>

<style>
.navigationMenu {
  overflow-y: none;
}
</style>
