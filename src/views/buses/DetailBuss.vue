<template>
  <div class="bg-slate-100 p-5">
    <div class="px-44">
      <h2 class="text-5xl mb-5 font-bold">Detail Buss</h2>
      <loader :loading="loading" :success="success" @close="closeModal"/>
      <div v-if="Buss" :class="{hidden: loading}">
        <form v-on:submit.prevent="submitForm">
          <div class="flex flex-col h-44 justify-between">
            <label for="driver">Driver:</label>
            <select id="driver" name="driver" class=" border-dashed bg-yellow-100" v-model="driverSelected">
              <option v-for="driver in drivers" :key="driver.id" v-bind:value="driver.id">
                {{ driver.name }}
              </option>
            </select>

            <label for="name">Buss Plate: </label>
            <input type="text" id="name"  class="border-2 border-dashed" v-model="plate">

            <input type="submit" value="Save" class="rounded-xl bg-green-400 text-white font-medium py-1 cursor-pointer"/>
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
  name: 'DetailDriver',
  components:{
    Loader
  },
  data(){
    return {
      driver: {},
      plate: '',
      Buss: {},
      drivers:[],
      driverSelected: Number,
      loading: false,
      success: false,
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
    },
    getBuses () {
      return axios.get(`http://127.0.0.1:8000/api/buses/buss`, {
            headers: {
                'Content-type': 'application/json',
            }
      });
    },
    getDrivers () {
      return axios.get(`http://127.0.0.1:8000/api/passenger/driver`, {
            headers: {
                'Content-type': 'application/json',
            }
      });
    },
    async submitForm(){
      try {
        this.loading = !this.loading
        const response = await axios.post(`http://127.0.0.1:8000/buses/update`, {
          id: this.buss.id,
          plate: this.plate,
          driver: {id: this.driverSelected}
        });
        this.success = !this.success
        this.name = response.data.name;
        this.plate = response.data.plate;
      } catch (error) {
        console.log(error);
      }
    },

    async deleteBuss() {
      try{
        const response = await axios.delete(`http://127.0.0.1:8000/api/buses/buss/${this.destinationId}/`)
      } catch (error) {
        console.log(error)
      }
    }


  },
  mounted() {
    // Get buss detail
    axios.get(`http://127.0.0.1:8000/api/buses/buss/${this.destinationId}`, {
      headers: {
          'Content-type': 'application/json',
      }
    })
    .then(response => {
      this.buss = response.data
      this.driver = this.buss.driver
      this.plate = this.buss.plate

      // Get list of drivers
      this.getDrivers().then(response => {
        this.drivers = response.data
        this.driverSelected = this.driver.id
      });
    })

  }

}
</script>