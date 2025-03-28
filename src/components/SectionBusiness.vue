<script setup lang="ts">
import architectureIcon from '@/assets/images/icons/architecture.png'
import planningIcon from '@/assets/images/icons/planning.png'
import constructionIcon from '@/assets/images/icons/construction.svg'
import researchIcon from '@/assets/images/icons/research.png'
interface Service {
  title: string
  description: string
  image: string
}

const serviceList: Service[] = [
  {
    title: 'Urakointi',
    description:
      'Tarjoamme asuntorakentamista, liike- ja toimistorakentamista, teollisuusrakentamista sekä julkista rakentamista.',
    image: architectureIcon,
  },
  {
    title: 'Hankkeet',
    description:
      'Otamme töihin mitä tahansa monimutkaisia sisä- ja ulko korjausprojekteja omakotitalosta sairaalaan.',
    image: planningIcon,
  },

  {
    title: 'Uudisrakentaminen. Korjausrakentaminen',
    description:
      'Toteutamme projektit alusta loppuun tarvittavalla  materiaalilla, toimitettuna työmaalle.',
    image: constructionIcon,
  },
  {
    title: 'Materiaali',
    description:
      'Työstämme tehtävät kilpailukykyisesti, laadukkaasti ja vastuullisesti. Mikään tehtävät ei ole lian pieni tai suuri.',
    image: researchIcon,
  },
]
</script>
<template>
  <section
    class="flex justify-center items-center w-full bg-linear-to-b from-50% from-transparent to-50% to-stone-100"
  >
    <div class="container mx-auto !mt-12 py-16 px-4 z-40">
      <h2 class="text-center text-primary">Rakennuusliike</h2>
      <h3 class="text-center !mt-4 !mb-8 mx-auto">
        Tarjoamme uudis- ja korjausrakentamista läpinäkyvästi ja asiakaslähtöisesti.
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        <div
          v-for="(service, index) in serviceList"
          :key="service.title"
          class="bg-white shadow-lg p-6 text-center rounded-xl border border-gray-100 hover:shadow-2xl transition-all"
          data-aos="fade-up"
          :data-aos-delay="100 * index"
        >
          <span
            class="text-left bg-secondary block shrink-0 p-4 m-0 mr-auto h-14 w-14 md:h-[74px] md:w-[74px] rounded-full"
          >
            <img
              class="object-contain block w-full h-full"
              :src="service.image"
              :alt="service.title"
            />
          </span>
          <h4 class="text-left !font-normal !mt-4">{{ service.title }}</h4>
          <p class="text-left md:!text-lg italic">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 768px) {
  h3 {
    font-size: 1.5rem !important;
  }
  h4 {
    font-size: 1.25rem !important;
  }
}
</style>
