<template id="app">
  <div>
    <h1>Práctica de componentes</h1>  
      <MiComponente mensaje="Mensaje 1" @mensajeEnviado="mostrarMensaje" />
      <MiComponente mensaje="Mensaje 2" @mensajeEnviado="mostrarMensaje" />
      <MiComponente mensaje="Mensaje 3" @mensajeEnviado="mostrarMensaje" />
      <p>{{ mensajeDesdeHijo }}</p>
  </div>
  
</template>


<script>

import HelloWorld from './components/HelloWorld.vue'
import MiComponente from './components/MiComponente.vue'

export default {
  name: 'App',
    components: {
    HelloWorld,
    MiComponente
  },
  data() {
return {
      mensajeDesdeHijo: "",
    };
  },
    methods: {
      mostrarMensaje(mensaje) {
        this.mensajeDesdeHijo = mensaje;
      },
    },
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h2 {
    color: rgb(119, 119, 173);
}

</style>


