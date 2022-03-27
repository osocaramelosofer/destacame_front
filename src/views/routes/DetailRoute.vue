<template>
  <div class="bg-slate-100 p-5">
    <div class="px-64 mt-36">
      <h2 class="text-5xl mb-5 font-bold">Route Detail</h2>
      <loader :loading="loading" :success="success" @close="closeModal"/>
      <div v-if="route" :class="{hidden: loading}">
        <form v-on:submit.prevent="submitForm">
          <div class="flex flex-col h-60 justify-between">
            <label for="origin">Route origin: </label>
            <input type="text" id="origin"  class="border-2 border-dashed" v-model="origin">

            <label for="destination">Route destination: </label>
            <input type="text" id="destination"  class="border-2 border-dashed" v-model="destination">

            <input type="submit" value="Save" class="rounded-xl bg-green-400 text-white font-medium py-1 cursor-pointer"/>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Loader from '../../components/Loader.vue'

export default {
  name: 'DetailRoute',
  components: {
    Loader
  },
  data(){
    return {
      origin: '',
      destination: '',
      route: {},
      loading: false,
      success: false
    }
  },
  computed: {
    destinationId(){
      return parseInt(this.$route.params.id)
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
        const response = await axios.put(`http://127.0.0.1:8000/api/routes/route/${this.destinationId}/`, {
          origin: this.origin,
          destination: this.destination,
        });
        this.success = !this.success
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