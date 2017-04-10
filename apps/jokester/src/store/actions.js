// https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten
// Remember: actions commit mutations
import * as types from './mutation-types'

// our add 10 jokes action
// {commit} is Vuex object from Vuex.Store function
export const initJokes = ({commit}) => {
  fetch(`https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten`, {
    method: 'GET'
  })
  .then(response => response.json())
  // committing the action!!!
  .then(json => commit(types.INIT_JOKES, json))
}

// our add 1 joke action
export const addJoke = ({commit}) => {
  fetch(`https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke`, {
    method: 'GET'
  })
  .then(response => response.json())
  // committing the action!!!
  .then(json => commit(types.ADD_JOKE, json))
}

// our remove joke action
export const removeJoke = ({commit}, index) => {
  commit(types.REMOVE_JOKE, index)
}
