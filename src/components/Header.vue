<template>
  <header class="header container">
    <RouterLink to="/" class="logo-box" @click="activeLink = 'home'">
      <img src="../../assets/images/logo-ochag.png" alt="logo icon" class="logo" />
    </RouterLink>
    <ul class="navbar">
      <li class="navbar__link-box" :class="{activeLink: activeLink == 'about'}" >
        <RouterLink to="/about" class="navbar__link" @click="getActive()">
          О компании
        </RouterLink>
      </li>
      <li class="navbar__link-box" :class="{activeLink: activeLink == 'catalog'}">
        <RouterLink to="/catalog" class="navbar__link" @click="getActive()">
          Продукция    
        </RouterLink>
      </li>
      <li class="navbar__link-box" :class="{activeLink: activeLink == 'clients'}">
        <RouterLink to="/clients" class="navbar__link" @click="getActive()">
          Покупателям    
        </RouterLink>
      </li>
      <li class="navbar__link-box" :class="{activeLink: activeLink == 'partners'}">
        <RouterLink to="/partners" class="navbar__link" @click="getActive()">
          Партнерам    
        </RouterLink>
      </li>
      <li class="navbar__link-box" :class="{activeLink: activeLink == 'garanty'}">
        <RouterLink to="/garanty" class="navbar__link" @click="getActive()">
          Гарантия и сервис    
        </RouterLink>
      </li>
      <li class="navbar__link-box" :class="{activeLink: activeLink == 'library'}">
        <RouterLink to="/library" class="navbar__link" @click="getActive()">
          Библиотека    
        </RouterLink>
      </li>
      <li class="navbar__link-box" :class="{activeLink: activeLink == 'contacts'}">
        <RouterLink to="/contacts" class="navbar__link" @click="getActive()">
          Контакты    
        </RouterLink>
      </li>
    </ul>
    <div class="contacts">
      <a href="">
        <img src="../../assets/images/instagram.svg" alt="icon">
      </a>
      <a href="tel:88003335103" class="contacts__number">8 800 333-51-03</a>
      <div class="contacts__phone-btn">
        <img src="../../assets/images/icon-phone.svg" alt="icon">
      </div>
    </div>
  </header>
  <!-- <h1>activeLink{{activeLink}}</h1> -->
  <div v-if="activeLink != 'home'" class="banner-logo">
    <img src="../../assets/images/logo-ochag.png" alt="logo" class="banner-logo__img">
    <h1 class="banner-logo__title">Отопительное оборудование высокого качества</h1>
  </div>
</template>

<script setup>
import { onMounted, ref, watch, watchEffect } from "vue";
import { useRoute } from 'vue-router'

const route = useRoute()

const activeLink = ref('home')
const getActive = () => {
  const path = window.location.href
  if (path.includes('about')) activeLink.value = 'about'
  if (path.includes('catalog')) activeLink.value = 'catalog'
  if (path.includes('clients')) activeLink.value = 'clients'
  if (path.includes('partners')) activeLink.value = 'partners'
  if (path.includes('garanty')) activeLink.value = 'garanty'
  if (path.includes('library')) activeLink.value = 'library'
  if (path.includes('contacts')) activeLink.value = 'contacts'
  return activeLink
}
watch(route, () => {
  getActive()
})

// watch(activeLink, () => {
//   window.localStorage.setItem('activeLink', JSON.stringify(activeLink.value))
// })


</script>

<style lang="scss" scoped>
.logo {
  width: 120px;
}
.header {
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // margin-bottom: 30px;
  // box-shadow: 10px 20px 40px 0px #4778A538;
  box-shadow: 0px 2px 4px 0px #4778A538;

  background-color: #EFF7FC;
  z-index: 10;
  position: relative;
;
}
.navbar {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
.navbar__link-box {
  padding: 30px 15px;
  & *:hover {
    color: #007bc5 !important;

  }
}
.navbar__link:link, 
.navbar__link:link {
  color: #3C3F47;
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}
.contacts {
  display: flex;
  justify-content: center;
  align-items: center;
}
.contacts__number {
  font-size: 24px;
  padding: 0 20px;
  color: #3C3F47;
  text-decoration: none;
}
.contacts__phone-btn {
 min-width: 80px;
 min-height: 80px;
 background-color: #007bc5;
 display: flex;
 justify-content: center;
 align-items: center;

 &:hover {
   cursor: pointer;
 }
}
.activeLink {
  background-color: #007bc5;
  & > * {
    color: #fff;
  }
  & > *:hover {
    color: #fff !important;
  }
}
.banner-logo {
  position: relative;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #EFF7FC;
  // padding: 50px;
  z-index: -10;
}
.banner-logo__img {

}
.banner-logo__title {
  font-size: 24px;
  font-weight: 300;
  line-height: 31px;
  color: #007bc5;
}

</style>