<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex flex-grow flex-col justify-center items-center">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style scoped></style>
