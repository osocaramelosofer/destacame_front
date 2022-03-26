<template>
    <div class="loader-container mx-auto rounded-3xl w-52 pb-5 pt-3" v-bind:class="{ hidden: !loading }">
      <div class="flex flex-col items-center px-5">
        <div @click="closeModal" class="bg-red-500 self-end rounded-full w-6 h-6 flex justify-center cursor-pointer">
          <span class="text-white font-bold">X</span>
        </div>
        <div class="w-36 h-36 p-2" v-if="!success">
          <img src="../assets/fast.gif" alt="fast-move" class="h-full w-full object-cover rounded-lg"/>
        </div>
        <div class="w-30 h-30 p-2 rounded-3xl" v-else>
          <img src="../assets/ok.gif" alt="fast-move" class="h-full w-full object-cover rounded-lg"/>
        </div>
        <div class="loader" :class="{ hidden: success}"></div>
        <span class="mt-5 font-bold text-blue-400-" v-if="!success">Loading ...</span>
        <span class="font-bold text-green-400" v-else>Success</span>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Loader',
  props: {
    loading: Boolean,
    success: Boolean,
  },
  methods: {
    closeModal(){
      this.$emit('close')
    }
  }
}

</script>
<style scoped>
.loader-container {
  background-color: #FBFBFB;
}
.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #37afff;
  width: 50px;
  height: 50px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>

