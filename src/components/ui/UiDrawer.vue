<script setup lang="ts">
import { watch } from 'vue'

const props = defineProps<{ menuOpen: boolean }>()
const emit = defineEmits(['close'])

watch(
  () => props.menuOpen,
  (isOpen) => {
    document.body.classList.toggle('overflow-hidden', isOpen) // Блокируем прокрутку страницы
  },
)
</script>

<template>
  <!-- Darked background -->
  <Teleport to="body">
    <div
      class="fixed inset-0 bg-black/50 transition-opacity lg:hidden z-40"
      v-if="menuOpen"
      @click="emit('close')"
    ></div>
  </Teleport>

  <!-- Drawer -->
  <aside
    class="fixed top-0 right-0 w-64 h-full bg-stone-200 shadow-lg duration-500 transition-transform transform lg:hidden z-50"
    :class="{ 'translate-x-0': menuOpen, 'translate-x-full': !menuOpen }"
  >
    <button class="absolute top-4 right-4 text-black-softer text-2xl" @click="emit('close')">
      ✕
    </button>
    <slot></slot>
  </aside>
</template>

<style scoped>
aside {
  height: 100vh;
}
</style>
