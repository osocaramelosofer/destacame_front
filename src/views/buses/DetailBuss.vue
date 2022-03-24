<template>
  <div class="bg-slate-100 p-5">
    <h2 class="text-5xl mb-5 font-bold">Detail Buss</h2>
    <div v-if="Buss">
      <form v-on:submit.prevent="submitForm">
        <div class="flex flex-col">
          <label for="name">Buss Driver Name: </label>
          <input type="text" id="name"  class="border-2 border-dashed" v-model="name">

          <label for="name">Buss Plate: </label>
          <input type="text" id="name"  class="border-2 border-dashed" v-model="plate">

          <input type="submit" value="Save" class="rounded-md border-2 border-rose-500 bg-yellow-400 text-black font-bold"/>
        </div>
      </form>

      <button class="bg-red-400" @click="deleteBuss">Delete</button>
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
      plate: '',
      Buss: {},
    }
  },
  computed: {
    destinationId(){
      return parseInt(this.$route.params.id)
    }
  },
  methods: {
    getBuses () {
      return axios.get(`http://127.0.0.1:8000/api/buses/buss`, {
            headers: {
                'Content-type': 'application/json',
            }
      });
    },
    async submitForm(){
      try {
        const response = await axios.put(`http://127.0.0.1:8000/api/buses/buss/${this.destinationId}/`, {
          name: this.name,
        });
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
    axios.get(`http://127.0.0.1:8000/api/buses/buss/${this.destinationId}`, {
      headers: {
          'Content-type': 'application/json',
      }
    })
    .then(response => {
      this.buss = response.data
      this.name = this.buss.name
      this.plate = this.buss.plate
    })
  }

}
</script>