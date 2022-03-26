
<template>
  <div class="bg-slate-100 p-20">
    <h2 class="text-5xl mb-5 font-bold">Create Route</h2>

    <form v-on:submit.prevent="submitForm">
      <div class="flex flex-col">
        <label for="origin">Route origin</label>
        <input type="text" placeholder="Write the origin" id="origin" v-model="origin" class="border-2 border-dashed">


        <label for="destination">Route destination</label>
        <input type="text" placeholder="Write the destination" id="destination" v-model="destination" class="border-2 border-dashed">

        <input type="submit" value="Save" class="rounded-md border-2 border-rose-500 bg-yellow-400 text-black font-bold"/>
      </div>
    </form>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'CreateRoute',
  data(){
    return {
      origin: '',
      destination: '',
    }
  },
  methods: {
    async submitForm(){
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/routes/route/', {
          origin: this.origin,
          destination: this.destination
        });
        this.origin = '';
        this.destination = '';
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>