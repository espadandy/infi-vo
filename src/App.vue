<script setup lang="ts">
import Header from './views/Header.vue'
</script>

<template>
  <div id="app">
    <Header />
    <main>
      <router-view />
    </main>
  </div>
</template>

<style>
#app {
  min-height: 100vh;
  padding: 20px 100px 20px 20px;
  margin: 0 auto;
  width: 100%;
}

main {
  padding: 20px 0;
  margin: 0 auto;
}
</style>
