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
        />
        <div :class="appBarContentColor">
          Ecommerce
        </div>
      </v-btn>
    </v-toolbar-title>
    <v-spacer class="hidden-xs-and-down" />
    <v-form
      method="POST"
      action="#"
      class="hidden-xs-and-down"
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
      />
    </v-form>
    <div
      id="nav"
      class="hidden-xs-and-down"
    >
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
      <v-menu offset-y>
      <v-dialog
        v-model="dialog"
        scrollable
        max-width="300px">
      <template v-slot:activator="{ on, attrs }">
        <v-chip
              class="ma-2"
              outlined
              v-bind="attrs"
              v-on="on"
            >
              <v-icon class="mr-2">
                mdi-cart
              </v-icon>
              {{ produtQuantity }}
              Cart
            </v-chip>
      </template>
      <template v-slot:default="dialog">
        <v-card>
          <v-card-text>
          <div class="text-h2 pa-12">Hello world!</div>
          </v-card-text>
          <v-card-actions class="justify-end">
          <v-btn
              scrollable
              text
              @click="dialog.value = false"
          >Close</v-btn>
          </v-card-actions>
        </v-card>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-title>No Items on the cart.</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
      </v-dialog>
  </div>
  <v-spacer />
    <div class="hidden-xs-and-down mr-5">
      <v-menu offset-y>
        <template v-slot:activator="{ attrs, on }">
          <v-btn
            text
            rounded
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>
              mdi-account
            </v-icon>
            Account
          </v-btn>
        </template>
        <v-list>
          <v-dialog
            v-model="loginDialog"
            persistent
            max-width="600px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-list-item>
                <v-list-item-title
                  v-bind="attrs"
                  v-on="on"
                >
                  Login
                </v-list-item-title>
              </v-list-item>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">User Profile</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        label="Email*"
                        required
                      />
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        label="Password*"
                        type="password"
                        required
                      />
                    </v-col>
                  </v-row>
                </v-container>
                <small>*indicates required field</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn
                  color="blue darken-1"
                  text
                  @click="loginDialog = false"
                >
                  Close
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="loginDialog = false"
                >
                  Login
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog
            v-model="registerDialog"
            persistent
            max-width="600px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-list-item>
                <v-list-item-title
                  v-bind="attrs"
                  v-on="on"
                >
                  Register
                </v-list-item-title>
              </v-list-item>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">User Profile</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        label="Email*"
                        required
                      />
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        label="Password*"
                        type="password"
                        required
                      />
                    </v-col>
                  </v-row>
                </v-container>
                <small>*indicates required field</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn
                  color="blue darken-1"
                  text
                  @click="registerDialog = false"
                >
                  Close
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="registerDialog = false"
                >
                  Submit
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-list>
      </v-menu>
    </div>
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
      produtQuantity: 0,
      loginDialog: false,
      registerDialog: false
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
.v-chip:hover {
  cursor: pointer;
}
</style>
