<template>
  <v-app-bar
    max-height="70"
    :color="appBarcolor"
    app
    v-scroll="changeColorOnScroll"
    elevate-on-scroll
    :dark="dark"
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
    <v-text-field
    filled
    rounded
    dense
    hide-details
    append-icon="mdi-magnify"
    single-line
    @click:append="searchButton"
    class="ma-5"
    >
    </v-text-field>
    <div id="nav">
      <v-btn
        text
        rounded
        v-for="link in product"
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
            mdi-cart
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
   data: () => ({
    product: ''
  }),
  mounted () {
    this.product = this.$store.getters.getCurrentProduct
  }
};
  methods: {
    searchButton () {
      console.log('clicked')
    },
    changeColorOnScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      if (top > 20) {
        this.appBarcolor = 'primary'
        this.dark = true
      } else {
        this.appBarcolor = 'transparent'
        this.dark = false
      }
    }
  }
}
</script>

<style>

</style>
