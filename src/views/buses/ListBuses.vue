
<template>
  <div class="bg-slate-100 p-5">
    <h2 class="text-5xl mb-5 font-bold">List Buses</h2>

    <div v-if="buses">
      <table class="bg-white rounded-lg m-auto w-full rounded-md" cellspacing="2" cellpadding="2" border="1">
        <thead class="p-4 ">
          <tr class="p-4 bg-slate-800 text-left ">
            <th class="text-white">ID</th>
            <th class="text-white">Name</th>
            <th class="text-white">Plate</th>
            <th class="text-white">Edit</th>
            <th class="text-white">Delete</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="buss in buses" :key="buss.id">
              <td>{{ buss.id }}</td>
              <td>{{ buss.name }}</td>
              <td>{{ buss.plate }}</td>
              <td>
                <router-link :to="{name: 'detail.buss', params:{id:buss.id}}">Edit</router-link>
              </td>
              <td>
                <button @click="deleteBuss(buss.id)">Delete</button>
              </td>
            </tr>
        </tbody>
      </table>
    </div>

    <div v-else>
      <p>No drivers yet</p>
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
            headers: {
                'Content-type': 'application/json',
            }
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