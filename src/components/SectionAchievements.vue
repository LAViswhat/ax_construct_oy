<script setup lang="ts">
import UiAnimatedCounter from './ui/UiAnimatedCounter.vue'

interface Achievments {
  counter: number
  title: string
}

const achievements: Achievments[] = [
  {
    counter: 154,
    title: 'Hanketta',
  },
  {
    counter: 26,
    title: 'Työtila',
  },
  {
    counter: 17,
    title: 'Oppilaitosta',
  },
  {
    counter: 263,
    title: 'Asuntoa',
  },
]
</script>
<template>
  <section class="flex justify-center items-center w-full bg-white">
    <div class="container mx-auto py-8 md:py-16 lg:px-24" data-aos="fade-up" data-aos-delay="100">
      <div class="grid grid-cols-1 md:grid-cols-2 !mt-8">
        <div class="flex flex-col py-0 md:py-7 px-6 md:pl-7 md:pr-12">
          <h3>Projektit ja urakat ammattitaidolla.</h3>
          <p class="md:!text-xl py-4">
            Meillä on pitkä kokemus erilaisten tilojen rakentajana. Rakennamme yhdessä asiakkaidemme
            ja yhteistyökumppaneidemme kanssa koteja toimi- ja liiketiloja, päivä- ja hoivakoteja,
            kouluja sekä sairaaloita. Toimimme koko Uudenmaan alueella ja sen ulkopuolella.
          </p>
        </div>
        <div class="bg-white h-72 md:h-96 min-w-full flex items-center justify-center">
          <img
            src="../assets/images/achievements.jpg"
            alt="Building"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
      <div
        class="grid grid-cols-2 lg:grid-cols-4 gap-4 !mt-8 min-h-64 justify-items-center items-center"
      >
        <div
          v-for="achievement in achievements"
          :key="achievement.counter"
          class="bg-stone-100 shadow-lg p-2 xl:p-10 text-center min-w-32 md:min-w-48 xl:min-w-64"
        >
          <UiAnimatedCounter :targetValue="achievement.counter" />
          <h5 class="uppercase !font-normal">{{ achievement.title }}</h5>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
