<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import bgImage from '@/assets/images/hero.png'
import UiButton from './ui/UiButton.vue'

const scrollY = ref(0)
const handleScroll = () => {
  scrollY.value = window.scrollY
}

const scrollToSection = (event: Event, sectionId: string) => {
  event.preventDefault()

  const section = document.querySelector(sectionId)

  if (section) {
    const offsetTop = section.getBoundingClientRect().top + window.scrollY - 50
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    })
  }

  if (section && sectionId === '#home') {
    const offsetTop = section.getBoundingClientRect().top + window.scrollY - 1150
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const parallaxTransform = computed(() => `translateY(${scrollY.value / 5}px)`)
</script>
<template>
  <section
    id="home"
    class="w-full h-[664px] md:h-[996px] bg-cover bg-center overflow-hidden"
    :style="{
      backgroundImage: `url(${bgImage})`,
      transform: parallaxTransform,
    }"
  >
    <div class="pl-8 lg:pl-24 flex flex-col justify-around h-full">
      <h1>Rakennamme. Korjaamme.<br />Laajennamme.</h1>
      <div class="flex flex-col md:flex-row items-start gap-4 !-mt-16">
        <UiButton @click="(e) => scrollToSection(e, '#about')" variant="primary">Meistä</UiButton>
        <UiButton @click="(e) => scrollToSection(e, '#contacts')" variant="secondary"
          >Kontaktit</UiButton
        >
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 768px) {
  h1 {
    font-size: 2.2rem !important;
  }
}
</style>
