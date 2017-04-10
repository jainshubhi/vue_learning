import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './App.vue'
import Data from './components/Data.vue'

// routes
const routes = [
  {
    // type is now a query
    path: '/data/:type',
    component: Data
  }
]

const router = new VueRouter({
  // ES6 Syntax!
  routes
})

new Vue({
  el: '#app',
  // ES6 Syntax
  router,
  render: h => h(App)
})

// vue-router maps a path to a specific Vue Component that we create
