
<template>
  <div class="bg-slate-100 p-5">
    <div class="px-60 mt-36">
      <h2 class="text-5xl mb-5 font-bold">Create Passenger</h2>
      <loader :loading="loading" :success="success" @close="closeModal"/>

      <form v-on:submit.prevent="submitForm" :class="{ hidden:loading }">
        <div class="flex flex-col h-56 justify-between">
          <label for="name">Passenger Name</label>
          <input type="text" placeholder="Write your name" id="name" v-model="name">

          <label>Select journey</label>
          <select v-model="bussRouteSelected" class="bg-yellow-100">
            <option v-for="buss in bussRoutes" :key="buss.id" v-bind:value="buss.id">
              {{ buss.id }} - {{ buss.route.origin }} - {{ buss.route.destination}}
            </option>
          </select>

          <input type="submit" value="Save" class="rounded-xl  bg-green-400 text-white font-medium py-1 cursor-pointer"/>
        </div>
      </form>
    </div>
  </div>

</template>

<script>
import axios from 'axios'
import Loader from '../../components/Loader.vue'

export default {
  name: 'CreatePassenger',
  components:{
    Loader
  },
  data(){
    return {
      name: '',
      passengers: [],
      bussRoutes: [],
      bussRouteSelected: Number,
      loading: false,
      success: false
    }
  },
  methods: {
    closeModal(){
      this.loading = !this.loading
      this.success = !this.success
    },
    getPassengers(){
      return axios.get('http://127.0.0.1:8000/api/passenger/passenger', {
        headers: {'Content-type': 'application/json'}
      })
    },
    getBussRoute () {
      return axios.get(`http://127.0.0.1:8000/api/buses/buss-route/`, {
        headers: {'Content-type': 'application/json'}
      });
    },
    async submitForm(){
      try {
        this.loading = !this.loading
        const response = await axios.post('http://127.0.0.1:8000/passengers/create-passenger', {
          name: this.name,
          leg: {id: this.bussRouteSelected}
        });
        this.success = !this.success
        this.name = '';
      } catch (error) {
        console.log(error);
      }
    }

  },
  mounted() {
    this.getPassengers().then(response => (this.passengers = response.data))
    this.getBussRoute().then(response => {
      this.bussRoutes = response.data
    })
  }
}
</script>