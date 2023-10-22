<template>
  <swiper
    :modules="modules"
    :slides-per-view="3"
    :spaceBetween="30"
    :navigation="false"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    class="women-banner spad"
  >
    <swiper-slide class="container-fluid">
      <div class="row">
        <div class="col-lg-12 mt-5">
          <div class="product-slider">
            <div class="product-item">
              <div class="pi-pic">
                <img src="img/mickey1.jpg" alt="" />
                <ul>
                  <li class="w-icon active">
                    <a href="#"><i class="icon_bag_alt"></i></a>
                  </li>
                  <li class="quick-view">
                    <a href="product.html">+ Quick View</a>
                  </li>
                </ul>
              </div>
              <div class="pi-text">
                <div class="catagory-name">Coat</div>
                <a href="#">
                  <h5>Mickey Baggy</h5>
                </a>
                <div class="product-price">
                  $14.00
                  <span>$35.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="container-fluid">
      <div class="row">
        <div class="col-lg-12 mt-5">
          <div class="product-slider">
            <div class="product-item">
              <div class="pi-pic">
                <img src="img/products/women-2.jpg" alt="" />
                <ul>
                  <li class="w-icon active">
                    <a href="#"><i class="icon_bag_alt"></i></a>
                  </li>
                  <li class="quick-view"><a href="#">+ Quick View</a></li>
                </ul>
              </div>
              <div class="pi-text">
                <div class="catagory-name">Shoes</div>
                <a href="#">
                  <h5>Guangzhou sweater</h5>
                </a>
                <div class="product-price">$13.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="container-fluid">
      <div class="row">
        <div class="col-lg-12 mt-5">
          <div class="product-slider">
            <div class="product-item">
              <div class="pi-pic">
                <img src="img/products/women-3.jpg" alt="" />
                <ul>
                  <li class="w-icon active">
                    <a href="#"><i class="icon_bag_alt"></i></a>
                  </li>
                  <li class="quick-view"><a href="#">+ Quick View</a></li>
                </ul>
              </div>
              <div class="pi-text">
                <div class="catagory-name">Towel</div>
                <a href="#">
                  <h5>Pure Pineapple</h5>
                </a>
                <div class="product-price">$34.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="container-fluid">
      <div class="row">
        <div class="col-lg-12 mt-5">
          <div class="product-slider">
            <div class="product-item">
              <div class="pi-pic">
                <img src="img/products/women-4.jpg" alt="" />
                <ul>
                  <li class="w-icon active">
                    <a href="#"><i class="icon_bag_alt"></i></a>
                  </li>
                  <li class="quick-view"><a href="#">+ Quick View</a></li>
                  <li class="w-icon">
                    <a href="#"><i class="fa fa-random"></i></a>
                  </li>
                </ul>
              </div>
              <div class="pi-text">
                <div class="catagory-name">Towel</div>
                <a href="#">
                  <h5>Converse Shoes</h5>
                </a>
                <div class="product-price">$34.00</div>
              </div>
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
