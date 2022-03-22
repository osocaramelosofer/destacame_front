
<template>
  <div class="bg-blue-300">
    <h2 class="bg-red-300 ">List Passengers</h2>
    <!-- <button @click="getRoutes">get Routes</button> -->

    <ul v-if="passengers">
      <li v-for="(passenger, index) in passengers" :key="index">
        {{ passenger.name}}
      </li>
    </ul>
  </div>

</template>

<script>
import { onMounted } from 'vue'
import axios from 'axios'
import { ref } from 'vue'

export default {
  name: 'ListPassengers',
  data(){
    return {
      message: 'hola',
      passengers: [],
    }
  },
  methods: {
    fortmatResponse(res) {
    return JSON.stringify(res, null, 2);
    },
    getRoutes() {
    axios.get('http://127.0.0.1:8000/api/buses/buses/', {
      headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'X-Requested-With': 'XMLHttpRequest',
        'Access-Control-Allow-Credentials': 'true'
      },
    })
    .then(console.log(response))
    },

  },
  mounted() {
    axios.get('http://127.0.0.1:8000/api/passenger/passenger', {
      headers: {
          'Content-type': 'application/json',
      }
    })
    .then(response => (this.passengers = response.data))
 
  }


}
</script>