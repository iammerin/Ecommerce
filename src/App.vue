<template>
  <v-app>
    <div v-if="loading == false">
      <AppBar />
      <v-main>
        <transition
          name="fade"
          mode="out-in"
        >
          <router-view />
        </transition>
      </v-main>
      <FooterDesign />
    </div>
    <v-container
      fill-height
      fluid
      v-else
      width="100vw"
    >
      <v-row
        align="center"
        height="100%"
        justify="center"
      >
        <!-- /* Leave this like this for some while*/ -->
        <!-- <v&#45;progress&#45;circular -->
        <!--   indeterminate -->
        <!--   color="primary" -->
        <!-- ></v&#45;progress&#45;circular> -->
        <spring-spinner
          :animation-duration="3000"
          :size="60"
          color="blue"
        />
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar'
import { SpringSpinner } from 'epic-spinners'
import store from './store/index.js'
import FooterDesign from './components/FooterDesign'

export default {
  name: 'App',

  components: {
    AppBar,
    SpringSpinner,
    FooterDesign
  },

  data: () => ({
    loading: true
  }),
  beforeCreate () {
    setTimeout(() => { this.loading = false }, 2 * 1000)
    this.$router.beforeEach((to, from, next) => {
      this.loading = true
      next()
    })
    this.$router.afterEach(() => {
      setTimeout(() => { this.loading = false }, 0.5 * 1000)
    })
  },
  mounted () {
    const currentCursor = this
    currentCursor.loading = true
    store
      .dispatch('fetchProducts')
      .then(() => (currentCursor.loading = false))
      .catch((error) => {
        console.log(error)
        currentCursor.isError = true
      })
  }
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 1s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
