
<template>
  <div class="bg-slate-100 p-5">
    <h2 class="text-5xl mb-5 font-bold">List Drivers</h2>

    <div v-if="drivers">
      <table class="bg-white rounded-lg m-auto w-full rounded-md" cellspacing="2" cellpadding="2" border="1">
        <thead class="p-4 ">
          <tr class="p-4 bg-slate-800 text-left ">
            <th class="text-white">ID</th>
            <th class="text-white">Driver Name</th>
            <th class="text-white">Edit</th>
            <th class="text-white">Delete</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="driver in drivers" :key="driver.id">
              <td>{{ driver.id }}</td>
              <td>{{ driver.name }}</td>
              <td>
                <router-link :to="{name: 'detail.driver', params:{id:driver.id}}">Edit</router-link>
              </td>
              <td>
                <button @click="deleteDriver(driver.id)">Delete</button>
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
  name: 'ListDrivers',
  data(){
    return {
      drivers: [],
    }
  },
  methods: {
    async deleteDriver(id) {
      try{
        const response = await axios.delete(`http://127.0.0.1:8000/api/passenger/driver/${id}/`)
      } catch (error) {
        console.log(error)
      }
    }

  },
  mounted() {
    axios.get('http://127.0.0.1:8000/api/passenger/driver', {
      headers: {
          'Content-type': 'application/json',
      }
    })
    .then(response => (this.drivers = response.data))

  }


}
</script>