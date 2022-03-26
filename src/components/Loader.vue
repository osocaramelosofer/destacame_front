<script setup>

defineProps({
  loading: Boolean
})
const closeModal = () => {
  this.loading = !this.loading
}
</script>


<template>
    <div class="mx-auto bg-white flex flex-col items-center rounded-3xl pb-8 w-52 " v-bind:class="{ hidden: !loading }">
      {{ loading }}
      <div @click="closeModal">X</div>
      <div class="w-36 h-36 p-2">
        <img src="../assets/fast.gif" alt="fast-move" class="h-full w-full object-cover rounded-lg"/>
      </div>
      <div class="loader"></div>
      <span class="mt-5 font-bold">Loading ...</span>
    </div>
</template>

<style scoped>
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