<script setup>
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const modules = [Navigation, Pagination, Scrollbar, A11y, Autoplay];
</script>

<template>
  <div class="partner-logo">
    <swiper
      :modules="modules"
      :slidesPerView="4"
      :spaceBetween="30"
      :centeredSlides="true"
      :autoplay="{
        delay: 2000,
      }"
      :pagination="false"
      :navigation="false"
      class="container"
    >
      <swiper-slide>
        <div class="logo-carousel">
          <div class="logo-item">
            <div class="tablecell-inner">
              <img src="img/logo-carousel/logo-1.png" alt="" />
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="container">
        <div class="logo-carousel">
          <div class="logo-item">
            <div class="tablecell-inner">
              <img src="img/logo-carousel/logo-2.png" alt="" />
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="container">
        <div class="logo-carousel">
          <div class="logo-item">
            <div class="tablecell-inner">
              <img src="img/logo-carousel/logo-3.png" alt="" />
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="container">
        <div class="logo-carousel">
          <div class="logo-item">
            <div class="tablecell-inner">
              <img src="img/logo-carousel/logo-4.png" alt="" />
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="container">
        <div class="logo-carousel">
          <div class="logo-item">
            <div class="tablecell-inner">
              <img src="img/logo-carousel/logo-5.png" alt="" />
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
