
<template>
  <div class="bg-blue-300">
    <h2 class="bg-red-300 ">Create Passenger</h2>

    <form v-on:submit.prevent="submitForm">
        <label for="name">Passenger Name</label>
        <input type="text" placeholder="Write your name" id="name" v-model="name">
        
        <input type="submit" value="Save"/>
    </form>
  </div>

</template>

<script>
import { onMounted } from 'vue'
import axios from 'axios'
import { ref } from 'vue'

export default {
  name: 'CreatePassenger',
  data(){
    return {
      name: '',
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
    
    async submitForm(){
      try {
        // Send a POST request to the API
        const response = await axios.post('http://127.0.0.1:8000/api/passenger/passenger/', {
          name: this.name,
        });
        // Append the returned data to the tasks array
        // this.tasks.push(response.data);
        // Reset the title and description field values.
        this.name = '';
      } catch (error) {
        console.log(error);
      }
    }
    

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