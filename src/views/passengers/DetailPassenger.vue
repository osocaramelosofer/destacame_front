<template>
  <div class="bg-slate-100 p-5">
    <h2 class="text-5xl mb-5 font-bold">Detail Passenger</h2>
    <div v-if="passenger">
      <form v-on:submit.prevent="submitForm">
        <div class="flex flex-col">
          <label for="name">Passenger Name: </label>
          <input type="text" placeholder="Write your name" id="name"  class="border-2 border-dashed" v-model="name">

          <input type="submit" value="Save" class="rounded-md border-2 border-rose-500 bg-yellow-400 text-black font-bold"/>
        </div>
      </form>

      <button class="bg-red-400" @click="deletePassenger">Delete</button>
    </div>
    
  </div>
</template>

<script>
import { onMounted } from 'vue'
import axios from 'axios'
import { ref } from 'vue'

export default {
  name: 'DetailPassenger',
  data(){
    return {
      name: '',
      passenger: {},
    }
  },
  computed: {
    destinationId(){
      return parseInt(this.$route.params.id)
    }
  },
  methods: {
    fortmatResponse(res) {
    return JSON.stringify(res, null, 2);
    },

    async submitForm(){
      try {
        // Send a POST request to the API
        const response = await axios.put(`http://127.0.0.1:8000/api/passenger/passenger/${this.destinationId}/`, {
          name: this.name,
        });
        // Append the returned data to the tasks array
        // this.tasks.push(response.data);
        // Reset the title and description field values.
        this.name = '';
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
    axios.get(`http://127.0.0.1:8000/api/passenger/passenger/${this.destinationId}`, {
      headers: {
          'Content-type': 'application/json',
      }
    })
    .then(response => {
      this.passenger = response.data
      this.name = this.passenger.name
    })
 
  }


}
</script>