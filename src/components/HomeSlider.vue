<!-- <img src="../../assets/images/img1.jpg" alt="">
<img src="../../assets/images/img2.jpg" alt=""> -->

<template>
  <swiper
    :slidesPerView="1"
    :spaceBetween="30"
    :loop="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }"
    :modules="modules"
  >
    <swiper-slide>
      <img
        src="../../assets/images/poster1.jpg"
        alt="slide"
        class="slide-img"
      />
    </swiper-slide>
    <swiper-slide>
      <img
        src="../../assets/images/poster2.jpg"
        alt="slide"
        class="slide-img"
      />
    </swiper-slide>
    <swiper-slide>
      <img
        src="../../assets/images/poster3.jpg"
        alt="slide"
        class="slide-img"
      />
    </swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
// import { ref } from "vue";

// const width1 = ref(window.innerWidth)

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {

    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>

<style>
:root {
    --swiper-theme-color: #fff;
;
}

.swiper {
  width: 955px;
  height: 100%;
}
@media (max-width: 1435px) {
  .swiper {
    width: 900px;
  }
}
@media (max-width: 1345px) {
  .swiper {
    width: 800px;
  }
}
@media (max-width: 1200px) {
  .swiper {
    width: 700px;
  }
}
@media (max-width: 1050px) {
  .swiper {
    width: 600px;
  }
}
@media (max-width: 1000px) {
  .swiper {
    width: 600px;
  }
}
@media (max-width: 900px) {
  .swiper {
    width: 500px;
  }
}
@media (max-width: 750px) {
  .swiper {
    width: 400px;
  }
}
@media (max-width: 720px) {
  .swiper {
    width: 600px;
    padding-top: 50px;
  }
}
@media (max-width: 640px) {
  .swiper {
    width: 550px;
  }
}
@media (max-width: 590px) {
  .swiper {
    width: 500px;
  }
}
@media (max-width: 530px) {
  .swiper {
    width: 450px;
  }
}
@media (max-width: 500px) {
  .swiper {
    width: 350px;
  }
}
@media (max-width: 395px) {
  .swiper {
    width: 300px;
  }
}
@media (max-width: 350px) {
  .swiper {
    width: 250px;
  }
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: auto;
  height: 100%;
  object-fit: cover;
}

.swiper {
  margin-left: auto;
  margin-right: 0;
}
@media (max-width: 720px) {
  .swiper {
    margin-left: auto;
    margin-right: auto;
  }
}
/* .slide-img {
  width: 100%;
  height: auto;
} */
@media (max-width: 530px) {
  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }
}
/* .swiper-button-prev::after,
.swiper-button-next::after {

}
.swiper-button-prev::after {

}
.swiper-button-next::after {

} */
</style>

