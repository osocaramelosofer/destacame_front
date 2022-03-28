
<template>
  <div class="bg-slate-100 p-5">
    <div class="px-40 mt-36">
      <h2 class="text-5xl mb-5 font-bold">List Passengers</h2>

      <table class="bg-white rounded-lg m-auto w-full rounded-md" cellspacing="2" cellpadding="2" border="1" v-if="passengers.length !== 0">
        <thead class="p-4 ">
          <tr class="p-4 bg-slate-800 text-left ">
            <th class="text-white">ID</th>
            <th class="text-white">Passenger Name</th>
            <th class="text-white">Route</th>
            <th class="text-white">Buss Plate</th>
            <th class="text-white">Edit</th>
            <th class="text-white">Delete</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="passenger in passengers" :key="passenger.id">
              <td>{{ passenger.id }}</td>
              <td>{{ passenger.name }}</td>
              <td v-if="passenger.leg">{{ passenger.leg.route.origin }} - {{ passenger.leg.route.destination }}</td>
              <td v-if="passenger.leg">{{ passenger.leg.buss.plate }} </td>
              <td>
                <router-link :to="{name: 'detail.passenger', params:{id:passenger.id}}">
                  <div class="bg-yellow-400 text-center text-xl rounded-3xl font-medium hover:bg-yellow-500">
                    Edit
                  </div>
                </router-link>
              </td>
              <td>
                <div @click="deletePassenger(passenger.id)" class="bg-red-400 text-center text-xl rounded-3xl font-medium text-white cursor-pointer hover:bg-red-600">
                  Delete
                </div>
              </td>
            </tr>
        </tbody>
      </table>

      <div v-else class="w-64 bg-white rounded-2xl mx-auto py-10 flex flex-col items-center">
        <div class="w-48 h-48">
          <img src="../../assets/no_datar.png" alt="no data" class="h-full w-full object-cover rounded-lg" />
        </div>
        <span class="font-medium text-medium mt-5">It seems there is no data yet.</span>
        <div class="hover:bg-green-500 bg-green-400 w-48 rounded-xl text-white font-medium text-center py-1 mt-5">
          <router-link to="/create-passenger">
            + Add new one
          </router-link>
        </div>
      </div>
    </div>
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
    getPassengers(){
      return axios.get('http://127.0.0.1:8000/api/passenger/passenger', {
        headers: {'Content-type': 'application/json'}
      })
    },
    async deletePassenger(id) {
      try{
        const response = await axios.delete(`http://127.0.0.1:8000/api/passenger/passenger/${id}/`)

        this.getPassengers().then(response => { this.passengers = [... response.data]})
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