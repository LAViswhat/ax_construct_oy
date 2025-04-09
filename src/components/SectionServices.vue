<script setup lang="ts">
const colOneServices = [
  {
    name: 'Väliseinät',
  },
  {
    name: 'Alakatot',
  },
  {
    name: 'Moduuli alakatot',
  },
  {
    name: 'DB katot',
  },
  {
    name: 'Puu alakatot',
  },
  {
    name: 'DB Lattiat',
  },
  {
    name: 'Palokatkot',
  },
  {
    name: 'Lattiat',
  },
  {
    name: 'Ovet ja Ikkunat',
  },
]

const colTwoServices = [
  {
    name: 'Muuraustyöt',
  },
  {
    name: 'Valutyöt ja Lattiavalut',
  },
  {
    name: 'Tukkovalu työt',
  },
  {
    name: 'Muottityöt',
  },
  {
    name: 'Palkkien villoitus',
  },
  {
    name: 'Saumojen vaihto',
  },
  {
    name: 'Saunat',
  },
  {
    name: 'Terassit',
  },
  {
    name: 'Ja paljon muuta',
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
        <div
          class="bg-white h-62 md:h-96 min-w-full md:min-w-4/12 flex items-center justify-center"
        >
          <img
            src="../assets/images/facilities.jpg"
            alt="Building"
            class="w-full h-full object-cover"
          />
        </div>
        <div
          class="flex flex-row w-full justify-around items-center gap-4 xl:gap-8 p-2 py-4 xl:p-4 bg-white"
        >
          <div class="flex flex-col">
            <ul class="space-y-4 text-gray-700">
              <li class="text-sm md:text-lg" v-for="list in colOneServices" :key="list.name">
                ✅ {{ list.name }}
              </li>
            </ul>
          </div>
          <div class="flex flex-col">
            <ul class="space-y-4 text-gray-700">
              <li class="text-sm md:text-lg" v-for="list in colTwoServices" :key="list.name">
                ✅ {{ list.name }}
              </li>
            </ul>
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
