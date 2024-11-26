<template id="app">
  <div>
    <h2>Posts list:</h2>
    <PostContainer/>
  </div>
  
</template>


<script setup>
import PostContainer from './components/practice01/PostContainer.vue'
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


