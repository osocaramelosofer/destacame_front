<template>
  <div class="bg-slate-100 p-5">
    <h2 class="text-5xl mb-5 font-bold">Driver Detail</h2>
    <div v-if="driver">
      <form v-on:submit.prevent="submitForm">
        <div class="flex flex-col">
          <label for="name">Driver Name: </label>
          <input type="text" id="name"  class="border-2 border-dashed" v-model="name">

          <input type="submit" value="Save" class="rounded-md border-2 border-rose-500 bg-yellow-400 text-black font-bold"/>
        </div>
      </form>

      <button class="bg-red-400" @click="deleteDriver">Delete</button>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'DetailDriver',
  data(){
    return {
      name: '',
      driver: {},
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
        const response = await axios.put(`http://127.0.0.1:8000/api/passenger/driver/${this.destinationId}/`, {
          name: this.name,
        });
        this.name = '';
      } catch (error) {
        console.log(error);
      }
    },

    async deleteDriver() {
      try{
        const response = await axios.delete(`http://127.0.0.1:8000/api/passenger/driver/${this.destinationId}/`)
      } catch (error) {
        console.log(error)
      }
    }


  },
  mounted() {
    axios.get(`http://127.0.0.1:8000/api/passenger/driver/${this.destinationId}`, {
      headers: {
          'Content-type': 'application/json',
      }
    })
    .then(response => {
      this.driver = response.data
      this.name = this.driver.name
    })
  }

}
</script>