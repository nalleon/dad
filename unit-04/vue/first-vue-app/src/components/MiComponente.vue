<template>
    <div>
        <h2>{{ mensaje }}</h2>
        <button @click="enviarEvento">Enviar mensaje al padre</button>    </div>
</template>
<script>
    export default {
        name: "MiComponente",   
        props: {
            mensaje: String,
        }, 
        methods: {
            enviarEvento() {
                this.$emit("mensajeEnviado", "¡Hola desde el hijo!");
            },
        },
    };
</script>
