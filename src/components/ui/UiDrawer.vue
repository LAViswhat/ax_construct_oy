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
      v-show="menuOpen"
      @click="emit('close')"
    ></div>
  </Teleport>

  <!-- Drawer -->
  <aside
    class="fixed top-0 right-0 w-64 h-full bg-stone-200 shadow-lg duration-500 transition-transform transform lg:hidden z-[100]"
    v-show="menuOpen"
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
  -webkit-transition:
    transform 500ms ease-in-out,
    opacity 500ms ease-in-out;
  transition:
    transform 500ms ease-in-out,
    opacity 500ms ease-in-out;
  background-color: #e7e5e4; /* Эквивалент bg-stone-200 */
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
aside.translate-x-full {
  opacity: 0;
}
aside.translate-x-0 {
  opacity: 1;
}
</style>
