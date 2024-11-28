<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header mb-3">
                <div class="row">
                    <div class="col-12">
                        <h2 class="fw-bold text-uppercase text-center text-primary"> Option </h2>
                        <h3 class="fw-bold text-uppercase text-center">{{ counter }} </h3>
                        <input type="number" name="counter" v-model="counter" class="form-control-md form-control">
                    </div>
                </div>
            </div>

            <div class="card-body">
                <div class="row">
                    <div class="col-12 mb-4 col-md-3">
                        <button class="btn w-75 btn-success text-light fw-bold" @click="addCounter">Incrementar</button>
                    </div>

                    <div class="col-12 mb-4 col-md-3">
                        <button class="btn w-75 btn-warning text-light fw-bold" @click="minimizeCounter">Decrementar</button>
                    </div>
                    <div class="col-12 mb-4 col-md-3">
                        <button class="btn w-75 btn-danger text-light fw-bold" @click="duplicateCounter">Duplicar</button>
                    </div>
                    
                    <div class="col-12 mb-4 col-md-3">
                        <button class="btn w-75 btn-primary text-light fw-bold" @click="resetCounter">Reiniciar</button>
                    </div>

                    <div v-if="counter >= 10">
                        <div class="col-12 mb-4 mt-5">
                            <div class="fw-bold text-uppercase text-center">
                                <h3>¡El valor de  
                                    <span class="text-danger">{{counter}}</span>
                                    es alto!
                                </h3>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
