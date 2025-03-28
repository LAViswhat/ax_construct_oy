<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
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

const partnersSwiperOptions = {
  modules: [Autoplay, Pagination],
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: { clickable: true },
  autoplay: { delay: 2000 },
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 4 },
  },
}
</script>

<template>
  <section class="flex justify-center items-center w-full bg-primary">
    <div class="container mx-auto py-4 md:py-16 md:px-24" data-aos="fade-up" data-aos-delay="100">
      <h2 class="font-semibold text-center text-white pb-4 lg:pb-16">
        Teemme tiivisti yhteistyötä useiden alan parhaiden ammattilaisten kanssa.
      </h2>
      <!-- Mobile carousel -->
      <div class="lg:hidden">
        <Swiper v-bind="partnersSwiperOptions" class="partners-swiper">
          <SwiperSlide v-for="item in partnersList" :key="item.id">
            <img
              :src="item.image"
              :alt="item.title"
              class="w-full h-18 !mb-12 object-contain mx-auto"
            />
          </SwiperSlide>
        </Swiper>
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

<style scoped></style>
