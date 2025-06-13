<script setup lang="ts">
const colOneServices = [
  {
    name: 'Sisätyöt',
  },
  {
    name: 'Puutyöt',
  },
  {
    name: 'Timpurityöt',
  },
]

const colTwoServices = [
  {
    name: 'Märkätilatyöt',
  },
  {
    name: 'Betonityöt',
  },
  {
    name: 'Kirvesmiehentyöt',
  },
]
</script>

<template>
  <section
    class="flex justify-center items-center w-full bg-white lg:bg-linear-to-b from-50% from-stone-100 to-50% to-black-softer"
  >
    <div class="container mx-auto py-0 lg:py-16 lg:px-24" data-aos="fade-up" data-aos-delay="100">
      <h2 class="font-semibold text-center text-primary">Rakennusalan palvelut</h2>
      <div class="flex flex-row flex-wrap md:flex-nowrap !mt-8">
        <div class="bg-white h-62 md:h-full w-full md:max-w-5/12 flex items-center justify-center">
          <img
            src="../assets/images/about5.jpg"
            alt="Building"
            class="w-full h-ful max-h-74 md:min-h-[522px] object-cover"
          />
        </div>
        <div class="flex flex-col w-full md:w-7/12 items-center bg-white">
          <h3 class="text-center !mt-4">Tarjoamme laajan valikoiman rakennusalan palveluita.</h3>
          <div class="flex flex-row justify-between gap-4 xl:gap-12 p-2 py-4 xl:p-4">
            <div class="flex flex-col">
              <ul class="space-y-4 text-gray-700">
                <li class="text-sm md:text-2xl" v-for="list in colOneServices" :key="list.name">
                  ✅ {{ list.name }}
                </li>
              </ul>
            </div>
            <div class="flex flex-col">
              <ul class="space-y-4 text-gray-700">
                <li class="text-sm md:text-2xl" v-for="list in colTwoServices" :key="list.name">
                  ✅ {{ list.name }}
                </li>
              </ul>
            </div>
          </div>
          <div
            class="text-white bg-primary text-center px-2 py-4 md:px-6 md:py-8 rounded-4xl !mt-2 !mb-6 !mx-2 md:mx-0"
          >
            <p class="xl:!text-lg text-pretty">Väliseinät, alakatot, lattiat, ikkunat ja ovet</p>
            <p class="xl:!text-lg text-pretty">Kylpyhuoneet, uima-altaat ja saunat</p>
            <p class="xl:!text-lg text-pretty">Pientalot, terassit, parvekkeet ja varastot</p>
            <p class="xl:!text-lg text-pretty">Betonivalun, muuraus ja muotit</p>
            <p class="xl:!text-lg text-pretty">Kaikenkokoiset remontit ja vahingon korjaukset</p>
          </div>
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
</style>
