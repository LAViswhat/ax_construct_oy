<script setup lang="ts">
import { ref } from 'vue'
import Drawer from 'primevue/drawer'
const menuOpen = ref(false)
</script>
<template>
  <Drawer v-model:visible="menuOpen" position="right" class="w-64 !bg-stone-200 !shadow-lg">
    <slot></slot>
  </Drawer>
</template>

<style scoped>
:deep(.p-drawer) {
  background-color: #e7e5e4 !important; /* bg-stone-200 */
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05) !important; /* shadow-lg */
}
</style>
