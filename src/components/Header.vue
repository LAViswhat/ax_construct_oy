<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import Drawer from './ui/UiDrawer.vue'
import homeIcon from '@/assets/images/icons/nav_home.svg'
import aboutIcon from '@/assets/images/icons/nav_about.svg'
import contactIcon from '@/assets/images/icons/nav_getintouch.svg'

interface Navigation {
  name: string
  icon?: string
  url: string
}

const navLinks: Navigation[] = [
  {
    name: 'Etusivu',
    icon: homeIcon,
    url: '#home',
  },
  {
    name: 'Meistä',
    icon: aboutIcon,
    url: '#about',
  },
  {
    name: 'Yhteystiedot',
    icon: contactIcon,
    url: '#contacts',
  },
]

const isScrolled = ref(false)
const menuOpen = ref(false)
const isVisible = ref(true)
const lastScrollY = ref(0)
const route = useRoute()

const isHomePage = computed(() => route.path === '/')

const handleScroll = () => {
  const currentScrollY = window.scrollY

  isScrolled.value = currentScrollY > 50

  if (currentScrollY > lastScrollY.value && currentScrollY > 100) {
    isVisible.value = false
  } else {
    isVisible.value = true
  }

  lastScrollY.value = currentScrollY
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
  if (menuOpen.value) {
    menuOpen.value = false
  }
}

/* const handleScroll = () => {
  isScrolled.value = window.scrollY > 550
} */

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
<template>
  <header
    class="flex justify-center items-center shadow-md fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-gray-300 py-6 bg-stone-500/20 bg-clip-padding backdrop-filter backdrop-blur-sm"
    :class="{
      'translate-y-0': isVisible,
      '-translate-y-full': !isVisible,
    }"
  >
    <div class="container mx-auto flex justify-between items-center px-4">
      <RouterLink class="flex-3/4" to="/"
        ><h3
          class="text-secondary uppercase font-roboto drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
        >
          ax construct oy
        </h3>
      </RouterLink>
      <!-- Mobile Menu Button -->
      <button class="lg:hidden" @click="menuOpen = !menuOpen">
        <img src="../assets/images/icons/menu-hamburger.svg" alt="" />
      </button>

      <!-- Desktop Navigation Menu-->
      <nav>
        <ul class="hidden lg:flex gap-4">
          <li v-if="!isHomePage" class="text-white uppercase">
            <RouterLink
              to="/"
              class="text-primary hover:text-primary/70 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
              >Etusivu</RouterLink
            >
          </li>
          <template v-if="isHomePage">
            <li v-for="link in navLinks" :key="link.name" class="text-white uppercase">
              <a
                @click="(e) => scrollToSection(e, link.url)"
                :href="link.url"
                class="text-primary hover:text-primary/70 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
                >{{ link.name }}</a
              >
            </li>
          </template>
        </ul>
      </nav>

      <!-- Mobile Navigation Menu -->
      <Drawer :visible="menuOpen" @update:visible="menuOpen = $event">
        <div class="flex flex-col justify-between h-full">
          <nav class="px-6">
            <ul class="flex flex-col gap-4">
              <li v-if="!isHomePage" class="uppercase">
                <RouterLink to="/" class="text-primary py-2 inline-flex items-center gap-2">
                  <img class="w-8 h-8" src="/src/assets/images/icons/nav_home.svg" />
                  <span class="!font-bold text-base">Etusivu</span>
                </RouterLink>
              </li>
              <template v-if="isHomePage">
                <li v-for="link in navLinks" :key="link.name" class="uppercase">
                  <a
                    @click="(e) => scrollToSection(e, link.url)"
                    :href="link.url"
                    class="text-primary py-2 inline-flex items-center gap-2"
                  >
                    <img class="w-8 h-8" :src="link.icon" />
                    <span class="!font-bold text-base">{{ link.name }}</span>
                  </a>
                </li>
              </template>
            </ul>
          </nav>
          <div class="mt-auto p-4 pt-2 mx-auto border-t-1 border-t-white/40">
            <h2 class="!text-xl text-secondary">Ax Construct Oy</h2>
            <p class="mt-2 pb-4">Y-Tunnus: 3164229-2</p>
            <div class="flex flex-col justify-start items-start">
              <a href="tel:+358400491160" class="inline-flex items-center gap-2 pb-6">
                <img class="w-6 h-6" src="../assets/images/icons/phone.svg" />
                <span class="text-sm md:text-lg">+358 400491160</span>
              </a>
              <a href="mailto:info@axconstruct.fi" class="inline-flex items-center gap-2 pb-6">
                <img class="w-6 h-6" src="../assets/images/icons/e-mail.svg" />
                <span class="text-sm md:text-lg">info@axconstruct.fi</span>
              </a>
              <p class="inline-flex items-center gap-2">
                <img class="w-6 h-6" src="../assets/images/icons/address.svg" />
                <span class="text-sm md:text-lg">Haapaniemenkatu 11 A 24 00530 Helsinki</span>
              </p>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  </header>
</template>

<style scoped>
header {
  border-bottom: 1px solid #d1d5dc !important;
  --tw-shadow:
    0 4px 6px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1)),
    0 2px 4px -2px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
  box-shadow:
    var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow),
    var(--tw-ring-shadow), var(--tw-shadow);
}
nav li a {
  font-weight: 700;
}
:deep(.p-drawer-header) {
  padding: var(--p-drawer-header-padding, 2px);
}
@media (max-width: 768px) {
  h3 {
    font-size: 1.5rem !important;
  }
}
</style>
