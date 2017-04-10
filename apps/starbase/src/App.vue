<template>
  <div id="app">
    <h3>{{title}}</h3>
    <div class="col-md-12">
      <!-- ":" is shorthand for "v-bind:" -->
      <Character v-for="(id, index) in initial_ids" :id="id" key="index"></Character>
    </div>

  </div>
</template>

<script>
import Character from './components/Character.vue'

export default {
  name: 'app',
  // Like Vue components, the data must be as a function, not just as an object
  data() {
    return {
      title: "Generate your team!",
      initial_ids: [1, 13, 14]
    }
  },
  components: {
    // ES6 shorthand syntax allows us to do this thanks to assignment destructuring
    Character
  }
}
</script>
