<template>
  <section class="promo container">
    <div class="promo__box">
      <div class="promo__left-box">
        <div>
          <img
            src="../../assets/images/logo-ochag.png"
            alt="logo"
            class="promo__logo"
          />
          <h1 class="promo__title">
            Бытовые отопительные котлы отечественного производства компании
            Сервисгаз
          </h1>
        </div>
      </div>
      <div class="promo__right-box">
        <HomeSlider />
      </div>
    </div>
  </section>
</template>

<script setup>
import HomeSlider from "../components/HomeSlider.vue";
</script>

<style lang="scss" scoped>
.promo__box {
  width: 100%;
  height: 500px;
  display: flex;

  @media (max-width: 720px) {
    flex-direction: column;
  }
}
.promo__left-box {
  flex-basis: 30%;
  flex-shrink: 0;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  @media (max-width: 720px) {
    align-items: center;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
.promo__right-box {
  flex-basis: 70%;
  flex-shrink: 1;
  height: 500px;
}
.promo__logo {
}
.promo__title {
  font-size: 18px;
  font-weight: 500;
  line-height: 31px;
  text-align: center;
  max-width: 350px;

  @media (max-width: 720px) {
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    font-weight: 700;
  }
}
</style>
