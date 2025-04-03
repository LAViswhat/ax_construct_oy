<script setup lang="ts">
import { ref } from 'vue'
import Carousel from 'primevue/carousel'
import firstProjectImage from '@/assets/images/projects1.jpg'
import secondProjectImage from '@/assets/images/projects2.jpg'
import thirdProjectImage from '@/assets/images/projects3.jpg'

interface Projects {
  image: string
  title: string
}

const projectsList: Projects[] = [
  {
    image: firstProjectImage,
    title: 'project 1',
  },
  {
    image: secondProjectImage,
    title: 'project 2',
  },
  {
    image: thirdProjectImage,
    title: 'project 3',
  },
]
const responsiveOptions = ref([
  {
    breakpoint: '1024px',
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: '768px',
    numVisible: 1,
    numScroll: 1,
  },
])
</script>

<template>
  <section
    class="flex justify-center items-center w-full bg-white lg:bg-linear-to-b from-50% from-primary to-50% to-stone-100"
  >
    <div class="container mx-auto py-4 lg:py-16 lg:px-24" data-aos="fade-up" data-aos-delay="100">
      <h2
        class="font-semibold text-center text-primary lg:text-white md:!text-3xl lg:!text-4xl pb-4 lg:pb-10"
      >
        Referenssit - Toteutettuja projektia
      </h2>

      <!-- Mobile Carousel -->

      <div class="lg:hidden">
        <Carousel
          :value="projectsList"
          :numVisible="4"
          :numScroll="1"
          :responsiveOptions="responsiveOptions"
          circular
          :autoplayInterval="2000"
        >
          <template #item="{ data }">
            <div class="flex justify-center items-center md:px-2 w-full h-64">
              <img
                :src="data.image"
                :alt="data.title"
                class="w-full h-full overflow-hidden object-cover"
              />
            </div>
          </template>
        </Carousel>
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

<style scoped>
@media (max-width: 768px) {
  h2 {
    font-size: 1.8rem !important;
  }
}

::v-deep(.p-carousel-content) {
  display: block !important;
  position: relative !important;
}

::v-deep(.p-carousel-prev-button),
::v-deep(.p-carousel-next-button) {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  /*   background-color: white !important; */
  color: #4a9927 !important;
  z-index: 10;
}
::v-deep(.p-carousel-prev-button) {
  left: 20px;
}
::v-deep(.p-carousel-next-button) {
  right: 20px;
}
::v-deep(.p-carousel-prev-button svg),
::v-deep(.p-carousel-next-button svg) {
  width: 36px;
  height: 36px;
}
::v-deep(.p-carousel-indicator-button) {
  background-color: #8e8f90;
}
::v-deep(.p-carousel-indicator-active .p-carousel-indicator-button) {
  background-color: #4a9927;
}
</style>
