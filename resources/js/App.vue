<template>
  <Navbar :token="token"></Navbar>
  <RouterView :id="$route.fullPath"></RouterView>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar
  },
  data: () => ({
    token: localStorage.getItem('token')
  }),
  updated() {
    this.token = localStorage.getItem('token')
  }
}
</script>
