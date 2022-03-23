<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

defineProps({
  msg: String
})

const count = ref(0)

</script>

<template>
  <nav class="bg-white flex justify-between items-center px-8">
    <div>
      <div class="dropdown">
        <button class="dropbtn">Passengers</button>
        <div class="dropdown-content">
          <router-link to="/list-passengers">List Passengers</router-link>
          <router-link to="/create-passenger">Create Passenger</router-link>
        </div>
      </div>

      <div class="dropdown">
        <button class="dropbtn">Routes</button>
        <div class="dropdown-content">
          <router-link to="/list-routes">List Routes</router-link>
          <router-link to="/create-route">Create Route</router-link>
        </div>
      </div>

      <div class="dropdown">
        <button class="dropbtn">Drivers</button>
        <div class="dropdown-content">
          <router-link to="/list-drivers">List drivers</router-link>
          <router-link to="/create-driver">Create Driver</router-link>
        </div>
      </div>

      <div class="dropdown">
        <button class="dropbtn">Journeys</button>
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </div>

    <div class="flex items-center">
      <div class="w-36 h-36 p-2">
        <img src="../assets/fast.gif" alt="fast-move" class="h-full w-full object-cover rounded-lg"/>
      </div>
      <span class="text-8xl font-mono font-extrabold">Fast Move</span>
    </div>
  </nav>
</template>

<style scoped>
.dropbtn {
  color: #374044;
  padding: 16px;
  font-size: 26px;
  border: none;
  border-radius: 10px;
  background-color: #FFB700;
}

.dropdown {
  position: relative;
  display: inline-block;
  margin-right: 20px;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: #424A4E;
  font-size: 20px;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #ddd;}

.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .dropbtn {background-color: #d49d10;}
</style>
