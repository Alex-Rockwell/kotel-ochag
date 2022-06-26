<template>
  <div class="shops container">
    <div class="shops__text-box">
      <div class="select">
        <h1 class="select-title">Сервисные центры</h1>
        <CustomSelectMap
          @selected="
            (current) =>
              (selectedRegion = placesData.find(
                (el) => el.regionId == current.regionId
              ))
          "
        />
      </div>
      <div class="shops__text-container">
        <div
          class="shops__text"
          v-for="el in selectedRegion.shops"
          :key="el.shopId"
        >
          <h3 class="shopName">{{ el.shopName }}</h3>
          <button class="shop__btn-show" @click="handleClick(el)">
            Показать на карте
          </button>
          <h3 class="shopAdress">{{ el.cityName }}, {{ el.shopAdress }}</h3>
          <div class="adress-box">
            <div class="phone-box">
              <a class="shopPhone" :href="el.shopPhone">{{ el.shopPhone }}</a>
              <a v-if="el.shopPhone2" class="shopPhone" :href="el.shopPhone2">
                {{ el.shopPhone2 }}</a
              >
            </div>
            <div class="site-box">
              <a
                v-if="el.shopSite"
                class="shopSite"
                :href="el.shopSite"
                target="_blank"
              >
                {{ el.shopSite }}
              </a>
              <a v-if="el.shopMail" class="shopMail" :href="el.shopMail">
                {{ el.shopMail }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="shops__map-box">
      <MapTest :coords="coords" :markerText="markerText" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CustomSelectMap from "./CustomSelectMapGaranty.vue";
import placesData from "../../assets/placesService";
import MapTest from "./MapTest.vue";

const initial = placesData.find((el) => el.regionId == 22);

const selectedRegion = ref(initial);

const coords = ref([53.333951, 83.794670])

const markerText = ref('ООО «Барнаулгоргаз»')

const handleClick = (el) => {
  coords.value = el.shopCoords
  markerText.value = el.shopName
}
</script>

<style lang="scss" scoped>
.select-title {
  font-size: 24px;
  line-height: 29px;
  display: inline-block;
  margin-right: 30px;

  @media (max-width: 820px) {
    margin-bottom: 10px;
  }
}
.shops {
  display: flex;
  align-items: stretch;
  justify-content: flex-start;

  @media (max-width: 880px) {
    flex-direction: column;
  }
}
.shops__text-box {
  // background-color: rgb(255, 255, 255);
  padding: 20px;
  flex-basis: 40%;
  max-height: 715px;

  @media (max-width: 1440px) {
    flex-basis: 50%;
    max-height: 460px;
  }
}
.shops__text-container {
  height: 680px;
  overflow: auto;

  @media (max-width: 1440px) {
    flex-basis: 50%;
    max-height: 350px;
  }
}
.shops__map-box {
  // background-color: rgb(255, 255, 255);
  flex-basis: 60%;
  padding-bottom: 50px;

  @media (max-width: 1600px) {
    flex-basis: 50%;
  }
}

.shops__map {
  @media (max-width: 750px) {

  }
}
.shops__text {
  padding: 10px;
  color: rgb(60, 63, 71);
}
.shopName {
  font-size: 16px;
  font-weight: 700;
  margin-top: 30px;
  display: inline-block;
}
.shop__btn-show {
  margin-left: 15px;
  background-color: transparent;
  color: #007bc5;
  border: none;
  outline: 0;
}
.shop__btn-show:hover {
  cursor: pointer;
}
.shopAdress {
  font-size: 14px;
  font-weight: 400;
  padding-left: 25px;
  position: relative;
  margin-top: 15px;
  margin-bottom: 0;
}
.shopAdress::after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 14px;
  height: 22px;
  background: url(../../assets/images/address.svg) center no-repeat;
}
.shopTime {
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 15px;
}
.shopPhone {
  font-size: 14px;
  font-weight: 400;
  padding-left: 25px;
  position: relative;
  color: rgb(60, 63, 71);
  text-decoration: none;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 40px;
  display: block;

  @media (max-width: 900px) {

  }
}
.shopPhone::after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 19px;
  height: 19px;
  background: url(../../assets/images/icon-phone.svg) center no-repeat;
}
.shopSite {
  font-size: 14px;
  font-weight: 400;
  padding-left: 25px;
  position: relative;
  margin-top: 10px;
  color: rgb(60, 63, 71);
  text-decoration: none;
  display: inline-block;
}
.shopSite::after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 18px;
  height: 18px;
  background: url(../../assets/images/icon-website.svg) center no-repeat;
}
.shopMail {
  font-size: 14px;
  font-weight: 400;
  padding-left: 25px;
  position: relative;
  margin-top: 10px;
  color: rgb(60, 63, 71);
  text-decoration: none;
  display: inline-block;
}
.shopMail::after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 18px;
  height: 18px;
  background: url(../../assets/images/main/icons/mail.svg) center no-repeat;
}
.shops__map {
  width: 100%;
  height: 100%;
}
.adress-box {
  display: flex;
  justify-content: space-between;

  @media (max-width: 1445px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
}
.phone-box {

}
.site-box {
  padding-right: 50px;
}
</style>
