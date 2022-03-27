<template>
  <div>
    <div class="px-64">
      <h2 class="text-5xl mb-5 font-bold">Detail Passenger</h2>
      <loader @close="closeModal" :loading="loading" :success="success" />
      <div v-if="passenger" :class="{hidden: loading}">
        <form v-on:submit.prevent="submitForm">
          <div class="flex flex-col">
            <label for="name">Passenger Name: </label>
            <input type="text" placeholder="Write your name" id="name"  class="border-2 border-dashed" v-model="name">

            <label>Journey</label>
            <select v-model="bussRouteSelected" class="bg-yellow-100">
              <option v-for="buss in bussRoutes" :key="buss.id" v-bind:value="buss.id">
                {{ buss.id }} - {{ buss.route.origin }} - {{ buss.route.destination}}
              </option>
            </select>

            <input type="submit" value="Save" class="cursor-pointer rounded-xl  bg-green-400 text-white font-medium py-1" />
          </div>
        </form>
      </div>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'
import Loader from '../../components/Loader.vue'

export default {
  name: 'DetailPassenger',
  components: {
    Loader,
  },
  data(){
    return {
      name: '',
      passenger: {},
      bussRoutes: [],
      routes: [],
      bussRouteSelected: Number,
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
    getPassengers(){
      return axios.get(`http://127.0.0.1:8000/api/passenger/passenger/${this.destinationId}`, {
        headers: {'Content-type': 'application/json'}
      })
    },
    getBussRoute () {
      return axios.get(`http://127.0.0.1:8000/api/buses/buss-route/`, {
        headers: {'Content-type': 'application/json'}
      });
    },
    getRoutes () {
      return axios.get(`http://127.0.0.1:8000/api/routes/route`, {
        headers: {
          'Content-type': 'application/json',
        }
      });
    },
    async submitForm(){
      try {
        this.loading = !this.loading
        const response = await axios.post(`http://127.0.0.1:8000/passengers/update-passenger`, {
          id: this.passenger.id,
          name: this.name,
          leg: { id: this.bussRouteSelected }
        });
        this.success = !this.success
      } catch (error) {
        console.log(error);
      }
    },
    async deletePassenger() {
      try{
        const response = await axios.delete(`http://127.0.0.1:8000/api/passenger/passenger/${this.destinationId}/`)
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted() {
    this.getPassengers().then(response => {
      this.passenger = response.data
      this.name = this.passenger.name
      this.bussRouteSelected = this.passenger.leg.id
      this.routeSelected = this.passenger.leg.route.id
    })

    this.getBussRoute().then(response => {
      this.bussRoutes = response.data
    })

    this.getRoutes().then(response => {
      this.routes = response.data
    })
  }
}
</script>