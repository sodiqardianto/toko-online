<script setup>
import { ref } from "vue";
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import RelatedProduct from "../components/RelatedProduct.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { Scrollbar } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";

const modules = [Scrollbar];

library.add(faHouse, faChevronRight);

const gambar_default = ref("img/mickey1.jpg");
const data = [
  "img/mickey1.jpg",
  "img/mickey2.jpg",
  "img/mickey3.jpg",
  "img/mickey4.jpg",
];

const gantiGambar = (url) => {
  gambar_default.value = url;
};
</script>

<template>
  <Header />
  <!-- Breadcrumb Section Begin -->
  <div class="breacrumb-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="breadcrumb-text product-more">
            <router-link to="/"
              ><font-awesome-icon :icon="['fas', 'house']" /> Home
            </router-link>
            <font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-5" />
            <span>Detail</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Breadcrumb Section Begin -->

  <!-- Product Shop Section Begin -->
  <section class="product-shop spad page-details">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-6">
              <div class="product-pic-zoom">
                <img class="product-big-img" :src="gambar_default" alt="" />
              </div>
              <div class="product-thumbs">
                <swiper
                  :modules="modules"
                  :slides-per-view="3"
                  :space-between="20"
                  class="product-thumbs-track ps-slider"
                >
                  <swiper-slide
                    class="pt"
                    @click="gantiGambar(data[0])"
                    :class="data[0] == gambar_default ? 'active' : ''"
                  >
                    <img src="img/mickey1.jpg" alt="" />
                  </swiper-slide>

                  <swiper-slide
                    class="pt"
                    @click="gantiGambar(data[1])"
                    :class="data[1] == gambar_default ? 'active' : ''"
                  >
                    <img src="img/mickey2.jpg" alt="" />
                  </swiper-slide>

                  <swiper-slide
                    class="pt"
                    @click="gantiGambar(data[2])"
                    :class="data[2] == gambar_default ? 'active' : ''"
                  >
                    <img src="img/mickey3.jpg" alt="" />
                  </swiper-slide>

                  <swiper-slide
                    class="pt"
                    @click="gantiGambar(data[3])"
                    :class="data[3] == gambar_default ? 'active' : ''"
                  >
                    <img src="img/mickey4.jpg" alt="" />
                  </swiper-slide>
                </swiper>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="product-details">
                <div class="pd-title">
                  <span>oranges</span>
                  <h3>Pure Pineapple</h3>
                </div>
                <div class="pd-desc">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis, error officia. Rem aperiam laborum voluptatum vel,
                    pariatur modi hic provident eum iure natus quos non a sequi,
                    id accusantium! Autem.
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quam possimus quisquam animi, commodi, nihil voluptate
                    nostrum neque architecto illo officiis doloremque et
                    corrupti cupiditate voluptatibus error illum. Commodi
                    expedita animi nulla aspernatur. Id asperiores blanditiis,
                    omnis repudiandae iste inventore cum, quam sint molestiae
                    accusamus voluptates ex tempora illum sit perspiciatis.
                    Nostrum dolor tenetur amet, illo natus magni veniam quia sit
                    nihil dolores. Commodi ratione distinctio harum voluptatum
                    velit facilis voluptas animi non laudantium, id dolorem
                    atque perferendis enim ducimus? A exercitationem recusandae
                    aliquam quod. Itaque inventore obcaecati, unde quam impedit
                    praesentium veritatis quis beatae ea atque perferendis
                    voluptates velit architecto?
                  </p>
                  <h4>$495.00</h4>
                </div>
                <div class="quantity">
                  <a href="shopping-cart.html" class="primary-btn pd-cart"
                    >Add To Cart</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Product Shop Section End -->

  <RelatedProduct />
  <Footer />
</template>
