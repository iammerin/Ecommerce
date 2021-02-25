import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import(/* webpackChunkName: "checkout" */ '../views/CheckoutPage.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/terms-and-conditions',
    name: 'TOA',
    component: () => import(/* webpackChunkName: "about" */ '../views/TermsAndConditions.vue')
  },
  {
    path: '/categories',
    name: 'Categories',
    component: () => import(/* webpackChunkName: "about" */ '../views/Categories.vue')
  },
  {
    path: '/product',
    name: 'SingleProductParent',
    component: () => import(/* webpackChunkName: 'product' */ '../views/Product.vue'),
    children: [
      {
        path: ':product',
        name: 'Product',
        component: () => import(/* webpackChunkName: "singleproduct" */ '../views/SingleProductView.vue')
      }
    ]
  },
  {
    path: '*',
    name: 'Error',
    component: () => import(/* webpackChunkName: "404" */'../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
