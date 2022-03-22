
<template>
  <div class="bg-slate-100 p-5">
    <h2 class="text-5xl mb-5 font-bold">List Passengers</h2>
    <!-- <button @click="getRoutes">get Routes</button> -->

    <table class="bg-white rounded-lg m-auto w-full rounded-md" cellspacing="2" cellpadding="2" border="1">
      <thead class="p-4 ">
        <tr class="p-4 bg-slate-800 text-left ">
          <th class="text-white">ID</th>
          <th class="text-white">Passenger Name</th>
          <th class="text-white">Edit</th>
          <th class="text-white">Delete</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="passenger in passengers" :key="passenger.id">
            <td>{{ passenger.id }}</td>
            <td>{{ passenger.name }}</td>
            <td>
              <router-link :to="{name: 'detail.passenger', params:{id:passenger.id}}">Edit</router-link>
            </td>
            <td>
              <button @click="deletePassenger(passenger.id)">Delete</button>
            </td>
          </tr>
      </tbody>
    </table>
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
    async deletePassenger(id) {
      try{
        const response = await axios.delete(`http://127.0.0.1:8000/api/passenger/passenger/${id}/`)
      } catch (error) {
        console.log(error)
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