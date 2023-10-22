<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    :navigation="false"
    :scrollbar="{ draggable: true }"
    :autoplay="{ delay: 2500 }"
    class="hero-section"
  >
    <swiper-slide class="hero-items">
      <div
        class="single-hero-items set-bg"
        style="background-image: url('img/hero-1.jpg')"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <span>Bag,kids</span>
              <h1>Black friday</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
              </p>
              <a href="#" class="primary-btn">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="hero-items">
      <div
        class="single-hero-items set-bg"
        style="background-image: url('img/hero-2.jpg')"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <span>Bag,kids</span>
              <h1>Black friday</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
              </p>
              <a href="#" class="primary-btn">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="hero-items">
      <div
        class="single-hero-items set-bg"
        style="background-image: url('img/hero-3.jpg')"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <span>Bag,kids</span>
              <h1>Black friday</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
              </p>
              <a href="#" class="primary-btn">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
// import Swiper core and required modules
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
import "swiper/css/scrollbar";

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
    };
  },
};
</script>
