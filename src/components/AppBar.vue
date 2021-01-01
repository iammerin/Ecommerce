<template>
  <v-app-bar
    max-height="70"
    color="transparent"
    app
    elevate-on-scroll
  >
    <v-spacer></v-spacer>
    <v-toolbar-title>
      <v-btn
        text
        rounded
        to="/"
      >
        Ecommerce
      </v-btn>
    </v-toolbar-title>
    <v-form
      method="POST"
      action="#"
    >
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
      <v-btn
        text
        rounded
        v-for="link in routes"
        :key="link.name"
        :to="link.link"
      >
        {{ link.name }}
      </v-btn>
      <v-menu
        offset-y
      >
        <template v-slot:activator="{ attrs, on }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            width="100"
            text
          >
            <v-chip
              class="ma-2"
              outlined
              dark
            >
              <v-icon
                class="mr-2"
              >
                mdi-cart
              </v-icon>
              Cart
            </v-chip>
          </v-btn>
        </template>
        <v-list>
        <v-list-item>
          <v-list-item-title>No Items on the cart.</v-list-item-title>
        </v-list-item>
      </v-list>
      </v-menu>
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
  },
  data () {
    return {
      routes: [
        { name: 'Categories', link: '/link' },
        { name: 'About', link: '/about' },
        { name: 'Deals', link: '/deals' },
        { name: 'TOA', link: '/terms-and-conditions' },
        { name: 'Stores', link: '/stores' }
      ]
    }
  }
}
</script>

<style>

</style>
