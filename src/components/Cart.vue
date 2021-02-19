<template>
  <v-card
    max-height="600"
  >
    <v-toolbar
      dark
      color="primary"
    >
      <v-toolbar-title>
        <v-icon class="mr-2">
          mdi-cart-outline
        </v-icon>
        Cart
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-btn
          icon
          dark
          @click="cartDialogClicked"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-list
      three-line
      subheader
    >
      <v-subheader>All Products on cart</v-subheader>
      <div
        v-for="(product, index) in cart"
        :key="index"
      >
        <v-list-item
          v-if="checkQuantity(product)"
        >
          <v-row>
            <v-col cols="10">
              <v-list-item-content>
                <v-list-item-title>{{ product.product.title }}</v-list-item-title>
                <v-list-item-subtitle>
                  Quantity:
                  <v-chip
                    class="primary white--text ml-2 mr-2"
                    small
                    style="cursor: pointer;"
                    @click="addQuantity(product)"
                  >
                    <h2>+</h2>
                  </v-chip>
                  {{ product.quantity }}
                  <v-chip
                    class="ml-2 primary white--text"
                    small
                    style="cursor: pointer;"
                    @click="subtractQuantity(product)"
                  >
                    <h2>-</h2>
                  </v-chip>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-col>
            <v-col cols="2">
              Rs. {{ price(product.product.price, product.quantity) }}
            </v-col>
          </v-row>
        </v-list-item>
      </div>
    </v-list>
    <v-divider
      style="background-color: white !important;"
      class="pb-5"
    />
    <v-card-text
      class="text-h5 d-flex"
      style="background-color: white !important;"
    >
      <div>
        <v-btn
          to="checkout"
          class="text-capitalize primary--text"
          text
        >
          <v-icon
            class="mr-2"
          >
            mdi-shopping-outline
          </v-icon>
          Checkout
        </v-btn>
      </div>
      <v-spacer />
      <div>
        Total:
        <v-chip
          color="primary"
          class="ml-2"
        >
          Rs. {{ totalPrice }}
        </v-chip>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  methods: {
    cartDialogClicked () {
      this.$emit('cartDialog')
    },
    subtractQuantity (product) {
      this.$store.commit('subtractQuantity', product)
    },
    price (actualprice, quantity) {
      return actualprice * quantity
    },
    addQuantity (product) {
      this.$store.commit('addQuantity', product)
    },
    checkQuantity (product) {
      if (product.quantity > 0) { return true } else { return false }
    }
  },
  computed: {
    cart () {
      return this.$store.state.cart
    },
    totalPrice () {
      this.$store.dispatch('getTotalOfCart')
      return this.$store.state.totalPrice
    }
  }
}
</script>

<style>

</style>
