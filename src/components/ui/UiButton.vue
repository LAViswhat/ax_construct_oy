<script setup lang="ts">
import { computed } from 'vue'

type ButtonVariant = 'primary' | 'secondary'

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'
  variant?: ButtonVariant
}

const props = defineProps<ButtonProps>()

const buttonClasses = computed(() => ({
  'px-8 py-4 min-w-44 md:min-w-64 rounded-lg text-md !font-bold cursor-pointer transition-all duration-300 ease-in-out':
    true,
  'bg-black text-white hover:bg-stone-800 border border-black': props.variant === 'primary',
  'bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.6)] border border-white/20 transition-colors':
    props.variant === 'secondary',
}))
</script>

<template>
  <button :type="props.type ?? 'button'" :class="buttonClasses">
    <slot></slot>
  </button>
</template>
