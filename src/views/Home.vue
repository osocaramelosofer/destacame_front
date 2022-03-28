<template>
  <div class="wrapper">

    <waves/>

    <div class="content-wrap">
      <div class="hero flex justify-start">
        <div class="w-32 h-32">
          <logo/>
        </div>
        <h1> Fast Bus </h1>
      </div>
      <div class="my-5">
        <p class="hero_p">
          ¡Bienvenidos al sistema de administración de Fast Bus!
          <br>
          Aquí podrás administrar conductores, buses, rutas, trayectos y pasajeros.
        </p>
      </div>

      <div class="flex items-center ">
        <custom-button-two/>
      </div>

    </div>
    <div class="content-wrap">
      <div class="bus">
        <img src="../assets/bus1.png" alt="fast-move" class="h-full w-full object-cover rounded-lg"/>
      </div>
    </div>
  </div>
</template>

<script>
import Test from '../components/Test.vue'
import Logo from '../components/Logo.vue'
import CustomButton from '../components/CustomButton.vue'
import CustomButtonTwo from '../components/CustomButtonTwo.vue'
import Waves from '../components/Waves.vue'

export default {
  name: 'Home',
  components: {
    Test,
    Logo,
    CustomButton,
    CustomButtonTwo,
    Waves
  }
}

</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@900&display=swap');

.wrapper {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
}

.content-wrap {
  position: relative;
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 2rem;
  z-index: 2;
}

.hero {
  margin-top: 7rem;
  width: 100%;
  position: relative;
}

.bus {
  width: 100%;
  overflow: hidden;
  position: absolute;
  top: 14rem;
}

.hero h1 {
  font-family: Nunito, "DejaVu Sans Mono", sans-serif;
  color: #FFB700;
  font-size: 100px;
  font-weight: 900;
  text-align: center;
  margin-left: 1rem;
}

.hero_p {
  font-family: Nunito, sans-serif;
  color: black;
  font-weight: lighter;
  font-size: 20px;
}


</style>
