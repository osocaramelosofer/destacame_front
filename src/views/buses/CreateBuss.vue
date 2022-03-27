
<template>
  <div class="bg-slate-100 p-5">
    <div class="px-44">
      <h2 class="text-5xl mb-5 font-bold">Create Buss</h2>

      <loader v-model:loading="loading" @close="closeModal" :success="success" />
      <form v-on:submit.prevent="submitForm" v-bind:class="{ hidden: loading }">
        <div class="flex flex-col h-44 justify-between">
          <label for="name">Buss Plate</label>
          <input type="select" placeholder="Write the buss plate" class="border-2 border-dashed" id="name" v-model="plate">

          <label for="name">Select a Driver</label>
          <select name="driver" class=" border-dashed bg-yellow-100" v-model="driverSelected">
            <option v-for="driver in drivers" :key="driver.id" v-bind:value="driver.id">
              {{ driver.name }}
            </option>
          </select>

          <input type="submit" value="Save" class="rounded-xl bg-green-400 hover:bg-green-500 text-white font-medium py-1 cursor-pointer"/>
        </div>
      </form>
    </div>
  </div>

</template>

<script>
import axios from 'axios'
import Loader from '../../components/Loader.vue'

export default {
  name: 'CreateBuss',
  components: {
    Loader
  },
  data(){
    return {
      plate: '',
      drivers: [],
      driverSelected: Number,
      loading: false,
      success: false,
    }
  },
  methods: {
    closeModal(){
      this.loading = !this.loading
      this.success = !this.success
    },
    getDrivers () {
      return axios.get(`http://127.0.0.1:8000/api/passenger/driver`, {
            headers: {
                'Content-type': 'application/json',
            }
      });
    },
    async submitForm(){
      this.loading = !this.loading
      try {
        const response = await axios.post('http://127.0.0.1:8000/buses/create', {
          plate: this.plate,
          driver: { id: this.driverSelected}
        });
        this.success = !this.success
        this.driverSelected = response.data.driver.id;
        this.plate = response.data.plate;
      } catch (error) {
        console.log(error);
      }
    }
  },
  mounted() {
    this.getDrivers().then(response => {
      this.drivers = response.data
    });
  }
}
</script>
<style>
label{
  font-weight: bold;
}
</style>