<script setup>
import { onMounted } from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";

onMounted(() => {
  const year = new Date().getFullYear();
  document.getElementById("year_now").innerHTML = year;
});

library.add(faFacebook, faInstagram, faTwitter, faPinterest);
</script>

<template>
  <!-- Footer Section Begin -->
  <footer class="footer-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <div class="footer-left">
            <div class="footer-logo">
              <a href="#"
                ><img src="img/logo_website_shayna_white.png" alt=""
              /></a>
            </div>
            <ul>
              <li>Address: Keroncong, Tangerang</li>
              <li>Phone: +628 3865836388</li>
              <li>Email: toko.online@gmail.com</li>
            </ul>
            <div class="footer-social">
              <a href="#"><font-awesome-icon :icon="['fab', 'facebook']" /></a>
              <a href="#"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
              <a href="#"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
              <a href="#"><font-awesome-icon :icon="['fab', 'pinterest']" /></a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 offset-lg-1">
          <div class="footer-widget">
            <h5>Information</h5>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Checkout</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Serivius</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="footer-widget">
            <h5>My Account</h5>
            <ul>
              <li><a href="#">My Account</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Shopping Cart</a></li>
              <li><a href="#">Shop</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright-reserved">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="copyright-text">
              Copyright &copy; 2023 - <span id="year_now"></span> All rights
              reserved | Shayna
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- Footer Section End -->
</template>
