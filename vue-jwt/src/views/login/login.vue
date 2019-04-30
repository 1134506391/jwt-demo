<template>
  <div>
    <input type="text" v-model="username">
    <input type="text" v-model="password">
    <button @click="login">login</button>

  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      axios.post('http://localhost:7001/login', {
        params: {
          username: this.username,
          password: this.password
        }
      })
        .then(response => {
          if (response.data.ok) {
            sessionStorage.setItem('token', response.data.data.token)
          }
        })
    }
  }
}
</script>
