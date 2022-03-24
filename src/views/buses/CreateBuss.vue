
<template>
  <div class="bg-blue-300">
    <h2 class="bg-red-300 ">Create Buss</h2>

    <form v-on:submit.prevent="submitForm">
        <label for="name">Buss Driver Name</label>
        <input type="select" placeholder="Write the buss driver" id="name" v-model="name">

        <label for="name">Buss Plate</label>
        <input type="text" placeholder="Write the plate of the buss" id="name" v-model="plate">

        <input type="submit" value="Save"/>
    </form>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'CreateBuss',
  data(){
    return {
      name: '',
      plate: '',
      drivers: [],
    }
  },
  methods: {
    getDrivers () {
      return axios.get(`http://127.0.0.1:8000/api/passenger/driver`, {
            headers: {
                'Content-type': 'application/json',
            }
      });
    },
    async submitForm(){
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/buses/buss/', {
          name: this.name,
          plate: this.plate
        });
        this.name = response.data.name;
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