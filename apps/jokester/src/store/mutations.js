import * as types from './mutation-types'

// mutations in vue take two parameters: state, payload

export const mutations = {
  // ES6 destructuring assignment
  // array of objects with state and payload
  [types.INIT_JOKES] (state, payload) {
    // payload in this case is multiple jokes
    state.jokes.push(...payload)
  },
  [types.ADD_JOKE] (state, payload) {
    // only one joke in payload
    state.jokes.push(payload)
  },
  [types.REMOVE_JOKE] (state, index) {
    state.jokes.splice(index, 1)
  }

}
