import Vue from 'vue'
import App from './components/App.vue'

import store from './store'

// state and then payload!!!
// store.commit('INIT_JOKES', [{'test': 'testing ya'}, {'test_2': 'testing again yaar'}])

new Vue({
  el: '#app',
  // global store
  store,
  render: h => h(App)
})
