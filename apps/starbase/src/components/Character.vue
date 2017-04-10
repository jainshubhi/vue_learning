<template lang="html">
  <div class="col-md-4" @click="switchCharacter">
    <div class="character-card">
      <div class="card-block">
        <h4 class="card-title">{{character.name}}</h4>
        <p class="card-text">Height: {{character.height}} cm</p>
        <p class="card-text">Mass: {{character.mass}} kg</p>
        <p class="card-text">Hair color: {{character.hair_color}}</p>
        <p class="card-text">Eye color: {{character.eye_color}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // use props to pass in which character to get!
  props: ['id'],
  data () {
    return {
      character: {

      }
    }
  },
  methods: {
    fetchCharacter(id) {
      // fetch(endpoint, options object)
      // this returns a js promise, way to represent some data in js that sits
      // in some pending future value
      fetch(`http://swapi.co/api/people/${id}`, {
        method: 'GET'
      })
      .then(response => response.json())
      // response.json also returns a promise
      // so we need another .then() statement
      .then(json => this.character = json)
    },
    switchCharacter() {
      let random_id = Math.floor(Math.random() * 83) + 1
      this.fetchCharacter(random_id)
    }
  },
  created() {
    this.fetchCharacter(this.id)
  }
}
</script>

<style lang="css">
</style>
