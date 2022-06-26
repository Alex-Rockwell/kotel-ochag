<template>
  <section class="boiler container" id="homeBoiler">
    <h2 class="boiler__title centered">Бытовые отопительные котлы Очаг</h2>
    <ul class="tabheader">
      <li
        class="tabheader__item"
        :class="{ activeType: activeType == 1 }"
        @click="activeType = 1"
      >
        <span class="tabheader__title">СТАНДАРТ</span>
        <span class="tabheader__description">стальные газовые котлы</span>
      </li>
      <li
        class="tabheader__item"
        :class="{ activeType: activeType == 2 }"
        @click="activeType = 2"
      >
        <span class="tabheader__title">ПРЕМИУМ</span>
        <span class="tabheader__description">стальные газовые котлы</span>
      </li>
      <li
        class="tabheader__item"
        :class="{ activeType: activeType == 3 }"
        @click="activeType = 3"
      >
        <span class="tabheader__title">ПРЕМИУМ EN</span>
        <span class="tabheader__description">стальные газовые котлы</span>
      </li>
      <li
        class="tabheader__item"
        :class="{ activeType: activeType == 4 }"
        @click="activeType = 4"
      >
        <span class="tabheader__title">КЧГ EN</span>
        <span class="tabheader__description">стальные газовые котлы</span>
      </li>
      <li
        class="tabheader__item"
        :class="{ activeType: activeType == 5 }"
        @click="activeType = 5"
      >
        <span class="tabheader__title">ПАРАПЕТНЫЕ</span>
        <span class="tabheader__description">стальные газовые котлы</span>
      </li>
    </ul>

    <!-- ////////////////////////// > 1200 ///////////////////////////////// -->

    <div v-if="variant1" class="boiler-container">
      <div class="boiler-container-part1">
        <h2 class="boiler__title">{{ filteredElement.shortTypeName }}</h2>
        <p class="text-main">
          {{ filteredElement.description }}
        </p>
        <span class="boiler__filter-text">{{ filterRange }} м&sup2;</span>
        <span class="boiler__filter-text2"
          >Площадь отапливаемого помещения</span
        >
        <div class="range-container">
          <input
            type="range"
            :min="minRange"
            :max="maxRange"
            v-model="filterRange"
          />
          <div class="range-values">
            <span class="min-range">{{ minRange }} м2</span>
            <span class="max-range">{{ maxRange }} м2</span>
          </div>
        </div>
        <h3 class="boiler__filter-text3">{{ filteredElement.shortTitle }}</h3>
        <span class="boiler__filter-text2">Рекомендуемая модель котла</span>
      </div>
      <div class="boiler-container-part2">
        <RouterLink
          :to="`/catalog/${filteredElement.id}`"
          class="link"
          target="_blank"
        >
          <img
            :src="`../../${filteredElement.image}`"
            alt="Котел Буран"
            class="boiler__img"
          />
        </RouterLink>
      </div>
      <div class="boiler-container-part3">
        <ul class="heat__list">
          <li class="heat__item">
            <span class="heat__t1">Работает без электричества</span>
            <span class="heat__t2">Подключение к электросети не требуется</span>
          </li>
          <li class="heat__item">
            <span class="heat__t1">Сталь 3 мм.</span>
            <span class="heat__t2">От надёжных российских производителей</span>
          </li>
          <li class="heat__item">
            <span class="heat__t1"
              >Подходит для систем с естественной и принудительной
              циркуляцией</span
            >
          </li>
          <li class="heat__item">
            <span class="heat__t1">Европейские комплектующие</span>
            <span class="heat__t2"
              >Газовая автоматика SIT — Италия Контрольно-измерительные приборы
              CEWAL — Италия</span
            >
          </li>
          <li class="heat__item">
            <span class="heat__t1"
              >Атмосферная горелка из нержавеющей стали</span
            >
          </li>
          <li class="heat__item">
            <span class="heat__t1">Срок службы 15 лет</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- ////////////////////////// < 1200 ///////////////////////////////// -->

    <div v-if="variant2" class="boiler-container-2">
      <div class="boiler-container-part1-2">
        <h2 class="boiler__title">{{ filteredElement.shortTypeName }}</h2>
        <ul class="heat__list">
          <li class="heat__item">
            <span class="heat__t1">Работает без электричества</span>
            <span class="heat__t2">Подключение к электросети не требуется</span>
          </li>
          <li class="heat__item">
            <span class="heat__t1">Сталь 3 мм.</span>
            <span class="heat__t2">От надёжных российских производителей</span>
          </li>
          <li class="heat__item">
            <span class="heat__t1"
              >Подходит для систем с естественной и принудительной
              циркуляцией</span
            >
          </li>
          <li class="heat__item">
            <span class="heat__t1">Европейские комплектующие</span>
            <span class="heat__t2"
              >Газовая автоматика SIT — Италия Контрольно-измерительные приборы
              CEWAL — Италия</span
            >
          </li>
          <li class="heat__item">
            <span class="heat__t1"
              >Атмосферная горелка из нержавеющей стали</span
            >
          </li>
          <li class="heat__item">
            <span class="heat__t1">Срок службы 15 лет</span>
          </li>
        </ul>
      </div>
      <div class="boiler-container-part2-2">
        <RouterLink
          :to="`/catalog/${filteredElement.id}`"
          class="link"
          target="_blank"
        >
          <img
            :src="`../../${filteredElement.image}`"
            alt="Котел Буран"
            class="boiler__img"
          />
        </RouterLink>
      </div>
      <div class="boiler-container-part3-2">
        <div class="text-container-2">
          <div class="text-left-2">
            <span class="boiler__filter-text">{{ filterRange }} м&sup2;</span>
            <span class="boiler__filter-text2"
              >Площадь отапливаемого помещения</span
            >
          </div>
          <div class="text-right-2">
            <h3 class="boiler__filter-text3-2">
              {{ filteredElement.shortTitle }}
            </h3>
            <span class="boiler__filter-text2">Рекомендуемая модель котла</span>
          </div>
        </div>
        <div class="range-container-2">
          <input
            type="range"
            :min="minRange"
            :max="maxRange"
            v-model="filterRange"
          />
          <div class="range-values">
            <span class="min-range">{{ minRange }} м2</span>
            <span class="max-range">{{ maxRange }} м2</span>
          </div>
        </div>
      </div>
    </div>

    <!-- ////////////////////////// < 575 ///////////////////////////////// -->

    <div v-if="variant3" class="boiler-container-3">

      <div class="boiler-container-part2-2 boiler-container-part2-3">
        <RouterLink
          :to="`/catalog/${filteredElement.id}`"
          class="link"
          target="_blank"
        >
          <img
            :src="`../../${filteredElement.image}`"
            alt="Котел Буран"
            class="boiler__img"
          />
        </RouterLink>
      </div>
      <div class="boiler-container-part3-2 boiler-container-part3-3">
        <div class="text-container-2">
          <div class="text-left-2">
            <span class="boiler__filter-text">{{ filterRange }} м&sup2;</span>
            <span class="boiler__filter-text2"
              >Площадь отапливаемого помещения</span
            >
          </div>
          <div class="text-right-2">
            <h3 class="boiler__filter-text3-2">
              {{ filteredElement.shortTitle }}
            </h3>
            <span class="boiler__filter-text2">Рекомендуемая модель котла</span>
          </div>
        </div>
        <div class="range-container-2">
          <input
            type="range"
            :min="minRange"
            :max="maxRange"
            v-model="filterRange"
          />
          <div class="range-values">
            <span class="min-range">{{ minRange }} м2</span>
            <span class="max-range">{{ maxRange }} м2</span>
          </div>
        </div>
      </div>
      <div class="boiler-container-part1-2 boiler-container-part1-3">
        <!-- <h2 class="boiler__title">{{ filteredElement.shortTypeName }}</h2> -->
        <ul class="heat__list heat__list-3">
          <li class="heat__item">
            <span class="heat__t1">Работает без электричества</span>
            <span class="heat__t2">Подключение к электросети не требуется</span>
          </li>
          <li class="heat__item">
            <span class="heat__t1">Сталь 3 мм.</span>
            <span class="heat__t2">От надёжных российских производителей</span>
          </li>
          <li class="heat__item">
            <span class="heat__t1"
              >Подходит для систем с естественной и принудительной
              циркуляцией</span
            >
          </li>
          <li class="heat__item">
            <span class="heat__t1">Европейские комплектующие</span>
            <span class="heat__t2"
              >Газовая автоматика SIT — Италия Контрольно-измерительные приборы
              CEWAL — Италия</span
            >
          </li>
          <li class="heat__item">
            <span class="heat__t1"
              >Атмосферная горелка из нержавеющей стали</span
            >
          </li>
          <li class="heat__item">
            <span class="heat__t1">Срок службы 15 лет</span>
          </li>
        </ul>
      </div>
    </div>

  </section>
  <div class="arrow-box">
    <a href="#homeCatalog">
      <img
        class="arrowDown"
        src="../../assets/images/icon-arrowDown.svg"
        alt="Стрелка вниз"
      />
    </a>
  </div>
