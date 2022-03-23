<template>
  <div class="bg-slate-100 p-5">
    <h2 class="text-5xl mb-5 font-bold">Route Detail</h2>
    <div v-if="route">
      <form v-on:submit.prevent="submitForm">
        <div class="flex flex-col">
          <label for="origin">Route origin: </label>
          <input type="text" id="origin"  class="border-2 border-dashed" v-model="origin">

          <label for="destination">Route destination: </label>
          <input type="text" id="destination"  class="border-2 border-dashed" v-model="destination">

          <input type="submit" value="Save" class="rounded-md border-2 border-rose-500 bg-yellow-400 text-black font-bold"/>
        </div>
      </form>

      <button class="bg-red-400" @click="deleteRoute">Delete</button>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'DetailRoute',
  data(){
    return {
      origin: '',
      destination: '',
      route: {},
    }
  },
  computed: {
    destinationId(){
      return parseInt(this.$route.params.id)
    }
  },
  methods: {
    async submitForm(){
      try {
        const response = await axios.put(`http://127.0.0.1:8000/api/routes/route/${this.destinationId}/`, {
          origin: this.origin,
          destination: this.destination,
        });
      } catch (error) {
        console.log(error);
      }
    },

    async deleteRoute() {
      try{
        const response = await axios.delete(`http://127.0.0.1:8000/api/routes/route/${this.destinationId}/`)
      } catch (error) {
        console.log(error)
      }
    }


  },
  mounted() {
    axios.get(`http://127.0.0.1:8000/api/routes/route/${this.destinationId}`, {
      headers: {
          'Content-type': 'application/json',
      }
    })
    .then(response => {
      console.log("ROUTE =>",this.route)
      this.route = response.data
      this.origin = this.route.origin
      this.destination = this.route.destination
    })

  }

}
</script>