<script setup lang="ts"></script>
<template>
  <section id="about" class="flex justify-center items-center w-full bg-white md:bg-primary">
    <div
      class="container mx-auto pt-0 md:pt-8 pb-4 lg:pb-16 xl:pt-16 xl:px-24"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 !mt-8 items-end">
        <div
          class="flex flex-row lg:flex-col justify-center items-start bg-white lg:bg-primary xl:items-end lg:px-3 xl:px-6 py-0"
        >
          <div
            class="block shrink-0 p-2 lg:p-4 xl:!mb-8 m-0 h-48 w-48 lg:h-60 lg:w-60 rounded-full"
          >
            <img
              class="object-cover block w-full h-full rounded-full"
              src="../assets/images/founder.jpg"
              alt="Founder"
            />
          </div>
          <div class="p-2 pl-0 lg:p-4 bg-white">
            <h4 class="uppercase">Aleksandr K.</h4>
            <h5 class="!font-normal">Toimitusjohtaja. Työnjohtaja</h5>
            <p class="py-6 !font-bold pl-4">
              &ldquo; 18 vuoden kokemus rakennusalalla, ammattitaito, vastuullisuus, toimintakyky,
              työn laatu ja turvallisuus ovat yritykseni kulmakiviä &rdquo;
            </p>
          </div>
        </div>
        <div
          class="bg-white h-84 max-w-sm xl:max-w-[448px] hidden md:h-full xl:flex items-center justify-center"
        >
          <img
            src="../assets/images/founder_office.jpg"
            alt="Building"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="flex flex-col justify-start items-center xl:min-h-[520px] lg:px-3 xl:px-6 py-0">
          <div
            class="bg-black-softer flex flex-1/2 items-center text-white xl:w-[689px] xl:!-ml-72"
          >
            <p class="!font-bold px-4 py-12">
              Tiimimme koostuu kokeneista ja ammattitaitoisista rakentajista, joilla on vankka
              kokemus erilaisista projekteista. Ammattitaitoiseen tiimiimme kuuluu kymmenkunta
              rakennusalan osaajaa. He hallitsevat monipuolisesti eri materiaalit ja tekniikat,
              jotta voimme tarjota asiakkaillemme parasta mahdollista jälkeä. Toimintamme perustuu
              laajaan ammattitaitoon sekä tinkimättömään ja täsmälliseen työn laatuun.
            </p>
          </div>
          <div class="bg-white flex flex-col flex-1/2 justify-center items-start px-4 py-12">
            <p class="!font-bold">
              Valitsemalla meidät varmistat, että rakennusprojekti etenee sujuvasti ja luotettavasti
              aikataulussa ja budjetissa.
            </p>
            <div class="pl-8">
              <p class="!font-bold pt-4">Yhteistyö kansamme:</p>
              <ul class="list-disc list-inside">
                <li class="!font-bold">Kustannustehokkuus</li>
                <li class="!font-bold">Nopea toteutus</li>
                <li class="!font-bold">Laadukas lopputulos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
@media (max-width: 768px) {
  h4 {
    font-size: 1.25rem !important;
  }
}
</style>
