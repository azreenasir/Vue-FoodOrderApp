<template>
  <div class="foods">
    <Navigation/>
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h2>Order <Strong>Food</Strong></h2>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col">
          <div class="input-group mb-3">
            <input
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Search your favourite food"
              aria-label="search"
              @keyup="searchFood()"
            />
            <div class="input-group-prepend">
              <span class="input-group-text"
                ><b-icon-search></b-icon-search
              ></span>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-md-4 mt-4"
          v-for="product in products"
          :key="product.id"
        >
          <CardProduct :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardProduct from "../components/CardProduct.vue";
import Navigation from "../components/Navigation.vue";
import axios from "axios";
export default {
  data() {
    return {
      products: [],
      search: ""
    };
  },
  components: {
    CardProduct,
    Navigation
  },
  methods: {
    getProduct(data) {
      this.products = data;
    },
    searchFood() {
      axios
        .get("http://localhost:3000/products?q=" + this.search)
        .then(response => {
          this.getProduct(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/products")
      .then(response => {
        this.getProduct(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style></style>
