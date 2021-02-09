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
      <v-row class="mt-2 mb-10">
        <v-col
          v-for="(images, index) in salesProduct"
          :key="index"
          sm="12"
          xs="12"
          md="4"
        >
          <v-card
            class="mr-5"
          >
            <v-img
              :src="images.url"
              :lazy-src="images.url"
              :alt="images.alt"
              class="fill-height"
              height="300"
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
              >
                <div
                  class="productDetailsCard"
                  style="width: 100%!important"
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
                          Rs. <strike>{{ images.old_price }}</strike> - {{ images.discount }}
                          = Rs. {{ images.price }}
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
      deadline: new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000),
      salesProduct: [
        {
          name: 'T-Shirt',
          url: 'https://picsum.photos//500/300?random=11',
          alt: 'T-Shirt',
          price: 240,
          discount: '40%',
          old_price: 600,
          description: 'T-Shirt available for just Rs. 400.'
        },
        {
          name: 'Biniki',
          url: 'https://picsum.photos//500/300?random=11',
          alt: 'Bikini',
          price: 240,
          discount: '40%',
          old_price: 600,
          description: 'Hot Bikini on Sale.'
        }
      ]
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

.productDetailsCard {
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;
  padding: 2em;
  background: #FFF;
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
  color: #eee;
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
  width: 150px;
  left: 0;
  border-radius: 0;
  border-bottom: 2px solid #eee;
}
#animateButton{
  background-color: #1976D2;
  background-image: linear-gradient(315deg, #1976D2 0%, #000000 74%);
}
</style>
