<template>
  <div class="">
    <HomePromo />
    <HomeCompany />
    <HomePartners />
    <BoilerFilter />
    <HomeCatalogSection />
    <HomeShopsMap />
    <HomeToPartners />
    <div class="home-garanty" id="homeGarantyHeader">
      <GarantyHeader />
      <GarantyMap />
    </div>
    <br />
    <br />
    <br />
  </div>
</template>

<script setup>
import BoilerFilter from "../components/BoilerFilter.vue";
import HomeCatalogSection from "../components/HomeCatalogSection.vue";
import HomeCompany from "../components/HomeCompany.vue";
import HomePartners from "../components/HomePartners.vue";
import HomePromo from "../components/HomePromo.vue";
import HomeToPartners from "../components/HomeToPartners.vue";
import GarantyHeader from "../components/GarantyHeader.vue";
import GarantyMap from "../components/GarantyMap.vue";
import HomeShopsMap from "../components/HomeShopsMap.vue";
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}
.arrow-box {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 993px) {
    display: none;
  }
}
.home-garanty {
  background-color: #eff7fc;
}
</style>
