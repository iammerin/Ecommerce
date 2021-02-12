<template>
  <v-app-bar
    max-width="100vw"
    max-height="75"
    :color="appBarcolor"
    app
    v-scroll="changeColorOnScroll"
    elevate-on-scroll
    :dark="dark"
    class="ml-5 mr-5"
    height="70"
  >
    <v-toolbar-title>
      <v-btn
        text
        rounded
        to="/"
        color="transparent"
        height="70"
        v-if="checkMobileDesktop"
      >
        <v-img
          src="../assets/logo.png"
          contain
          width="110"
          height="70"
          class="mr-5"
        />
        <div :class="appBarContentColor">
          Ecommerce
        </div>
      </v-btn>
      <v-btn
        text
        rounded
        to="/"
        color="transparent"
        height="70"
        v-else
        class="mr-10"
      >
        <v-img
          src="../assets/logo.png"
          contain
          width="70"
          height="30"
          class="mr-5"
        />
        <div
          :class="appBarContentColor"
        >
          Ecommerce
        </div>
      </v-btn>
    </v-toolbar-title>
    <v-spacer v-if="checkMobileDesktop" />
    <v-form
      method="POST"
      action="#"
      v-if="checkMobileDesktop"
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
      v-if="checkMobileDesktop"
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
    </div>
    <v-menu
      offset-y
      v-if="cart.length == 0"
    >
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
          {{ productQuantity }}
          Cart
        </v-chip>
      </template>
      <v-card>
        <v-card-title>
          Cart
        </v-card-title>
        <v-list>
          <v-list-item>
            <v-list-item-title>No Items on the cart.</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
    <v-dialog
      v-if="cart.length > 0"
      v-model="cartDialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
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
          {{ productQuantity }}
          Cart
        </v-chip>
      </template>
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
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Product title</v-list-item-title>
              <v-list-item-subtitle>product quantity</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider />
      </v-card>
    </v-dialog>
    <v-spacer v-if="checkMobileDesktop" />
    <div
      class="hidden-xs-and-down mr-5"
      v-if="checkMobileDesktop"
    >
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
            max-width="400px"
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
            <v-card
              width="400"
              opacity="10"
            >
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
    <v-dialog
      v-else
      v-model="appNavDialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-app-bar-nav-icon
          :class="appBarContentColor"
          dark
          v-bind="attrs"
          v-on="on"
        />
      </template>
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-toolbar-title>
            <v-btn
              text
              rounded
              to="/"
              color="transparent"
              height="70"
              class="mr-10"
            >
              <v-img
                src="../assets/logo.png"
                contain
                width="70"
                height="30"
              />
              <div
                class="white--text"
              >
                Ecommerce
              </div>
            </v-btn>
          </v-toolbar-title>
          <v-spacer />
          <v-toolbar-items>
            <v-btn
              icon
              dark
              @click="appNavDialog = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list
          two-line
          dense
        >
          <v-list-item
            v-for="(links, index) in routes"
            :key="index"
            link
            :to="links.link"
            dense
          >
            <v-list-item-content>
              <v-list-item-title
                v-text="links.name"
              />
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-row
          align="center"
          justify="center"
        >
          <v-col cols="12">
            <div>
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
                    max-width="400px"
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
                    <v-card
                      width="400"
                      opacity="10"
                    >
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
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
  </v-app-bar>
</template>

<script>
import store from '../store/index'
export default {
  name: 'AppBar',
  data () {
    return {
      appNavDialog: false,
      cartDialog: false,
      routes: [
        { name: 'About', link: '/about' },
        { name: 'Deals', link: '/deals' },
        { name: 'TOA', link: '/terms-and-conditions' },
        { name: 'Stores', link: '/stores' },
        { name: 'Categories', link: '/categories' }
      ],
      appBarcolor: 'transparent',
      dark: false,
      appBarContentColor: 'blue--text',
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
  },
  computed: {
    cart () {
      return store.state.cart
    },
    productQuantity () {
      return store.state.cart.length
    },
    checkMobileDesktop () {
      if (
        this.$vuetify.breakpoint.name === 'xs' ||
        this.$vuetify.breakpoint.name === 'sm'
      ) {
        return false
      }
      return true
    }
  }
}
</script>

<style scoped>
.v-chip:hover {
  cursor: pointer;
}
</style>
