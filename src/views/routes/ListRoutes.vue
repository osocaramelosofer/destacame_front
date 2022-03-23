
<template>
  <div class="bg-slate-100 p-5">
    <h2 class="text-5xl mb-5 font-bold">List Routes</h2>

    <div v-if="routes">
      <table class="bg-white rounded-lg m-auto w-full rounded-md" cellspacing="2" cellpadding="2" border="1">
        <thead class="p-4 ">
          <tr class="p-4 bg-slate-800 text-left ">
            <th class="text-white">ID</th>
            <th class="text-white">Route Origin</th>
            <th class="text-white">Route Destination</th>
            <th class="text-white">Edit</th>
            <th class="text-white">Delete</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="route in routes" :key="route.id">
              <td>{{ route.id }}</td>
              <td>{{ route.origin }}</td>
              <td>{{ route.destination }}</td>
              <td>
                <router-link :to="{name: 'detail.route', params:{id:route.id}}">Edit</router-link>
              </td>
              <td>
                <button @click="deleteRoute(route.id)">Delete</button>
              </td>
            </tr>
        </tbody>
      </table>
    </div>

    <div v-else>
      <p>No Routes yet</p>
    </div>

  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'ListRoutes',
  data(){
    return {
      routes: [],
    }
  },
  methods: {
    async deleteRoute(id) {
      try{
        const response = await axios.delete(`http://127.0.0.1:8000/api/routes/route/${id}/`)
      } catch (error) {
        console.log(error)
      }
    }

  },
  mounted() {
    axios.get('http://127.0.0.1:8000/api/routes/route', {
      headers: {
          'Content-type': 'application/json',
      }
    })
    .then(response => (this.routes = response.data))

  }


}
</script>