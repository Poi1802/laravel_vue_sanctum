<template>
  <form @submit.prevent="registr" class="w-25">
    <div class="mb-3">
      <label for="exampleInputPassword12" class="form-label">Name</label>
      <input v-model="form.name" type="text" class="form-control" id="exampleInputPassword12">
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input v-model="form.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input v-model="form.password" type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword14" class="form-label">Confirm-Password</label>
      <input v-model="form.password_confirmation" type="password" class="form-control" id="exampleInputPassword14">
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    form: {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    }
  }),
  methods: {
    registr() {
      axios.get('/sanctum/csrf-cookie')
        .then(res => {
          axios.post('/api/register', this.form)
            .then(res => localStorage.setItem('token', res.config.headers['X-XSRF-TOKEN']))
            .catch(err => console.log(err.response))
        })
    }
  }
}
</script>

<style lang="sass" scoped>

</style>