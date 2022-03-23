
<template>
  <div class="bg-blue-300">
    <h2 class="bg-red-300 ">Create Driver</h2>

    <form v-on:submit.prevent="submitForm">
        <label for="name">Driver Name</label>
        <input type="text" placeholder="Write your name" id="name" v-model="name">

        <input type="submit" value="Save"/>
    </form>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'CreateDriver',
  data(){
    return {
      name: '',
    }
  },
  methods: {
    async submitForm(){
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/passenger/driver/', {
          name: this.name,
        });
        this.name = '';
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>