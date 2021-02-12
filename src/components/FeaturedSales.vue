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
      <v-card
        elevation="1"
        class="mt-2 pa-0"
        v-if="checkMobileDesktop"
      >
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
                  id="animateButton"
                  height="60"
                >
                  <div id="btn">
                    <span class="noselect">
                      Show More
                    </span>
                    <div id="circle" />
                  </div>
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
      <v-card
        elevation="1"
        class="mt-2 pa-0"
        v-else
      >
        <v-row no-gutters>
          <v-col cols="12">
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
        </v-row>
        <v-row class="text-left mt-0 mb-5">
          <v-col cols="12">
            <v-card
              flat
              class="text-h6"
            >
              <v-card-text
                class="text-h6"
              >
                <v-btn
                  text
                  to="flashSale"
                  :class="flashSalesClasses"
                  @mouseover="hoverOver"
                  @mouseout="hoverOut"
                  id="animateButton"
                  height="60"
                >
                  <div id="btn">
                    <span class="noselect">
                      Show More
                    </span>
                    <div id="circle" />
                  </div>
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
      <v-row class="mt-2 mb-10">
        <v-carousel
          hide-delimiters
          light
          cycle
        >
          <template v-slot:prev="{ on, attrs }">
            <v-btn
              color="primary white--text"
              small
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>
                mdi-arrow-left-bold-circle-outline
              </v-icon>
            </v-btn>
          </template>
          <template v-slot:next="{ on, attrs }">
            <v-btn
              color="primary white--text"
              small
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>
                mdi-arrow-right-bold-circle-outline
              </v-icon>
            </v-btn>
          </template>
          <template
            v-for="(images, index) in salesProduct"
            class="whiteThis"
          >
            <v-carousel-item
              v-if="(index + 1) % columns === 1 || columns === 1"
              :key="index"
            >
              <v-row
                class="flex-nowrap"
                style="height: 100%"
              >
                <template
                  v-for="(n,i) in columns"
                >
                  <template
                    v-if="(+index + i) < salesProduct.length"
                  >
                    <v-col :key="i">
                      <v-sheet
                        v-if="(+index + i) < salesProduct.length"
                        color="white"
                        height="100%"
                      >
                        <v-row
                          class="fill-height"
                          align="center"
                          justify="center"
                        >
                          <v-card
                            class="mr-5"
                          >
                            <v-img
                              :src="images.image"
                              :lazy-src="images.image"
                              :alt="images.alt"
                              class="fill-height"
                              height="300"
                              width="250"
                              contain
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
                            <v-card-text>
                              <v-container
                                class="productDetails"
                                style="width: 100%!important;"
                                color="transparent"
                              >
                                <div
                                  class="productDetailsCard"
                                  style="width: 100%!important"
                                  color="transparent"
                                >
                                  <div
                                    class="productCardContent"
                                    style="width: 100%!important"
                                  >
                                    <v-row class="d-flex">
                                      <v-col cols="6">
                                        <h3
                                          v-text="images.name"
                                          :title="images.name"
                                        />
                                      </v-col>
                                      <v-col cols="6">
                                        <h5
                                          style="color: red!important"
                                          title="Discount"
                                        >
                                          Rs. <strike>{{ images.old_price }}</strike> - {{ images.product_discount }}
                                          = Rs. {{ images.product_price }}
                                        </h5>
                                      </v-col>
                                    </v-row>
                                    <v-row class="d-flex">
                                      <v-col cols="12">
                                        <div class="productDetailsCard_hover_content">
                                          <p v-text="images.description" />
                                        </div>
                                      </v-col>
                                    </v-row>
                                  </div>
                                </div>
                              </v-container>
                            </v-card-text>
                          </v-card>
                        </v-row>
                      </v-sheet>
                    </v-col>
                  </template>
                </template>
              </v-row>
            </v-carousel-item>
          </template>
        </v-carousel>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import store from '../store/index'
export default {
  name: 'FeaturedSales',
  data () {
    return {
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
  },
  computed: {
    salesProduct () {
      const tempData = [
        {
          name: 'try1',
          image: 'dfad'
        },
        {
          name: 'try2',
          image: 'fadfdsfad'
        }
      ]
      console.log(store.state.featuredSales)
      return tempData
    },
    columns () {
      if (this.$vuetify.breakpoint.xl) {
        return 4
      }
      if (this.$vuetify.breakpoint.lg) {
        return 3
      }
      if (this.$vuetify.breakpoint.md) {
        return 2
      }
      return 1
    },
    checkMobileDesktop () {
      console.log(this.$vuetify.breakpoint.name)
      if (
        this.$vuetify.breakpoint.name === 'xs' ||
        this.$vuetify.breakpoint.name === 'sm'
      ) {
        return false
      }
      return true
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600');
.productDetails {
  margin: 0px;
  padding: 0px;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.whiteThis {
  background-color: white!important;
}

.productDetailsCard {
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;
  padding: 2em;
  background: white;
  transition: all .35s ease;
  &::before, &::after {
    content: "";
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    background: #000;
    height: 4px;
  }
  &::before {
    width: 0;
    opacity: 0;
    transition: opacity 0 ease, width 0 ease;
    transition-delay: .5s;
  }
  &::after {
    width: 100%;
    background: white;
    transition: width .5s ease;
  }
  .logo {
    margin: 0 0 1em;
    width: 10.625em;
    transition: all .35s ease;
  }
  h6 {
    color: #999;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0;
    letter-spacing: 2px;
  }
  .productDetailsCard_hover_content {
    overflow: hidden;
    max-height: 0;
    transform: translateY(1em);
    transition: all .55s ease;
    p {
      margin: 1.5em 0 0;
      color: #6E6E70;
      line-height: 1.4em;
    }
  }
  &:hover {
    width: 24em;
    box-shadow: 5px 10px 20px 10px rgba(#202024, .12);
    &::before {
      width: 100%;
      opacity: 1;
      transition: opacity .5s ease, width .5s ease;
      transition-delay: 0;
    }
    &::after {
      width: 0;
      opacity: 0;
      transition: width 0 ease;
    }
    .logo {
      margin-bottom: .5em;
    }
    .productDetailsCard_hover_content {
      max-height: 10em;
      transform: none;
    }
  }
}
</style>
<style scoped>
#btn {
  height: 50px;
  min-width: 150px;
  border: none;
  border-radius: 10px;
  color: black;
  font-size: 40px;
  font-family: 'Cookie', cursive;
  position: relative;
  transition: 1s;
  -webkit-tap-highlight-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding-top: 5px;
}

#btn #circle {
  width: 5px;
  height: 5px;
  background: transparent;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 50%;
  overflow: hidden;
  transition: 500ms;
}

.noselect {
  -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
}

#btn:hover {
  background: transparent;
}

#btn:hover #circle {
  height: 50px;
  width: 100%;
  left: 0;
  border-radius: 0;
  border-bottom: 2px solid black;
}
#animateButton{
  /* background-color: #1976D2; */
  background-color: white;
  /* background-image: linear-gradient(315deg, #1976D2 0%, #000000 74%); */
}
</style>
