
<template>
  <div class="bg-blue-300">
    <h2 class="bg-red-300 ">Create Route</h2>

    <form v-on:submit.prevent="submitForm">
        <label for="origin">Route origin</label>
        <input type="text" placeholder="Write the origin" id="origin" v-model="origin">


        <label for="destination">Route destination</label>
        <input type="text" placeholder="Write the destination" id="destination" v-model="destination">

        <input type="submit" value="Save"/>
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