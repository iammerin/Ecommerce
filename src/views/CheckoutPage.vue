<template>
  <v-row
    align="center"
    justify="center"
    class="mt-7 mb-10"
  >
    <v-col
      cols="11"
      md="8"
      lg="8"
      sm="10"
    >
      <v-card
        class="pa-2"
        elevation="4"
      >
        <v-card-title>
          Your Cart
        </v-card-title>
        <v-card-text>
          <div
            v-for="(items, index) in cart"
            :key="index"
          >
            <v-row
              class="my-4"
            >
              <v-col cols="3">
                <v-card
                  elevation="6"
                  width="200"
                >
                  <v-img
                    :src="items.product.image"
                    width="200"
                  />
                </v-card>
              </v-col>
              <v-col
                cols="3"
                class="text-h5"
              >
                {{ items.product.title }}
              </v-col>
              <v-col
                cols="3"
                class="text-h6"
              >
                Quantity:
                <v-chip
                  class="primary white--text ml-2 mr-2"
                  small
                  style="cursor: pointer;"
                  @click="addQuantity(items)"
                >
                  <h2>+</h2>
                </v-chip>
                {{ items.quantity }}
                <v-chip
                  class="ml-2 primary white--text"
                  small
                  style="cursor: pointer;"
                  @click="subtractQuantity(items)"
                >
                  <h2>-</h2>
                </v-chip>
              </v-col>
              <v-col
                cols="2"
                class="text-h6"
              >
                Rs. {{ getPrice(items.product.price, items.quantity) }}
              </v-col>
              <v-col cols="1">
                <v-icon
                  @click="removeProduct(items)"
                >
                  mdi-close
                </v-icon>
              </v-col>
            </v-row>
          </div>
        </v-card-text>
        <v-divider class="my-4" />
        <v-card-actions>
          <div>
            <v-btn
              color="primary"
              dark
              class="text-capitalize"
              outlined
            >
              Next
              <v-icon class="ml-3">
                mdi-arrow-right-bold-circle-outline
              </v-icon>
            </v-btn>
          </div>
          <v-spacer />
          <div class="mr-5 text-h6">
            Total:
            <v-chip
              color="primary"
              class="ml-2"
            >
              Rs. {{ totalPrice }}
            </v-chip>
          </div>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  computed: {
    cart () {
      console.log(this.$store.state.cart)
      return this.$store.state.cart
    },
    totalPrice () {
      this.$store.dispatch('getTotalOfCart')
      return this.$store.state.totalPrice
    }
  },
  methods: {
    subtractQuantity (product) {
      this.$store.commit('subtractQuantity', product)
    },
    addQuantity (product) {
      console.log(product)
      this.$store.commit('addQuantity', product)
    },
    getPrice (quantity, price) {
      return quantity * price
    },
    removeProduct (product) {
      this.$store.commit('removeProduct', product)
    }
  }
}
</script>

<style>

</style>
