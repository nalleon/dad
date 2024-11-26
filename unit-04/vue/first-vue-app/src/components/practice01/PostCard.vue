<template>
    <div class="card">
        <h3>Card</h3>
        <p>This is my card</p>
        <PostButton/>
    </div>
</template>

<script setup>
    import PostButton from './PostButton.vue';
</script>


<style scoped>
    .card {
        border-radius: 15px;
        padding: 10px;
        margin: 5px;
        border: 1px solid #ccc;
    }
</style>
