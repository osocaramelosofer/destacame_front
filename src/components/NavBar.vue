<script setup>

</script>

<template>
  <nav class="bg-white flex justify-around items-center px-8 fixed z-10 w-full nav_bar">
    <div class="flex items-center">
<!--      <div class="w-20 h-20 p-2">
        <img src="../assets/fastBusLogo.png" alt="fast-move" class="h-full w-full object-cover rounded-lg"/>
      </div>-->
      <router-link to="/" class="w-20 h-20">
      <logo />
      </router-link>
<!--      <span class="text-5xl font-mono font-extrabold">Fast Bus</span>-->
    </div>
    <div>
      <div class="dropdown">
        <div />
        <button class="dropbtn">Drivers</button>
        <div class="dropdown-content">
          <router-link to="/list-drivers">List drivers</router-link>
          <router-link to="/create-driver">Create Driver</router-link>
        </div>
      </div>

      <div class="dropdown">
        <button class="dropbtn">Buses</button>
        <div class="dropdown-content">
          <router-link to="/list-buses">List Buses</router-link>
          <router-link to="/create-buss">Create Buss</router-link>
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
        <button class="dropbtn">Journeys</button>
        <div class="dropdown-content">
          <router-link to="/list-buss-route">List Journeys</router-link>
          <router-link to="/create-buss-route">Create Journey</router-link>
        </div>
      </div>

      <div class="dropdown">
        <button class="dropbtn">Passengers</button>
        <div class="dropdown-content">
          <router-link to="/list-passengers">List Passengers</router-link>
          <router-link to="/create-passenger">Create Passenger</router-link>
        </div>
      </div>

    </div>

    <div class="flex items-center ">
<!--      <div class="w-20 h-20 p-2">
        <img src="../assets/fast.gif" alt="fast-move" class="h-full w-full object-cover rounded-lg"/>
      </div>-->
<!--      <custom-button />-->
      <custom-button-two />
<!--      <span class="text-5xl font-mono font-extrabold">Fast Move</span>-->
    </div>
  </nav>
</template>

<script>
import Logo from '../components/Logo.vue'
import CustomButton from '../components/CustomButton.vue'
import CustomButtonTwo from '../components/CustomButtonTwo.vue'

export default {
  name: 'NavBar',
  components: {
    Logo,
    CustomButton,
    CustomButtonTwo
  }
}

</script>

<style scoped>
.nav_bar {
  height: 7rem;
}
.dropbtn {
  color: #374044;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
}

.dropbtn:after {
  content: '';
  position: absolute;
  bottom: .4em;
  left: 50%;
  right: 50%;
  height: 3px;
  background: #FFB700;
transition: all ease .2s;
}
.dropbtn:hover:after {
  left: 0;
  right: 0;
  height: 3px;
}
.dropbtn:before {
  position: absolute;
  transform: translateX(-100%);
  left: -10px;
  color: #000;
  opacity: .3;
  font-weight: 100;
  font-size: .8em;
}

.dropdown {
  position: relative;
  display: inline-block;
  margin-right: 20px;
  justify-content: center;
  align-items: center;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #FEFEFF;
  min-width: 160px;
  box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content:after {
  content: "";
  position: absolute;
  transition: all 0.3s ease 0s;
  z-index: -1;
}

.dropdown-content a {
  color: #424A4E;
  font-size: 15px;
  font-weight: 500;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #ddd;}

.dropdown:hover .dropdown-content {display: block;}

/*.dropdown:hover .dropbtn { border-bottom: 5px solid #FFB700}*/
</style>