</template>

<script setup>
import { onMounted, ref, watch, onUnmounted } from "vue";
import prodData from "../../assets/prodData";
import { RouterLink } from "vue-router";

const width = ref(window.innerWidth);

function setWidth() {
  width.value = window.innerWidth;
}
onMounted(() => {
  window.addEventListener("resize", setWidth);
});
onUnmounted(() => {
  window.removeEventListener("resize", setWidth);
});
const variant1 = ref(width.value >= 1200);
watch(width, () => {
  variant1.value = width.value >= 1200;
});
const variant2 = ref(width.value < 1200 && width.value >= 575);
watch(width, () => {
  variant2.value = width.value < 1200 && width.value >= 575;
});
const variant3 = ref(width.value < 575);
watch(width, () => {
  variant3.value = width.value < 575;
});

const activeType = ref(1);
const filterRange = ref(5);

const products = ref([]);
const elements = ref([]);
const getProducts = () => {
  products.value = prodData;
  elements.value = prodData;
};
const minRange = ref(5);
const maxRange = ref(200);

onMounted(() => {
  getProducts();
  getFilteredElement();
});

const filteredElement = ref({});
const getFilteredElement = () => {
  let temp = products.value.filter((el) => el.type == activeType.value);
  let spaceValues = temp.map((el) => el.space);
  maxRange.value = Math.max(...spaceValues);

  let temp2 = temp.filter((el) => el.space > filterRange.value);
  if (temp2.length > 0) {
    filteredElement.value = temp2[0];
  } else {
    filteredElement.value = temp[temp.length - 1];
  }
};
watch([elements, activeType, filterRange], () => {
  getFilteredElement();
});
</script>

