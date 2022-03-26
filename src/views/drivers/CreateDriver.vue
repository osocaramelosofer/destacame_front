
<template>
  <div class="bg-slate-100 p-5">
    <h2 class="text-5xl mb-5 font-bold">Create Driver</h2>

    <form v-on:submit.prevent="submitForm">
      <div class="flex flex-col">
        <label for="name">Driver Name</label>
        <input type="text" placeholder="Write your name" id="name" v-model="name" class="border-2 border-dashed">

        <input type="submit" value="Save" class="rounded-md border-2 border-rose-500 bg-yellow-400 text-black font-bold"/>
      </div>
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