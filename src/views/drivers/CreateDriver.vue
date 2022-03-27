
<template>
  <div class="bg-slate-100 p-5">
    <div class="px-72">
      <h2 class="text-5xl mb-5 font-bold">Create Driver</h2>

      <loader :loading="loading" :success="success" @close="closeModal"/>

      <form v-on:submit.prevent="submitForm" :class="{hidden: loading}">
        <div class="flex flex-col h-28 justify-between">
          <label for="name">Driver Name</label>
          <input type="text" placeholder="Write your name" id="name" v-model="name" class="border-2 border-dashed">

          <input type="submit" value="Save" class="rounded-xl bg-green-400 text-white font-medium py-1 cursor-pointer"/>
        </div>
      </form>
    </div>
  </div>

</template>

<script>
import axios from 'axios'
import Loader from '../../components/Loader.vue'

export default {
  name: 'CreateDriver',
  components: {
    Loader
  },
  data(){
    return {
      name: '',
      loading: false,
      success: false,
    }
  },
  methods: {
    closeModal(){
      this.loading = !this.loading
      this.success = !this.success
    },
    async submitForm(){
      try {
        this.loading = !this.loading
        const response = await axios.post('http://127.0.0.1:8000/api/passenger/driver/', {
          name: this.name,
        });
        this.success = !this.success
        this.name = '';
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>