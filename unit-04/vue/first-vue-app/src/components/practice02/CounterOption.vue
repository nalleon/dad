<template>
    <h2>Option</h2>
    <h3>{{ counter }} </h3>
    <input type="number" name="counter" v-model="counter">
    <br>
    <br>
    <button @click="addCounter">Incrementar</button>
    <button @click="minimizeCounter">Decrementar</button>
    <button @click="duplicateCounter">Duplicar</button>
    <button @click="resetCounter">Reiniciar</button>
    <br>
    <div v-if="counter >= 10">¡El valor de {{counter}} es alto!</div>
    <br>
</template>

<script>
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'CounterOption',

        data(){
            let counter = 0;

            return {
                counter
            }
        },

        methods: {
            addCounter(){
                this.counter++;
            },

            minimizeCounter(){
                this.counter--;
            },

            duplicateCounter(){
                this.counter *= 2;
            },
            resetCounter(){
                this.counter = 0;

            }
        }
    });
</script>

<style scoped>

</style>
