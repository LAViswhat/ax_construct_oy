<script setup lang="ts">
import { ref } from 'vue'
import Carousel from 'primevue/carousel'
import firstProjectImage from '@/assets/images/projects1.jpg'
import secondProjectImage from '@/assets/images/projects2.jpg'
import thirdProjectImage from '@/assets/images/projects3.jpg'
import pi1 from '@/assets/images/1.jpg'
import pi2 from '@/assets/images/2.jpg'
import pi3 from '@/assets/images/3.jpg'
import pi4 from '@/assets/images/4.jpg'
import pi5 from '@/assets/images/5.jpg'
import pi6 from '@/assets/images/6.jpg'
import pi7 from '@/assets/images/7.jpg'
import pi8 from '@/assets/images/8.jpg'
import pi9 from '@/assets/images/9.jpg'
import pi10 from '@/assets/images/10.jpg'
import pi11 from '@/assets/images/11.jpg'
import pi12 from '@/assets/images/12.jpg'
import pi13 from '@/assets/images/13.jpg'
import pi14 from '@/assets/images/14.jpg'
import pi15 from '@/assets/images/15.jpg'
import pi16 from '@/assets/images/16.jpg'
import pi17 from '@/assets/images/17.jpg'
import pi18 from '@/assets/images/18.jpg'

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
  {
    image: pi2,
    title: 'project 5',
  },
  {
    image: pi3,
    title: 'project 6',
  },
  {
    image: pi6,
    title: 'project 9',
  },
  {
    image: pi4,
    title: 'project 7',
  },
  {
    image: pi1,
    title: 'project 4',
  },
  {
    image: pi9,
    title: 'project 12',
  },
  {
    image: pi7,
    title: 'project 10',
  },
  {
    image: pi8,
    title: 'project 11',
  },
  {
    image: pi5,
    title: 'project 8',
  },
  {
    image: pi11,
    title: 'project 14',
  },
  {
    image: pi10,
    title: 'project 13',
  },
  {
    image: pi12,
    title: 'project 15',
  },
  {
    image: pi15,
    title: 'project 18',
  },
  {
    image: pi13,
    title: 'project 16',
  },
  {
    image: pi16,
    title: 'project 19',
  },
  {
    image: pi17,
    title: 'project 20',
  },
  {
    image: pi14,
    title: 'project 17',
  },
  {
    image: pi18,
    title: 'project 21',
  },
]
const responsiveOptions = ref([
  {
    breakpoint: '1024px',
    numVisible: 2,
    numScroll: 2,
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
    <div class="container mx-auto py-4 lg:py-16 xl:px-24" data-aos="fade-up" data-aos-delay="100">
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

      <!-- Desktop Carousel -->
      <div class="hidden lg:block !mt-8">
        <Carousel
          :value="projectsList"
          :numVisible="3"
          :numScroll="3"
          :circular="true"
          :autoplayInterval="3000"
        >
          <template #item="{ data }">
            <div
              class="bg-white h-[560px] flex items-center justify-center overflow-hidden relative group !mx-2 rounded-md shadow"
            >
              <img
                :src="data.image"
                :alt="data.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </template>
        </Carousel>
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
@media (max-width: 768px) {
  ::v-deep(.p-carousel-indicator-button) {
    width: 8px;
  }
}
</style>
