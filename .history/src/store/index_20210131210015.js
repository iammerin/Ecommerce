import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentProduct: '',
    allProducts:[]
  },
  mutations: {
    setCurrentProduct(state,payload){
      state.currentProduct = payload;
      state.allProducts = payload;
    }
  },
  actions: {},
  modules: {},
  getters: {
    getcurrentProduct: state => state.currentProduct
  }
});
