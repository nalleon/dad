<template>
    <div class="row">
        <div class="col-12">
            <h2> Composition </h2>
            <h3>{{ counter }} </h3>
            <input type="number" name="counter" v-model="counter">
        </div>
    </div>
    <br>
    <br>
    <div class="row">
        <div class="col-3">
            <button class="btn btn-success" @click="addCounter">Incrementar</button>
        </div>

        <div class="col-3">
            <button class="btn btn-warning" @click="minimizeCounter">Decrementar</button>
        </div>
        <div class="col-3">
            <button class="btn btn-danger" @click="duplicateCounter">Duplicar</button>
        </div>
        
        <div class="col-3">
            <button class="btn btn-primary" @click="resetCounter">Reiniciar</button>
        </div>
        <div class="col-12">
            <div v-if="counter >= 10">¡El valor de {{counter}} es alto!</div>
        </div>
    </div>
</template>

<script>
    import { defineComponent, ref } from 'vue';
    
    export default defineComponent({
        name: 'CounterComposition',

        setup(){
            let counter = ref(0);


            const addCounter = () => {
                counter.value++;
            }


            const minimizeCounter = () => {
                counter.value--;
            }


            const duplicateCounter = () => {
                counter.value *=2;
            }

            const resetCounter = () => {
                counter.value = 0;
            }

            return {
                counter,
                addCounter,
                minimizeCounter,
                duplicateCounter,
                resetCounter
            }
        }
    });
</script>

<style scoped>

</style>
