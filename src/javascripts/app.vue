<script setup>
import { ref } from "vue";
const count = ref(0);
</script>

<template>
  <h1>Welcome to WEB 2620!!!!!</h1>
  <h3 class="text-muted">
    powered by <img alt="Vue logo" src="../images/vue.png" width="50" />
  </h3>
  <button @click="count++">{{ count }}</button>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
