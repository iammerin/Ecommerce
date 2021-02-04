import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentProduct: 'This is a product',
    allProducts: []
  },
  mutations: {
    setCurrentProduct(state, payload){
      state.currentProduct = payload;
      // state.allProducts = payload;
      state.allProducts.push(payload)
    }
  },
  actions: {},
  modules: {},
  getters: {
    getcurrentProduct: state => state.currentProduct
  }
});
