
<template>
  <div class="bg-slate-100 p-5">
    <div class="px-44">
      <h2 class="text-5xl mb-5 font-bold">List Buses</h2>

      <div v-if="buses.length !== 0">
        <table class="bg-white rounded-lg m-auto w-full rounded-md" cellspacing="2" cellpadding="2" border="1">
          <thead class="p-4 ">
            <tr class="p-4 bg-slate-800 text-left ">
              <th class="text-white">ID</th>
              <th class="text-white">Driver Name</th>
              <th class="text-white">Plate</th>
              <th class="text-white">Edit</th>
              <th class="text-white">Delete</th>
            </tr>
          </thead>
          <tbody>
              <tr v-for="buss in buses" :key="buss.id" class="hover:bg-yellow-50">
                <td>{{ buss.id }}</td>
                <td>{{ buss.driver.name }}</td>
                <td>{{ buss.plate }}</td>
                <td>
                  <router-link :to="{name: 'detail.buss', params:{id:buss.id}}">
                    <div class="bg-yellow-400 hover:bg-yellow-500 rounded-3xl text-black text-center font-medium cursor-pointer text-xl">
                      Edit
                    </div>
                  </router-link>
                </td>
                <td>
                  <div @click="deleteBuss(buss.id)" class="bg-red-400 hover:bg-red-500 rounded-3xl text-white text-center font-medium cursor-pointer text-xl">
                    Delete
                  </div>
                </td>
              </tr>
          </tbody>
        </table>
      </div>

      <div v-else class="w-64 bg-white rounded-2xl mx-auto py-10 flex flex-col items-center">
        <div class="w-48 h-48">
          <img src="../../assets/no_datar.png" alt="no data" class="h-full w-full object-cover rounded-lg" />
        </div>
        <span class="font-medium text-medium mt-5">It seems there is no data yet.</span>
        <div class="hover:bg-green-500 bg-green-400 w-48 rounded-xl text-white font-medium text-center py-1 mt-5">
          <router-link to="/create-buss">
            + Add new one
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'ListBuses',
  data(){
    return {
      buses: [],
    }
  },
  methods: {
    getBuses () {
      return axios.get(`http://127.0.0.1:8000/api/buses/buss`, {
        headers: {'Content-type': 'application/json'}
      });
    },
    async deleteBuss(id) {
      try{
        const response = await axios.delete(`http://127.0.0.1:8000/api/buses/buss/${id}/`)
        this.getBuses().then(response => {
          this.buses = [... response.data]
        });
      } catch (error) {
        console.log(error)
      }
    }

  },
  mounted() {
    axios.get('http://127.0.0.1:8000/api/buses/buss', {
      headers: {
          'Content-type': 'application/json',
      }
    })
    .then(response => (this.buses = response.data))

  }


}
</script>