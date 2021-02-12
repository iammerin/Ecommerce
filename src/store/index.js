import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [
      {
        title: 'Dummy cart'
      }
    ],
    products: [],
    totalPrice: '',
    featuredSales: [],
    categories: []
  },
  mutations: {
    setAll (state, all) {
      state.featuredSales = all.details[0].sliders
      state.categories = all.details[0].category
      state.products = all.details[0].product_for_you
    },
    pushToCart (state, product) {
      state.cart.push({ product: product, quantity: 1 })
    },
    incrementItemQuantity (state, cartItem) {
      state.cart.filter(function (item) {
        if (item.product.id === Number(cartItem.id)) {
          item.quantity++
        }
      })
    },
    addQuantity (state, product) {
      product.quantity += 0.5
    },
    subtractQuantity (state, product) {
      if (product.quantity > 0.5) {
        product.quantity -= 0.5
      } else {
        let yeha = ''
        state.cart.filter(function (item, index) {
          if (item.product.id === Number(product.id)) {
            yeha = index
            return true
          } else {
            return false
          }
        })
        state.cart.splice(yeha, 1)
      }
    },
    total (state, totalPrice) {
      state.totalPrice = totalPrice
    }
  },
  actions: {
    fetchProducts ({ commit }) {
      return new Promise((resolve, reject) => {
        axios('http://192.168.100.11:8001/api/v1/home/').then(
          (response) => {
            commit('setAll', response.data)
            resolve()
          }
        )
      })
    },
    addProductsToCart () {
      //
    },
    getTotalOfCart () {
    }
  },
  modules: {
  }
})
