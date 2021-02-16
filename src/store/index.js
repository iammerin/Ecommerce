import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    products: [],
    featuredSales: [],
    categories: [],
    totalPrice: 0
  },
  mutations: {
    total (state, totalPrice) {
      state.totalPrice = totalPrice
    },
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
      product.quantity++
    },
    subtractQuantity (state, product) {
      if (product.quantity > 1) {
        product.quantity--
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
    }
  },
  actions: {
    fetchProducts ({ commit }) {
      return new Promise((resolve, reject) => {
        axios('http://192.168.100.11:8000/api/v1/home/').then(
          (response) => {
            commit('setAll', response.data)
            resolve()
          }
        )
      })
    },
    addProductsToCart (context, product) {
      const existingProduct = context.state.cart.filter(
        function (item) {
          if (item.product.id === Number(product.id)) {
            return true
          } else {
            return false
          }
        }
      )
      if (existingProduct.length) {
        context.commit('incrementItemQuantity', product)
      } else {
        context.commit('pushToCart', product)
      }
    },
    getTotalOfCart (context) {
      let total = 0
      let item
      for (item in context.state.cart) {
        total +=
          context.state.cart[item].quantity *
          context.state.cart[item].product.price
      }
      context.commit('total', total)
    }
  },
  modules: {
  }
})
