
<template>
  <div class="bg-slate-100 p-5">
    <div class="px-64 mt-36">
      <h2 class="text-5xl mb-5 font-bold">Create Route</h2>
      <loader :loading="loading" :success="success" @close="closeModal"/>
      <form v-on:submit.prevent="submitForm" :class="{hidden: loading}">
        <div class="flex flex-col h-60 justify-between">
          <label for="origin">Route origin</label>
          <input type="text" placeholder="Write the origin" id="origin" v-model="origin" class="border-2 border-dashed">


          <label for="destination">Route destination</label>
          <input type="text" placeholder="Write the destination" id="destination" v-model="destination" class="border-2 border-dashed">

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
  name: 'CreateRoute',
  components:{
    Loader,
  },
  data(){
    return {
      origin: '',
      destination: '',
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
        const response = await axios.post('http://127.0.0.1:8000/api/routes/route/', {
          origin: this.origin,
          destination: this.destination
        });
        this.success = !this.success
        this.origin = '';
        this.destination = '';
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>
<style scoped>
.container {
  background-image: url("../../assets/asset2.png");
  background-repeat:no-repeat;
  background-size:contain;
  background-position:center;
}
</style>