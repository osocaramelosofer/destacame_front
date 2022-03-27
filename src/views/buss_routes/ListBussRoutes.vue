
<template>
  <div class="bg-slate-100 p-5">
    <div class="px-44">
      <h2 class="text-5xl mb-5 font-bold">List Journeys</h2>

      <table class="bg-white rounded-lg m-auto w-full rounded-md" cellspacing="2" cellpadding="2" border="1">
        <thead class="p-4 ">
          <tr class="p-4 bg-slate-800 text-left ">
            <th class="text-white">ID</th>
            <th class="text-white">Route</th>
            <th class="text-white">Buss Plate</th>
            <th class="text-white">Date</th>
            <th class="text-white">Time</th>
            <th class="text-white">Edit</th>
            <th class="text-white">Delete</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="bussRoute in bussRoutes" :key="bussRoute.id" class="hover:bg-yellow-50">
              <td>{{ bussRoute.id }}</td>
              <td v-if="bussRoute.route">{{ bussRoute.route.origin }} - {{ bussRoute.route.destination }}</td>
              <td v-if="bussRoute.buss">{{ bussRoute.buss.plate }}</td>
              <td>{{ bussRoute.date }}</td>
              <td>{{ bussRoute.time }}</td>
              <td>
                <router-link :to="{name: 'detail.buss.route', params:{id:bussRoute.id}}">
                  <div class="bg-yellow-400 text-center text-xl rounded-3xl font-medium hover:bg-yellow-500">
                    Edit
                  </div>
                </router-link>
              </td>
              <td>
                <div @click="deleteBussRoute(bussRoute.id)" class="bg-red-400 text-center text-xl rounded-3xl font-medium text-white hover:bg-red-500 cursor-pointer">
                  Delete
                </div>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'ListBussRoutes',
  data(){
    return {
      bussRoutes: [],
    }
  },
  methods: {
    getBussRoutes () {
      return axios.get(`http://127.0.0.1:8000/api/buses/buss-route/`, {
        headers: {'Content-type': 'application/json',}
      });
    },
    async deleteBussRoute(id) {
      try{
        const response = await axios.delete(`http://127.0.0.1:8000/api/buses/buss-route/${id}/`)
        this.getBussRoutes().then( response => {
          this.bussRoutes = response.data
        });
      } catch (error) {
        console.log(error)
      }
    }

  },
  mounted() {
    axios.get('http://127.0.0.1:8000/api/buses/buss-route/', {
      headers: {'Content-type': 'application/json'}
    })
    .then(response => (this.bussRoutes = response.data))
  }
}
</script>