<style lang="scss" scoped>
.arrow-box {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;

  @media (max-width: 993px) {
    display: none;
  }
}
.boiler {
  padding-top: 50px;

  h2 {
    margin-bottom: 40px;
  }
}
.boiler__title {
  font-size: 36px;
  font-weight: 700;
  line-height: 43px;

  @media (max-width: 575px) {
    font-size: 28px;
  }
}
.range-container {
  max-width: 400px;
  padding-top: 20px;

  input {
    display: block;
  }
}

.tabheader {
  display: grid;
  grid-template-columns: repeat(5, auto);
  height: auto;
  list-style: none;
  margin: auto;

  @media (max-width: 1175px) {
    grid-template-columns: repeat(3, auto);
  }
  @media (max-width: 850px) {
    grid-template-columns: repeat(2, auto);
  }
  @media (max-width: 570px) {
    grid-template-columns: repeat(1, auto);
  }
}
.tabheader__item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #f9f9f9;
  border-left: #d8d8d8 solid 1px;
  border-right: #d8d8d8 solid 1px;
  border-bottom: #e8e8e8 solid 5px;
  transition: 0.5s ease;

  &:hover {
    cursor: pointer;
    border-bottom: #f64237 solid 5px;
  }
}
.tabheader__title {
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.04em;
}
.tabheader__description {
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
}
.activeType {
  border-bottom: #f64237 solid 5px;
}

.boiler-container {
  max-width: 1580px;
  margin: auto;
  height: auto;
  padding-top: 64px;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  padding-bottom: 50px;

  p {
    max-width: 453px;
    margin-bottom: 30px;
  }
}
.boiler-container-part1 {
  flex-basis: 35%;
}
.boiler-container-part2 {
  flex-basis: 30%;
}
.boiler-container-part3 {
  flex-basis: 35%;
  padding: 30px;
}
.boiler__filter-text {
  font-size: 36px;
  font-weight: 400;
  line-height: 43px;
  display: block;
}
.boiler__filter-text2 {
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
}
.boiler__filter-text3 {
  font-size: 36px;
  font-weight: 400;
  line-height: 43px;
  color: #027dc7;
  margin-top: 50px;
}
.boiler__img {
  max-width: 80%;
  max-height: 100%;
  display: block;
  margin: auto;
}
.heat__list {
  list-style: none;
  height: fit-content;
}
.heat__item {
  margin-bottom: 25px;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    width: 8px;
    height: 8px;
    left: -20px;
    top: 3px;
    background-color: #f64237;
  }
}
.heat__t1 {
  display: block;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  margin-bottom: 5px;
}
.heat__t2 {
  display: block;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
}

