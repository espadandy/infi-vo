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
  background: #f5f5f5;
}

main {
  padding: 20px;
}
</style>
