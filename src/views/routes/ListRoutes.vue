
<template>
  <div class="container">
    <div class="px-44">
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
              <tr v-for="route in routes" :key="route.id" class="hover:bg-yellow-50">
                <td>{{ route.id }}</td>
                <td>{{ route.origin }}</td>
                <td>{{ route.destination }}</td>
                <td>
                  <router-link :to="{name: 'detail.route', params:{id:route.id}}">
                    <div class="bg-yellow-400 hover:bg-yellow-500 rounded-3xl text-black text-center font-medium cursor-pointer text-xl">
                      Edit
                    </div>
                  </router-link>
                </td>
                <td>
                  <div @click="deleteRoute(route.id)" class="bg-red-400 hover:bg-red-500 rounded-3xl text-white text-center font-medium cursor-pointer text-xl">Delete</div>
                </td>
              </tr>
          </tbody>
        </table>
      </div>

      <div v-else>
        <p>No Routes yet</p>
      </div>
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
<style>
.container{
  background-repeat:no-repeat;
  /*background-size:contain;*/
  background-position:center;
  height: 1000px;
  background-image: url("../../assets/asset3r.png");
}
</style>