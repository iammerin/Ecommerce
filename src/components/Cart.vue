<template>
  <v-card>
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
          @click="cartDialog = false"
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
    <v-divider />
  </v-card>
</template>

<script>
export default {

}
</script>

<style>

</style>
