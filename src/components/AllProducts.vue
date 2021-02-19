<template>
  <div class="mb-10 mt-5">
    <div>
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          v-for="(product, index) in allProducts"
          :key="index"
          cols="12"
          md="5"
          sm="6"
          lg="3"
          class="d-flex child-flex"
        >
          <v-hover v-slot="{ hover }">
            <v-card
              class="hoverCardAnimation"
              :elevation="hover ? 16:1"
            >
              <v-img
                :lazy-src="product.lazyimage"
                :src="product.image"
                height="200"
                :width="checkMobileDesktop? 300:'100%' "
                @click="magnifyClicked(index)"
              >
                <v-expand-transition>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <div
                      v-if="hover"
                      class="d-flex display-3 white--text"
                    >
                      <v-icon
                        dark
                        class="text-h2"
                        @click="magnifyClicked(index)"
                        small
                      >
                        mdi-magnify-plus-outline
                      </v-icon>
                    </div>
                  </v-row>
                </v-expand-transition>
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
                      <v-row>
                        <v-col cols="6">
                          <h3
                            v-text="product.title"
                            :title="product.title"
                          />
                        </v-col>
                        <v-col cols="6">
                          <h5
                            style="color: red!important"
                            title="Discount"
                          >
                            Rs. <strike>{{ product.old_price }}</strike> - {{ product.product_discount }}
                            = Rs. {{ product.price }}
                          </h5>
                        </v-col>
                      </v-row>
                      <v-row
                        class="mt-0"
                        style="margin: 0px!important; padding: 0px!important;"
                      >
                        <v-col cols="12">
                          <div class="productDetailsCard_hover_content">
                            <p v-text="product.description" />
                          </div>
                        </v-col>
                      </v-row>
                    </div>
                  </div>
                </v-container>
                <v-row class="mt-1">
                  <v-col cols="12">
                    <div class="subtitle-2 green--text">
                      Rs. {{ product.price }}
                    </div>
                  </v-col>
                </v-row>
                <v-row class="ma-0">
                  <v-col
                    cols="8"
                  >
                    <div class="caption">
                      Rs. <strike>{{ product.old_price }}</strike> - {{ product.discount }}%
                    </div>
                  </v-col>
                  <v-col cols="3">
                    <v-btn
                      small
                      dark
                      class="primary"
                      @click="addToCart(index)"
                    >
                      <v-icon>
                        mdi-cart-plus
                      </v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </div>
    <v-dialog
      v-model="productClicked"
      :width="widthOfProductDialog"
    >
      <v-card
        v-for="(product, index) in clickedProduct"
        :key="index"
      >
        <v-row
          align="center"
          justify="center"
          class="ma-0"
        >
          <v-toolbar
            elevation="0"
          >
            <v-spacer />
            <v-btn
              icon
              @click="productClicked = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
        </v-row>
        <v-row
          align="start"
          justify="center"
          class="ma-0"
        >
          <v-col cols="6">
            <v-card
              elevation="6"
            >
              <v-img
                height="60vh"
                :lazy-src="product.lazyimage"
                :src="product.image"
                style="object-fit: contain;"
                class="fill-height"
              />
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-row>
              <v-card-text class="text-h4">
                {{ product.title }}
              </v-card-text>
            </v-row>
            <v-row>
              <v-card-text
                class="subtitle-1"
              >
                {{ product.description }}
              </v-card-text>
            </v-row>
            <v-row>
              <v-col cols="12">
                <div class="subtitle-1 green--text">
                  Rs. {{ product.price }}
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <div class="caption">
                  Rs. <strike>{{ product.old_price }}</strike> - {{ product.discount }}%
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-card-actions>
          <v-btn
            color="green darken-1"
            text
            @click="productClicked = false"
          >
            Close
          </v-btn>
          <v-spacer />
          <v-btn
            color="green darken-1"
            text
            @click="addToCart()"
          >
            <v-icon
              class="mr-2"
            >
              mdi-cart-plus
            </v-icon>
            Add To Cart
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- <v&#45;snackbar -->
    <!--   v&#45;model="productAddedSnackbar" -->
    <!--   timeout="1000" -->
    <!-- > -->
    <!--   Product Added -->
    <!--   <template v&#45;slot:action="{ attrs }"> -->
    <!--     <v&#45;btn -->
    <!--       color="blue" -->
    <!--       text -->
    <!--       v&#45;bind="attrs" -->
    <!--       @click="productAddedSnackbar = false" -->
    <!--     > -->
    <!--       Close -->
    <!--     </v&#45;btn> -->
    <!--   </template> -->
    <!-- </v&#45;snackbar> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      productAddedSnackbar: false,
      allProducts: [
        {
          id: 1,
          image: 'https://picsum.photos/3000/2000?random=1',
          lazyimage: 'https://picsum.photos/200/300?random=1',
          title: 'Title 1',
          price: '900',
          old_price: '1000',
          discount: '10',
          description: 'This is just a dummy description for this product'
        },
        {
          id: 2,
          image: 'https://picsum.photos/3000/2000?random=2',
          lazyimage: 'https://picsum.photos/3000/2000?random=2',
          title: 'Title 1',
          price: '900',
          old_price: '1000',
          discount: '10',
          description: 'This is just a dummy description for this product'
        },
        {
          id: 3,
          image: 'https://picsum.photos/3000/2000?random=3',
          lazyimage: 'https://picsum.photos/200/300?random=3',
          title: 'Title 1',
          price: '900',
          old_price: '1000',
          discount: '10',
          description: 'This is just a dummy description for this product'
        },
        {
          id: 4,
          image: 'https://picsum.photos/3000/2000?random=4',
          lazyimage: 'https://picsum.photos/200/300?random=4',
          title: 'Title 1',
          price: '900',
          old_price: '1000',
          discount: '10',
          description: 'This is just a dummy description for this product'
        },
        {
          id: 5,
          image: 'https://picsum.photos/3000/2000?random=5',
          lazyimage: 'https://picsum.photos/200/300?random=5',
          title: 'Title 1',
          price: '900',
          old_price: '1000',
          discount: '10',
          description: 'This is just a dummy description for this product'
        },
        {
          id: 6,
          image: 'https://picsum.photos/3000/2000?random=6',
          lazyimage: 'https://picsum.photos/200/300?random=6',
          title: 'Title 1',
          price: '900',
          old_price: '1000',
          discount: '10',
          description: 'This is just a dummy description for this product'
        }

      ],
      productClicked: false,
      clickedProductIndex: '',
      clickedProduct: []
    }
  },
  methods: {
    magnifyClicked (n) {
      this.clickedProductIndex = n
      this.productClicked = true
      this.clickedProduct = []
      this.clickedProduct.push(this.allProducts[n])
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
    },
    addToCart (index) {
      var product = null
      if (index === undefined) { product = this.allProducts[this.clickedProductIndex] } else { product = this.allProducts[index] }
      this.$store
        .dispatch('addProductsToCart', product)
        .then(() => {
          this.productAddedSnackbar = true
        })
    }
  },
  computed: {
    widthOfProductDialog () {
      const check = this.checkMobileDesktop()
      if (!check) { return '100vw' }
      return '60vw'
    }
  }
}
</script>

<style scoped>
  .hoverCardAnimation{
    transition: box-shadow 1s;
  }
</style>
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
