<script setup lang="ts">
import SectionContacts__ContactForm from './SectionContacts__ContactForm.vue'
</script>

<template>
  <section
    id="contacts"
    class="flex flex-row justify-center items-center w-full mx-auto pt-4 md:pt-12 pb-24 px-4 bg-white"
  >
    <div class="grid grid-cols-1 md:grid-cols-2">
      <!-- Contact Form -->
      <div class="bg-white p-8 mx-auto">
        <h2 class="pb-4">Ota yhteyttä</h2>
        <p class="mt-2 pb-4">
          Saat meihin yhteyden sähköpostitse, soittamalla tai lähettämällä oheisen lomakkeen.
        </p>
        <SectionContacts__ContactForm />
      </div>

      <!-- Contacts -->
      <div class="bg-white p-8 mx-auto relative">
        <h2 class="pb-4 text-secondary">Ax Construct Oy</h2>
        <p class="mt-2 pb-16">Y-Tunnus: 3164229-2</p>
        <div class="flex flex-col justify-start items-start" data-aos="fade-up">
          <a href="tel:+358400491160" class="inline-flex items-center gap-4 pb-6 md:pb-10"
            ><img class="w-10 h-10" src="../assets/images/icons/phone.svg" />
            <span class="text-lg md:text-2xl">+358 400491160</span></a
          >
          <a href="mailto:info@axconstruct.fi" class="inline-flex items-center gap-4 pb-6 md:pb-10"
            ><img class="w-10 h-10" src="../assets/images/icons/e-mail.svg" />
            <span class="text-lg md:text-2xl">info@axconstruct.fi</span></a
          >
          <p class="inline-flex items-center gap-4">
            <img class="w-10 h-10" src="../assets/images/icons/address.svg" />
            <span class="text-lg md:text-2xl">Haapaniemenkatu 11 A 24 00530 Helsinki</span>
          </p>
        </div>
        <img
          src="../assets/images/luotettavakumppani.png.webp"
          alt="logo"
          class="w-24 h-10 md:w-52 md:h-20 absolute bottom-0 right-0 translate-y-16 md:-translate-y-8"
        />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
