<template>
  <!-- <Header /> -->
  <Header2 />
  <RouterView />
  <Footer />
</template>

<script setup>
import { RouterView } from "vue-router";
import Footer from "./components/Footer.vue";
import Header2 from "./components/Header2.vue";
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  // text-rendering: optimizeSpeed;
}
body {
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #3c3f47;
}
.container {
  margin-left: 107px;
  padding-right: 111px;
  // padding: 0;
  max-width: 1702px;
  // width: auto;
  margin: auto;

  @media (max-width: 1919px) {
    padding-left: 80px;
    padding-right: 80px;
  }

  @media (max-width: 1599px) {
    padding-left: 25px;
    padding-right: 25px;
  }
  @media (max-width: 1439px) {
    padding-left: 50px;
    padding-right: 50px;

    // .container_pl23
    //   padding-left: 0;
  }
  // @media (max-width: 1199px)
  //     .container
  //         &_pl23
  //             padding-left: 0
  @media (max-width: 991px) {
    padding-left: 30px;
    padding-right: 30px;
  }
  @media (max-width: 767px) {
    padding-left: 20px;
    padding-right: 20px;

    // &_pl23
    //     padding-left: 0
  }
  @media (max-width: 575px) {
    padding-left: 20px;
    padding-right: 20px;
  }
}
.title-1 {
  font-size: 36px;
  font-weight: 700;
  line-height: 47px;
  letter-spacing: 0em;
  text-align: left;
}
.title-2 {
  font-size: 24px;
  font-weight: 700;
  line-height: 31px;
  letter-spacing: 0em;
  text-align: left;
}
.title-main {
  font-size: 36px;
  font-weight: 700;
  line-height: 43px;
}
.text-main {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}
.centered {
  text-align: center;
}
.mt-50 {
  margin-top: 50px;
}
.mt-20 {
  margin-top: 20px;
}
.mb-37 {
  margin-bottom: 37px;
}
.mb-30 {
  margin-bottom: 30px;
}

section {
  // min-height: 60vh;
}

.container2 {
  margin-left: 107px;
  margin-right: 111px;
  padding: 0;
  max-width: 1702px;
  width: auto;
  @media (max-width: 1919px) {
    margin-left: 80px;
    margin-right: 80px;
  }
  @media (max-width: 1600px) {
    margin-left: 25px;
    margin-right: 25px;
  }
  @media (max-width: 1439px) {
    margin-left: 50px;
    margin-right: 50px;
  }
  @media (max-width: 991px) {
    margin-left: 30px;
    margin-right: 30px;
  }
  @media (max-width: 767px) {
    margin-left: 20px;
    margin-right: 20px;
  }
  @media (max-width: 575px) {
    margin-left: 20px;
    margin-right: 20px;
  }
  @media (max-width: 1600px) {
    margin-left: 25px;
    margin-right: 25px;
  }
  @media (max-width: 1600px) {
    margin-left: 25px;
    margin-right: 25px;
  }
  @media (max-width: 1600px) {
    margin-left: 25px;
    margin-right: 25px;
  }
}
</style>
