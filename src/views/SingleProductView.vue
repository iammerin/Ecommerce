<template>
  <v-row
    align="center"
    justify="center"
    class="mb-10 mt-10"
  >
    <v-col cols="10">
      <div
        v-for="(product, index) in productClicked"
        :key="index"
      >
        <v-row>
          <v-col cols="7">
            <v-card
              elevation="6"
              style="border-radius 10px;"
            >
              <v-img
                :src="product.image"
                :lazy-src="product.lazyimage"
                height="70vh"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    />
                  </v-row>
                </template>
              </v-img>
            </v-card>
          </v-col>
          <v-col cols="5">
            <v-row>
              <v-col>
                <div
                  class="text-h5"
                >
                  {{ product.title }}
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <div
                  class="subtitle"
                >
                  {{ product.description }}
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <div
                  class="subtitle"
                >
                  <v-btn
                    text
                    dark
                    color="primary"
                    class="text-capitalize"
                    small
                  >
                    Write a Review
                  </v-btn>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <div
                  class="text-h6"
                  style="color: red!important"
                  title="Discount"
                >
                  Rs.
                  <strike> {{ product.old_price }} </strike>
                  - {{ product.discount }} %
                  = Rs. {{ product.price }}
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <div>
                  Quantity:
                  <v-chip
                    class="primary white--text ml-2 mr-2"
                    small
                    style="cursor: pointer;"
                    @click="addProductsToCart(product)"
                  >
                    <h2>+</h2>
                  </v-chip>
                  {{ displayQuantity }}
                  <v-chip
                    class="ml-2 primary white--text"
                    small
                    style="cursor: pointer;"
                    @click="subtractQuantity(product)"
                  >
                    <h2>-</h2>
                  </v-chip>
                </div>
              </v-col>
              <v-col>
                <v-btn
                  color="green darken-1"
                  text
                  @click="addToCart()"
                  small
                >
                  <v-icon
                    class="mr-2"
                  >
                    mdi-cart-plus
                  </v-icon>
                  Add To Cart
                </v-btn>
              </v-col>
            </v-row>
            <v-divider class="my-3" />
            <v-row
              align="center"
              justify="center"
            >
              <v-col cols="2">
                Share:
              </v-col>
              <v-col>
                <v-btn
                  class="ma-2"
                  outlined
                  color="primary"
                  fab
                  small
                  dark
                >
                  <v-icon>mdi-facebook</v-icon>
                </v-btn>
                <v-btn
                  class="ma-2"
                  outlined
                  color="primary"
                  fab
                  small
                  dark
                >
                  <v-icon>mdi-instagram</v-icon>
                </v-btn>
                <v-btn
                  class="ma-2"
                  outlined
                  color="primary"
                  fab
                  small
                  dark
                >
                  <v-icon>mdi-twitter</v-icon>
                </v-btn>
              </v-col>
            </v-row>
            <v-divider class="my-3" />
          </v-col>
        </v-row>
        <v-divider class="my-10" />
        <v-row>
          <v-col cols="12">
            <div class="text-h5 text-decoration-underline">
              Specifications
            </div>
          </v-col>
        </v-row>
        <v-divider class="my-10" />
        <v-row class="mt-15">
          <v-col cols="12">
            <v-row>
              <v-col>
                <div style="font-size: 18px;">
                  You are reviewing: <b>{{ product.title }}</b>
                </div>
              </v-col>
            </v-row>
            <v-row class="mt-3">
              <v-col>
                Your Rating *
              </v-col>
            </v-row>
            <v-row
              align="center"
              justify="center"
            >
              <v-col
                md="1"
                sm="1"
                lg="1"
                cols="2"
              >
                Quality
              </v-col>
              <v-col>
                <v-rating
                  v-model="qualityRating"
                />
              </v-col>
            </v-row>
            <v-row
              align="center"
              justify="center"
            >
              <v-col
                md="1"
                sm="1"
                lg="1"
                cols="2"
              >
                Price
              </v-col>
              <v-col>
                <v-rating
                  v-model="priceRating"
                />
              </v-col>
            </v-row>
            <v-row
              align="center"
              justify="center"
            >
              <v-col
                md="1"
                sm="1"
                lg="1"
                cols="2"
              >
                Value
              </v-col>
              <v-col>
                <v-rating
                  v-model="valueRating"
                />
              </v-col>
            </v-row>
            <v-row class="flex-wrap mt-5">
              <v-col cols="10">
                <v-row no-gutters>
                  <v-col
                    md="2"
                    sm="2"
                    lg="2"
                    cols="5"
                  >
                    Nickname *
                  </v-col>
                  <v-col
                    md="6"
                    sm="6"
                    lg="6"
                  >
                    <v-text-field
                      dense
                      outlined
                      label="Name to Display"
                      clearable
                    />
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-row class="flex-wrap">
              <v-col cols="10">
                <v-row no-gutters>
                  <v-col
                    md="2"
                    sm="2"
                    lg="2"
                    cols="5"
                  >
                    Summary *
                  </v-col>
                  <v-col
                    md="6"
                    sm="6"
                    lg="6"
                  >
                    <v-text-field
                      dense
                      outlined
                      label="Short and Sweet"
                      clearable
                    />
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-row class="flex-wrap">
              <v-col cols="10">
                <v-row no-gutters>
                  <v-col
                    md="2"
                    sm="2"
                    lg="2"
                    cols="5"
                  >
                    Review *
                  </v-col>
                  <v-col
                    md="6"
                    sm="6"
                    lg="6"
                  >
                    <v-text-field
                      clearable
                      dense
                      outlined
                      label="What you want to say"
                    />
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-row
              align="center"
              justify="center"
            >
              <v-col cols="6">
                <v-btn
                  dark
                  color="primary"
                  large
                >
                  Submit Review
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      productClicked: [],
      qualityRating: 0,
      priceRating: 0,
      valueRating: 0,
      overallRating: 0
    }
  },
  mounted () {
    this.productClicked = this.$store.state.clickedProduct
  },
  methods: {
    addProductsToCart (product) {
      this.$store.dispatch('addProductsToCart', product)
    },
    subtractQuantity (product) {
      this.$store.commit('subtractQuantity', product)
    }
  },
  computed: {
    displayQuantity () {
      const productId = this.productClicked[0].id
      let quantity = 1
      this.$store.state.cart.filter(function (item, index) {
        if (item.product.id === productId) {
          quantity = item.quantity
          return true
        }
      })
      return quantity
    }
  }
}
</script>

<style>
</style>
