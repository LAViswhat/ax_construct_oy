<script setup lang="ts">
const currentDate = new Date().getFullYear()
</script>
<template>
  <footer class="w-full bg-black-softer text-white text-center py-6">
    <p>&copy; {{ currentDate }} Ax Construct Oy. All rights reserved.</p>
    <div class="flex gap-4 justify-center">
      <RouterLink to="/terms" class="hover:underline">Käyttöehdot</RouterLink>
      <RouterLink to="/privacy-policy" class="hover:underline">Tietosuojakäytäntö</RouterLink>
    </div>
  </footer>
</template>

<style scoped></style>
