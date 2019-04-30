<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      data: ''
    }
  },
  methods: {
    getData2 () {
      console.log(sessionStorage.getItem('token'))
      axios.get('http://localhost:7001/role')
        .then(response => {
          console.log(response)
        })
    }
  },
  created () {
    this.getData2()
  }
}
</script>
