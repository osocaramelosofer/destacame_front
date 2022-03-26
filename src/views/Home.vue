<template>
  <div class="parent">
    <span class="text-3xl text-green-400">Hola</span>
    <test />
  </div>
</template>

<script>
import Test from '../components/Test.vue'


export default {
  name:'Home',
  components: {
    Test
  }
}

</script>

<style scoped>
.parent {
  background-color: #37afff;
}
</style>