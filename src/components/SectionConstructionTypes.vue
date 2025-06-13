<script setup lang="ts"></script>

<template>
  <section class="mx-auto md:pt-16 bg-white lg:bg-black-softer">
    <div class="grid grid-cols-1 md:grid-cols-3" data-aos="fade-up" data-aos-delay="100">
      <div class="bg-primary px-4 py-8 md:py-24">
        <div class="w-36 h-36 md:w-54 md:h-54 lg:w-60 lg:h-60 mx-auto !mb-8 text-left">
          <img
            src="../assets/images/about4.jpg"
            alt="Mission"
            class="w-full h-full object-cover rounded-full"
          />
        </div>
        <h4 class="font-semibold !text-xl text-white !mb-4 md:!mb-12 text-pretty">
          Asuntorakentaminen
        </h4>
        <p class="text-white xl:!text-lg text-pretty">
          Rakennamme ja korjaamme asuntokohteita ja koteja asiakkaisiin eri tarpeisiin. Rakennamme
          asiakkaan suunnitelmien mukaisia asuntokohteita laadukkaasti ja sovittuna ajankohtana.
          Voimme tulla mukaan kumppaniksi aivan hankeen alussa, tai vasta myöhemmin, esimerkiksi
          puhtaasti rakennuspalveluiden tuottajana.
        </p>
      </div>

      <div class="flex flex-col bg-white px-4 py-8 md:py-24">
        <div
          class="md:order-3 w-36 h-36 md:w-54 md:h-54 lg:w-60 lg:h-60 mx-auto text-left md:!mt-20 !mb-8 2xl:!ml-64 xl:!ml-36"
        >
          <img
            src="../assets/images/about6.jpg"
            alt="Goals"
            class="w-full h-full bg-top object-cover rounded-full"
          />
        </div>
        <h4 class="md:order-1 font-semibold !text-xl text-black !mb-4 md:!mb-12 text-pretty">
          Liike- ja toimistorakentaminen
        </h4>
        <p class="md:order-2 text-black xl:!text-lg text-pretty">
          Me toteutamme laadukkaat ja toimivat tilat, jotka vastaavat täydellisesti tilaajan
          tarpeita. Rakennamme ja korjaamme yrityksille ja muille organisaatioille erilaiset liike-,
          toimi-, logistiikka- ja urheilutilat. Palvelemme yrityksiä laidasta laitaan. Kerro
          rohkeasti, minkälaista liike- tai yritystilaa suunnittelet. Toteutamme myös
          teollisuushallit ja muut teollisuustilat alusta loppuun yhteistyökumppaniemme avulla. Kysy
          liike- ja teollisuusrakentamisen palveluistamme tai pyydä tarjous!
        </p>
      </div>

      <div class="bg-black-softer px-4 py-8 md:py-24">
        <div class="w-36 h-36 md:w-54 md:h-54 lg:w-60 lg:h-60 mx-auto !mb-8 text-left">
          <img
            src="../assets/images/about8.jpg"
            alt="Values"
            class="w-full h-full object-cover rounded-full"
          />
        </div>
        <h4 class="text-white !text-xl font-semibold !mb-4 md:!mb-12 text-pretty">
          Julkinen rakentaminen
        </h4>
        <p class="text-white xl:!text-lg text-pretty">
          Julkisrakentaminen vaatii vahvaa rakennusosaamista. Rakennamme ja korjaamme julkisia
          kohteita monipuolisesti, sairaaloista kouluihin, päiväkodeista monitoimitiloihin.
          Julkisten tilojen on sovelluttava monenlaisille käyttäjille. Niiden on kestettävä aikaa ja
          aktiivista käyttöä – ja oltava tietenkin turvallisia käyttää. Me tarjoamme laadukkaat
          rakennuspalvelut julkishallinnon tarpeisiin. Palvelemme kustannustehokkaasti ja etsimme
          parhaat mahdolliset ratkaisut käytössä olevan budjetin mukaan.
        </p>
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
