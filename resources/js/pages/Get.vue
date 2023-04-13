<template>
  <div>
    Get
  </div>
</template>

<script>
import axios from 'axios';

export default {
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      axios.get('/api/get')
        .then(res => console.log(res))
        .catch(err => console.log(err.response))
    }
  }
}
</script>

<style lang="sass" scoped>

</style>