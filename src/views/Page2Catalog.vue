<template>
  <section class="container">
    <h1 class="title-1 mb-37 mt-50">Каталог</h1>
    <h2 class="title-2 mb-30">Стальной газовый котел серии "Стандарт"</h2>
    <div class="catalog-container">
      <Product
        v-for="product in items.cat1"
        :key="product.id"
        :product="product"
      />
    </div>
    <h2 class="title-2 mb-30">Аппарат отопительный газовый серии "Премиум"</h2>
    <div class="catalog-container">
      <Product
        v-for="product in items.cat2"
        :key="product.id"
        :product="product"
      />
    </div>
    <h2 class="title-2 mb-30">
      Аппарат отопительный газовый серии "Премиум EN"
    </h2>
    <div class="catalog-container">
      <Product
        v-for="product in items.cat3"
        :key="product.id"
        :product="product"
      />
    </div>
    <h2 class="title-2 mb-30">Чугунный газовый котел "КЧГ-EN"</h2>
    <div class="catalog-container">
      <Product
        v-for="product in items.cat4"
        :key="product.id"
        :product="product"
      />
    </div>
    <h2 class="title-2 mb-30">Парапетный газовый котел КСГЗ серии "Compact"</h2>
    <div class="catalog-container">
      <Product
        v-for="product in items.cat5"
        :key="product.id"
        :product="product"
      />
    </div>
  </section>
</template>

<script setup>
import { onMounted, reactive, ref, watch } from "vue";
import prodData from "../../assets/prodData";
import Product from "../components/Product.vue";

const products = ref([]);
const elements = ref([]);

const getProducts = () => {
      products.value = prodData;
      elements.value = prodData;
};
const items = reactive({
  cat1: [],
  cat2: [],
  cat3: [],
  cat4: [],
  cat5: [],
});
onMounted(() => {
  getProducts();
  getItemsCat();
});
const getItemsCat = () => {
  const temp = [...elements.value];
  items.cat1 = temp.filter((el) => el.type == 1);
  items.cat2 = temp.filter((el) => el.type == 2);
  items.cat3 = temp.filter((el) => el.type == 3);
  items.cat4 = temp.filter((el) => el.type == 4);
  items.cat5 = temp.filter((el) => el.type == 5);
};
watch(products, () => {
  getItemsCat();
});
</script>

<style lang="scss" scoped>
.catalog-container {
  display: grid;
  // grid-template-columns: repeat(5, 300px);
  grid-template: minmax(270px,auto)/repeat(5,18.9%);
  grid-auto-rows: minmax(270px,auto);
  grid-auto-columns: 18.9%;
  gap: 20px;
  margin-bottom: 37px;
  max-width: 100%;

  @media (max-width: 1700px) {
    grid-template-columns: repeat(4, 300px);
  }
  @media (max-width: 1350px) {
    grid-template-columns: repeat(3, 300px);
  }
  @media (max-width: 1030px) {
    grid-template-columns: repeat(2, 300px);
  }
  @media (max-width: 680px) {
    grid-template: minmax(270px,auto)/repeat(2,49.2%);
    grid-auto-rows: minmax(270px,auto);
    grid-auto-columns: 49.2%;
    gap: 8px;
  }
  @media (max-width: 390px) {
    grid-template: minmax(270px,auto)/repeat(2,49.2%);
    grid-auto-rows: minmax(240px,auto);
    grid-auto-columns: 49.2%;
    gap: 8px;
  }
  @media (max-width: 360px) {
    grid-template: minmax(270px,auto)/repeat(2,49.2%);
    grid-auto-rows: minmax(200px,auto);
    grid-auto-columns: 49.2%;
    gap: 8px;
  }
}
</style>
