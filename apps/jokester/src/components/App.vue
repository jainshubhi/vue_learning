<template lang="html">
  <div class="" id="app">
    <h4>Got jokes?</h4>
    <button class="btn btn-primary" @click="initJokes">Add 10 Random Jokes</button>
    <button class="btn btn-primary" @click="addJoke">Add 1 Joke</button>
    <br>
    <span v-for="type in types">
      <input
        type="checkbox"
        :value="type"
        checked
        v-model="checkedTypes"
      >
        <label>{{type}}</label>&nbsp;
      </input>
    </span>
    <br>
    <div class="col-md-12">
      <Joke
        v-for="(joke, index) in $store.state.jokes"
        key="index"
        :joke="joke"
        :index="index"
        v-show="checkedTypes.includes(joke.type)"
      />
      <!-- only show if it is included in the checkedTypes data array -->
    </div>
  </div>
</template>

<script>
// maps vuex actions to methods within this component
import {mapActions} from 'vuex'
import Joke from './Joke.vue'

export default {
  data () {
    return {
      types: ['general', 'knock knock', 'programming'],
      checkedTypes: ['general', 'knock knock', 'programming']
    }
  },
  methods: mapActions([
    'initJokes',
    'addJoke'
  ]),
  components: {
    Joke
  }
}
</script>

<style lang="css">
</style>
