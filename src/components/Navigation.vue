<template>
  <div class="container">
    <b-navbar toggleable="lg" type="light" >
      <b-navbar-brand href="#">Food Order</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link exact :to="{ name: 'Home' }" class="nav-link"
            >Home</router-link
          >
          <router-link class="nav-link" :to="{ name: 'Foods' }"
            >Foods</router-link
          >
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <router-link :to="{ name: 'Cart' }" class="nav-link">
            Cart
            <b-icon-bag></b-icon-bag>
            <span class="badge badge-success ml-2">{{
              updateCart ? updateCart.length : order_quantity.length
            }}</span>
          </router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      order_quantity: []
    };
  },
  props: ["updateCart"],
  methods: {
    getTotal(data) {
      this.order_quantity = data;
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/carts")
      .then(response => {
        // handle success
        this.getTotal(response.data);
      })
      .catch(function(error) {
        // handle error
        console.log("error", error);
      });
  }
};
</script>

<style></style>