.range-values {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}
.min-range {
  padding-top: 10px;
}
.max-range {
  padding-top: 10px;
}

/////////////////////////////////////////////////////////////////////
/// /////////////////////////   2 ///////////////////////////////////
/// /////////////////////////////////////////////////////////////////

.boiler-container-2 {
  max-width: 1200px;
  margin: auto;
  height: 700px;
  // background-color: lavenderblush;
  padding-top: 64px;
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;

  p {
    max-width: 453px;
    margin-bottom: 30px;
  }
}
.boiler-container-part1-2 {
  flex-basis: 45%;
  padding-left: 30px;

  @media (max-width: 920px) {
    flex-basis: 55%;
  }
}

.boiler-container-part2-2 {
  flex-basis: 45%;
  display: flex;
  justify-content: center;
  align-items: center;

  .boiler__img {
    max-width: 75%;
    max-height: auto;

    @media (max-width: 920px) {
      max-width: 98%;
    }
  }
}
.boiler-container-part3-2 {
  // flex-basis: 100%;
  // background-color: #f9f9f9;
  flex-basis: 100%;
  padding: 30px;

  .range-container-2 {
    max-width: auto;
    margin-top: 20px;
  }
}

.text-container-2 {
  display: flex;
  justify-content: space-between;
}
.text-left-2 {
  flex-basis: 45%;
}
.text-right-2 {
  flex-basis: 55%;
}

.boiler__filter-text3-2 {
  font-size: 36px;
  font-weight: 400;
  line-height: 43px;
  color: #027dc7;
  margin-top: 0;
}
///////////////////////////////////////////////////////////////////
/////////////////////////////// part 3 ////////////////////////////
///////////////////////////////////////////////////////////////////
.boiler-container-3 {
  display: block;
}
.heat__list-3 {
  padding-left: 20px;
}
.boiler-container-part1-3 {
  // padding-left: 400px;
}
.boiler-container-part2-3 {
  flex-basis: 100%;

  .boiler__img {
    max-width: auto;
    max-height: 300px;

    @media (max-width: 920px) {
      // max-width: 98%;
    }
  }
}
.boiler-container-part3-3 {
  // flex-basis: 100%;
}

/////////////////////////////////////////////////////////////////////
///////////////////////////////// input /////////////////////////////
/////////////////////////////////////////////////////////////////////

input[type="range"] {
  height: 10px;
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
}
input[type="range"]:focus {
  outline: none;
}
input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  // animate: 0.2s;
  transition: 0.2s;
  box-shadow: 0px 0px 1px #353535;
  background: #f1f1f1;
  border-radius: 5px;
  border: 1px solid #bbbbbb;
}
input[type="range"]::-webkit-slider-thumb {
  box-shadow: 1px 1px 1px #353535;
  border: 1px solid #e3e2e0;
  height: 42px;
  width: 30px;
  border-radius: 10px;
  background: #ffffff;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -16px;
}
input[type="range"]:focus::-webkit-slider-runnable-track {
  background: #f1f1f1;
}
input[type="range"]::-moz-range-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  // animate: 0.2s;
  transition: 0.2s;
  box-shadow: 0px 0px 1px #353535;
  background: #f1f1f1;
  border-radius: 5px;
  border: 1px solid #bbbbbb;
}
input[type="range"]::-moz-range-thumb {
  box-shadow: 1px 1px 1px #353535;
  border: 1px solid #e3e2e0;
  height: 42px;
  width: 30px;
  border-radius: 10px;
  background: #ffffff;
  cursor: pointer;
}
input[type="range"]::-ms-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  // animate: 0.2s;
  transition: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type="range"]::-ms-fill-lower {
  background: #f1f1f1;
  border: 1px solid #bbbbbb;
  border-radius: 10px;
  box-shadow: 0px 0px 1px #353535;
}
input[type="range"]::-ms-fill-upper {
  background: #f1f1f1;
  border: 1px solid #bbbbbb;
  border-radius: 10px;
  box-shadow: 0px 0px 1px #353535;
}
input[type="range"]::-ms-thumb {
  margin-top: 1px;
  box-shadow: 1px 1px 1px #353535;
  border: 1px solid #e3e2e0;
  height: 42px;
  width: 30px;
  border-radius: 10px;
  background: #ffffff;
  cursor: pointer;
}
input[type="range"]:focus::-ms-fill-lower {
  background: #f1f1f1;
}
input[type="range"]:focus::-ms-fill-upper {
  background: #f1f1f1;
}
</style>
