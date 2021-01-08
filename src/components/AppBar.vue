<template>
  <v-app-bar
    max-height="70"
    :color="appBarcolor"
    app
    v-scroll="changeColorOnScroll"
    elevate-on-scroll
    :dark="dark"
    class="ml-5 mr-5"
  >
    <v-toolbar-title>
      <v-btn
        text
        rounded
        to="/"
        color="transparent"
      >
        <v-img
          src="../assets/demologo.png"
          height="60"
          contain
          width="60"
          class="mr-5"
        >
        </v-img>
        <div :class="appBarContentColor">
          Ecommerce
        </div>
      </v-btn>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-form
      method="POST"
      action="#"
    >
      <v-text-field
        filled
        rounded
        dense
        outlined
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
        <div :class="appBarContentColor">
          {{ link.name }}
        </div>
      </v-btn>
      <v-menu
        offset-y
      >
        <template v-slot:activator="{ attrs, on }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            text
            rounded
            color="transparent"
          >
            <v-chip
              class="ma-2"
              outlined
            >
              <v-icon
                class="mr-2"
              >
                mdi-cart
              </v-icon>
              {{produtQuantity}}

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
  data () {
    return {
      routes: [
        { name: 'About', link: '/about' },
        { name: 'Deals', link: '/deals' },
        { name: 'TOA', link: '/terms-and-conditions' },
        { name: 'Stores', link: '/stores' }
      ],
      appBarcolor: 'transparent',
      dark: false,
      appBarContentColor: 'blue--text',
      produtQuantity: 0
    }
  },
  methods: {
    searchButton () {
      console.log('clicked')
    },
    changeColorOnScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      if (top > 20) {
        this.appBarcolor = 'primary'
        this.appBarContentColor = 'white--text'
        this.dark = true
      } else {
        this.appBarcolor = 'transparent'
        this.appBarContentColor = 'blue--text'
        this.dark = false
      }
    }
  }
}
</script>

<style scoped>
  .v-chip:hover{
    cursor: pointer;
  }
</style>
