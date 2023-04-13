<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <RouterLink class="navbar-brand" :to="{ name: 'get.index' }">Main</RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink v-if="token" class="nav-link " aria-current="page" :to="{ name: 'get.index' }">Get</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink v-if="!token" class="nav-link " aria-current="page" :to="{ name: 'login' }">Login</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink v-if="!token" class="nav-link " aria-current="page" :to="{ name: 'registr' }">Registration
          </RouterLink>
        </li>
        <li class="nav-item">
          <a v-if="token" @click.prevent="logout" class="nav-link " aria-current="page" href="">Logout</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    token: String
  },
  methods: {
    logout() {
      axios.get('/sanctum/csrf-cookie')
        .then(res => {
          axios.post('/api/logout')
            .then(res => {
              localStorage.removeItem('token')
              this.$router.push({ name: 'login' })
            })
            .catch(err => console.log(err))
        })
    }
  }
}
</script>

<style lang="sass" scoped>

</style>