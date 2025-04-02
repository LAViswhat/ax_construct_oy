<script setup lang="ts">
import { ref } from 'vue'
import Carousel from 'primevue/carousel'
import firstPartnerLogo from '@/assets/images/partner1.png'
import secondPartnerLogo from '@/assets/images/partner2.svg'
import thirdPartnerLogo from '@/assets/images/partner3.png'
import fourthPartnerLogo from '@/assets/images/partner4.png'

interface Partners {
  id: number
  title: string
  image: string
}

const partnersList: Partners[] = [
  {
    id: 1,
    title: 'rakentaja talo',
    image: firstPartnerLogo,
  },
  {
    id: 2,
    title: 'jvr',
    image: secondPartnerLogo,
  },
  {
    id: 3,
    title: 'Sajucon',
    image: thirdPartnerLogo,
  },
  {
    id: 4,
    title: 'leikkiturva oy',
    image: fourthPartnerLogo,
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
  <section class="flex justify-center items-center w-full bg-primary">
    <div class="container mx-auto py-4 md:py-16 md:px-24" data-aos="fade-up" data-aos-delay="100">
      <h2 class="font-semibold text-center text-white pb-4 lg:pb-16">
        Teemme tiivisti yhteistyötä useiden alan parhaiden ammattilaisten kanssa.
      </h2>
      <!-- Mobile carousel -->

      <div class="lg:hidden">
        <Carousel
          :value="partnersList"
          :numVisible="4"
          :numScroll="1"
          :responsiveOptions="responsiveOptions"
          circular
          :autoplayInterval="2000"
        >
          <template #item="{ data }">
            <div class="flex justify-center">
              <img :src="data.image" :alt="data.title" class="w-full h-18 object-contain" />
            </div>
          </template>
        </Carousel>
      </div>

      <!-- Desktop grid -->
      <div class="hidden lg:grid grid-cols-4">
        <img
          v-for="item in partnersList"
          :key="item.id"
          :src="item.image"
          :alt="item.title"
          class="my-2 w-full h-18 object-contain"
        />
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
::v-deep(.p-carousel-prev-button),
::v-deep(.p-carousel-next-button) {
  display: none;
}

::v-deep(.p-carousel-indicator-button) {
  background-color: #b94404;
  border-radius: 50%;
  width: 8px;
  height: 8px;
}
::v-deep(.p-carousel-indicator-active .p-carousel-indicator-button) {
  background-color: #4a9927;
}
</style>
