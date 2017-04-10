<template lang="html">
  <div class="col-md-12">
    <Item
      v-for="for (item, index) in items"
      key="index"
      :passed-item="item"
      :type="type"
    />
  </div>
</template>

<script>
import Item from './Item.vue'

export default {
  data() {
    return {
      // this.$route references vue-router
      type: this.$route.params.type,
      items: []
    }
  },
  // Watch for changes!
  watch: {
    // whenever route property changes, do this
    '$route': 'fetchItems'
  },
  methods: {
    // populate items array in our data
    fetchItems() {
      this.items = []
      this.type = this.$route.params.type
      let initial_ids = [1, 13, 14]
      for (let i in initial_ids) {
        let id = initial_ids[i]
        console.log(id)
        fetch(`http://swapi.co/api/${this.type}/${id}`,
        {
          method: 'GET'
        })
        .then(response => response.json())
        .then(json => this.items.push(json))
      }
    }
  },
  // created lifecycle hook
  created() {
    this.fetchItems()
  },
  components: {
    Item
  }
}
</script>

<style lang="css">
</style>
