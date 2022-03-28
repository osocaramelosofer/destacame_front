<template>
  <div class="pt-5">
    <div class="mt-36 px-40 ">
      <p class="tipping">
        Hola soy Fernando tengo 23 años, mi color favorito es el azul, me fascina la pizza y siempre elijo a Donkey Kong en Smash bros.
      </p>
      <div>
        <p class="tipping2">
          Tambien soy junior full stack web developer, y si tienen 5 minutos para leer sobre mi estaria genial. Te gustaria?
        </p>
        <div class="flex justify-center my-10">
          <div
            @click="showAboutMe"
            class="bg-green-400 hover:bg-green-500 text-white font-medium rounded-xl cursor-pointer w-20 text-center">
            Si
          </div>
          <div
            @click="showAboutMe"
            class="bg-red-400 hover:bg-red-500 text-white font-medium rounded-xl cursor-pointer w-20 cursor-pointer text-center">
            No
          </div>
        </div>
      </div>
      <div :class="{hidden: !read}">
        <article>
          En un inicio empece como front-end developer, ya que disfruto mucho la parte artística mezclada con la programación.
          Hice proyectos por mi cuenta, usando las viajas confiables: HTML, CSS y JS. <br>
          Cuando me sentí lo suficientemente listo me incursione a buscar mi primer trabajo profesional, honestamente fue más difícil de lo que pensaba,
          me estaba deprimiendo al ver que todas las puertas que tocaba me las cerraban por falta de experiencia y conocimientos.
          Hasta que llegue a Alluxi; no podía creer que una empresa me estaba dando la oportunidad para adquirir experiencia y aprender (y sobre todo pagarme por hacerlo).
          En mis primeros meses me encargaba de arreglar cosas sencillas en cuanto al front-end. Siempre estoy en la mejor disposición de ayudar a mis compañeros,
          seguir creciendo y aprendiendo. Esto mismo me llevo a ir realizando tareas más complejas y unos meses más tarde me adentre en el mundo del back-end con ayuda de python y django.
          Siempre había evitado el back-end porque lo veía muy complejo y algo fuera de mi stack. Hasta que un día me toco realizar el desarrollo de un proyecto tanto en back como en front, solo.
          Les mentiría si les dijera que me divertí jaja, fue todo lo contrario, la sufrí muchísimo, pero poco a poco me fui sintiendo más cómodo en el proyecto.
          Cosas que en un principio eran difíciles ahora ya no tanto. <br>
          Al mismo tiempo que estaba en alluxi desarrollando esta aplicación móvil, tuve la oportunidad de fungir como profesor de programación web online.
          Al principio vi la vacante y lei los requisitos que pedían y desde antes de postularme mi mentalidad me estaba cerrando la puerta (el típico "no voy a poder"),
          pero me sacudí ese pensamiento que nos detiene muchas veces y lo intente.
          Mande mi cv y sorprendentemente pase el primer filtro, el segundo era preparar una clase muestra y para no hacerla tan larga, me quede con el puesto de profesor.
          Me gusto mucho experimentar una nueva área y más una como esta, en donde los papeles cambiaron y ahora no era yo el que hacia preguntas en clase sino el que las contestaba,
          aprendí mucho de mis alumnos y también de mí. Me agrada poder ayudar a las personas, es algo que en serio disfruto. <br>
          ¿Por que les cuento todo esto? porque quiero que vean más haya de mis habilidades técnicas;
          creo que los sueños se cumplen si trabajas lo suficiente en ellos, y mi sueño ahora es formar parte de su equipo para poder seguir desarrollandome profesionalmente.
          Como pudieron ver me faltaron unos puntos por cubrir en la prueba y si por esos puntos no llegara a estar dentro del equipo esta bien, eso solo significa que debo de seguir esforzandome más.<br>
          Gracias por la oportunidad.


        </article>
        <div class="w-96 h-96 mx-auto mb-20 text-center">
          <img src="../assets/me.jpg" alt="me" class="h-full w-full object-cover rounded-full"/>
          <span class="font-medium text-blue-500 text-2xl">Fernando Hernández</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'AboutMe',
  data(){
    return{
      read: false,
    }
  },
  methods:{
    showAboutMe(){
      this.read = !this.read
    }
  }
}
</script>
<style>
.tipping {

  font-family: monospace;
  white-space: nowrap;
  border-right: 4px solid;
  width: 128ch;
  animation: typing 7s steps(61), blink 1s infinite step-end alternate;
  overflow: hidden;
  color: black;
  margin: auto;
  font-size: 18px;
  font-weight: 600
}
article, p {
  font-family: monospace;
  font-size: 18px;
  font-weight: 600;
  text-align: justify;

}

@keyframes typing {
  from { width: 0 }
}
</style>