<template>
  <div class="bg-slate-100 p-5">
    <div class="px-72">
      <h2 class="text-5xl mb-5 font-bold">Driver Detail</h2>
      <loader :loading="loading" :success="success" @close="closeModal"/>

      <div v-if="driver">
        <form v-on:submit.prevent="submitForm" :class="{hidden: loading}">
          <div class="flex flex-col h-28 justify-between">
            <label for="name">Driver Name: </label>
            <input type="text" id="name"  class="border-2 border-dashed" v-model="name">

            <input type="submit" value="Save" class="rounded-xl bg-green-400 hover:bg-green-500 text-white font-medium py-1 cursor-pointer"/>
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
  name: 'DetailDriver',
  components:{
    Loader
  },
  data(){
    return {
      name: '',
      driver: {},
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
        const response = await axios.put(`http://127.0.0.1:8000/api/passenger/driver/${this.destinationId}/`, {
          name: this.name,
        });
        this.success = !this.success
        this.name = response.data.name;
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