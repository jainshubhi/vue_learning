<template lang="html">
  <div class="" id="app">
    <h3>{{title}}</h3>
    <h4>
      <router-link class="link" to="/data/people">Characters</router-link> |
      <router-link class="link" to="/data/planets">Planets</router-link>
    </h4>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Starbase Router"
    }
  }
}
</script>

<style lang="css">
</style>
