<template>
  <div class="bg-slate-100 p-5">
    <div class="px-64">
      <h2 class="text-5xl mb-5 font-bold">Create Journey</h2>
      <loader :loading="loading" :success="success" @close="closeModal"/>
      <form v-on:submit.prevent="submitForm" :class="{ hidden: loading}">
        <div class="flex flex-col h-96 justify-between">
          <label>Route: </label>
          <select name="driver" class=" border-dashed bg-yellow-100" v-model="routeSelected">
            <option v-for="route in routes" :key="route.id" v-bind:value="route.id">
              Route Origin: {{ route.origin }} - Route Destination: {{ route.destination}}
            </option>
          </select>

          <label>Buss: </label>
          <select name="driver" class=" border-dashed bg-yellow-100" v-model="bussSelected">
            <option v-for="buss in buses" :key="buss.id" v-bind:value="buss.id">
              Buss Id: {{ buss.id }} - Plate: {{ buss.plate}}
            </option>
          </select>

          <label for="date">Date: </label>
          <input type="date" id="date"  class="border-2 border-dashed" v-model="date">

          <label for="time">time: </label>
          <input type="time" id="time"  class="border-2 border-dashed" v-model="time">

          <input type="submit" value="Save" class="rounded-xl bg-green-400 text-white font-medium py-1"/>
        </div>
      </form>
    </div>
<!--      <button class="bg-red-400" @click="deleteBussRoute">Delete</button>-->
  </div>
</template>

<script>
import axios from 'axios'
import Loader from '../../components/Loader.vue'

export default {
  name: 'CreateBussRoute',
  components:{
    Loader,
  },
  data(){
    return {
      buss: {},
      date: '',
      time:'',
      bussRoute: {},
      buses: [],
      routes: [],
      bussSelected: Number,
      routeSelected: Number,
      loading: false,
      success: false
    }
  },
  computed: {
    destinationId(){
      return parseInt(this.$route.params.id)
    }
  },
  methods: {
    closeModal(){
      this.loading = !this.loading
      this.success = !this.success
    },
    getBuses () {
      return axios.get(`http://127.0.0.1:8000/api/buses/buss`, {
        headers: {'Content-type': 'application/json'}
      });
    },
    getRoutes () {
      return axios.get(`http://127.0.0.1:8000/api/routes/route`, {
        headers: {'Content-type': 'application/json'}
      });
    },
    async submitForm(){
      try {
        this.loading = !this.loading
        const response = await axios.post(`http://127.0.0.1:8000/buses/create-bussroute`, {
          route: { id: this.routeSelected },
          buss: { id: this.bussSelected },
          date: this.date,
          time: this.time
        });
        this.success = !this.success
        this.routeSelected = response.data.route.id;
        this.bussSelected = response.data.buss.id;
        this.date = response.data.date;
        this.time = response.data.time;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    // Get list of buses
    this.getBuses().then(response => {
      this.buses = response.data
    });

    // Get list of routes
    this.getRoutes().then(response => {
      this.routes = response.data
    });
  }
}
</script>