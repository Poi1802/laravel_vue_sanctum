<template>
  <Navbar></Navbar>
  <RouterView :id="$route.fullPath"></RouterView>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar
  }
}
</script>
