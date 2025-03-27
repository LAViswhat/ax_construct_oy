<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

interface Projects {
  image: string
  title: string
}

const projectsList: Projects[] = [
  {
    image: '/src/assets/images/projects1.JPG',
    title: 'project',
  },
  {
    image: '/src/assets/images/projects2.jpg',
    title: 'project',
  },
  {
    image: '/src/assets/images/projects3.jpg',
    title: 'project',
  },
]

const projectsSwiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: { clickable: true },
  navigation: true,
  autoplay: { delay: 3500 },
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
}
</script>

<template>
  <section
    class="flex justify-center items-center w-full bg-linear-to-b from-50% from-primary to-50% to-stone-100"
  >
    <div class="container mx-auto py-4 lg:py-16 lg:px-24" data-aos="fade-up" data-aos-delay="100">
      <h2 class="font-semibold text-center text-white pb-4 lg:pb-10">
        Referenssit - Toteutettuja projektia
      </h2>

      <!-- Mobile Carousel -->
      <div class="lg:hidden mt-8">
        <Swiper v-bind="projectsSwiperOptions" class="projects-swiper">
          <SwiperSlide v-for="project in projectsList" :key="project.title">
            <div
              class="bg-white h-64 flex items-center justify-center overflow-hidden relative group"
            >
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <!-- Desktop Grid -->
      <div class="hidden lg:grid grid-cols-1 md:grid-cols-3 gap-4 !mt-8">
        <div
          v-for="project in projectsList"
          :key="project.title"
          class="bg-white h-full min-w-full md:min-w-4/12 flex items-center justify-center overflow-hidden relative group"
        >
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
