<template>
  <h2 class="title-main container" id="homeCatalog">Каталог</h2>
  <section class="shop container">
    <div class="brands">
      <!-- <h2 class="brands__title" @click="setFilterBrand('')">Все</h2> -->
      <ul class="brands__list">
        <li class="brands__list-item" @click="setFilterBrand('')">Все</li>
        <li class="brands__list-item" @click="setFilterBrand(1)">
          Стальной газовый котел "Стандарт"
        </li>
        <li class="brands__list-item" @click="setFilterBrand(2)">
          Аппарат отопительный газовый "Премиум"
        </li>
        <li class="brands__list-item" @click="setFilterBrand(3)">
          Аппарат отопительный газовый "Премиум EN"
        </li>
        <li class="brands__list-item" @click="setFilterBrand(4)">
          Чугунный газовый котел "КЧГ- EN"
        </li>
        <li class="brands__list-item" @click="setFilterBrand(5)">
          Парапетный газовый котел КСГЗ "Compact"
        </li>
      </ul>
    </div>
    <div class="catalog">
      <div class="catalog__container">
        <ProductHome
          class="home-product"
          v-for="element in elements"
          :key="element.id"
          :product="element"
        />
      </div>
    </div>
  </section>
  <div class="arrow-box">
    <a href="#homeMap">
      <img
        class="arrowDown"
        src="../../assets/images/icon-arrowDown.svg"
        alt="Стрелка вниз"
      />
    </a>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import prodData from "../../assets/prodData";
import ProductHome from "./ProductHome.vue";

const products = ref([]);
const elements = ref([]);
const filterBrand = ref("");

const getProducts = () => {
  products.value = prodData;
  elements.value = prodData;
  if (products.value.length > 8) {
    elements.value = products.value.slice(0, 8);
  }
};

onMounted(() => {
  getProducts();
});

const setFilterBrand = (id) => {
  filterBrand.value = id;
};

watch(filterBrand, () => {
  if (filterBrand.value > 0) {
    elements.value = products.value.filter((el) => {
      return el.type == filterBrand.value;
    });
  } else {
    getProducts();
  }
});
</script>

<style lang="scss" scoped>
.title-main {
  padding-top: 50px;
  @media (max-width: 1080px) {
    margin-bottom: 0;
  }
}
.shop {
  display: flex;
  align-items: flex-start;
  justify-content: stretch;

  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
}
.brands {
  padding: 10px 20px 0 0;
}
.brands__title {
  width: 150px;
  font-size: 18px;
  margin-bottom: 30px;

  &:hover {
    cursor: pointer;
  }
}
.brands__list {
  list-style: none;

  @media (max-width: 1080px) {
    margin-bottom: 20px;
  }
}
.brands__list-item {
  font-size: 18px;
  padding: 7px 10px;
  border-radius: 3px;
  transition: 0.2s ease;

  &:hover {
    cursor: pointer;
    background-color: #eee;
  }

  @media (max-width: 1430px) {
    font-size: 16px;
  }
}

.catalog {
  padding: 0 30px 0;

  @media (max-width: 1080px) {
    padding: 0 0 0;
  }
}
.catalog__container {
  display: grid;
  // grid-template-columns: repeat(5, 300px);
  grid-template: minmax(270px, auto) / repeat(4, 25%);
  grid-auto-rows: minmax(270px, auto);
  grid-auto-columns: 18.9%;
  gap: 20px;
  margin-bottom: 37px;
  max-width: 100%;

  @media (max-width: 1700px) {
    grid-template-columns: repeat(3, 300px);
  }
  @media (max-width: 1350px) {
    grid-template-columns: repeat(2, 300px);
  }
  @media (max-width: 1080px) {
    grid-template: minmax(270px, auto) / repeat(3, 33%);
    grid-auto-rows: minmax(270px, auto);
    grid-auto-columns: 33%;
    gap: 8px;
  }
  @media (max-width: 950px) {
    grid-template: minmax(270px, auto) / repeat(2, 49.2%);
    grid-auto-rows: minmax(270px, auto);
    grid-auto-columns: 49.2%;
    gap: 8px;
  }
  @media (max-width: 390px) {
    grid-template: minmax(270px, auto) / repeat(2, 49.2%);
    grid-auto-rows: minmax(240px, auto);
    grid-auto-columns: 49.2%;
    gap: 8px;
  }
  @media (max-width: 360px) {
    grid-template: minmax(270px, auto) / repeat(2, 49.2%);
    grid-auto-rows: minmax(200px, auto);
    grid-auto-columns: 49.2%;
    gap: 8px;
  }
}

.shop .home-product {
  max-width: 350px;
  max-height: 480px;

  @media (max-width: 480px) {
    padding: 15px 10px 30px;
  }
}
.arrow-box {
  padding-top: 30px;
  padding-bottom: 50px;
}
</style>
