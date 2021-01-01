<template>
  <v-app-bar max-height="70" color="primary" dark>
    <v-spacer></v-spacer>
    <v-toolbar-title>
      <v-btn text rounded to="/">
        Ecommerce
      </v-btn>
    </v-toolbar-title>
    <v-form method="POST" action="#">
      <v-text-field
          filled
          rounded
          dense
          hide-details
          append-icon="mdi-magnify"
          single-line
          @click:append="searchButton"
          class="ma-5"
        ></v-text-field>
    </v-form>
    <div id="nav">
      <v-btn text rounded to="/categories">Categories</v-btn> |
      <v-btn text rounded to="/about">About</v-btn>
      <v-btn text rounded to="/deals">Deals</v-btn>
      <v-btn text rounded to="/coupons">Coupons</v-btn>
      <v-btn text rounded to="/stores">Stores</v-btn>
      <v-menu
        offset-y
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
          >
            Dropdown
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title>fjads</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>fjads</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>fjads</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-chip
        class="ma-2"
        outlined
        dark
        large
      >
        Cart
      </v-chip>
    </div>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  methods: {
    searchButton () {
      console.log('clicked')
    }
  }
}
</script>

<style>

</style>
