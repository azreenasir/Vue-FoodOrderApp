<template>
  <div class="container">
    <Hero/>
    <div class="row mt-5">
      <div class="col">
        <h2>Best <strong>Foods</strong></h2>
      </div>
      <div class="col">
        <router-link to="/foods" class="btn btn-success float-right mr-4">
          <b-icon-eye></b-icon-eye>
          View All
        </router-link>
      </div>
    </div>

    <div class="row mb-4">
      <div class="col-md-4 mt-4" v-for="product in products" :key="product.id">
        <CardProduct :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Hero from '../components/Hero.vue'
import CardProduct from '../components/CardProduct.vue'

export default {
  components: {
    Hero,
    CardProduct
  },
  data() {
    return {
      products: [],
    }
  },
  methods: {
    setProduct(data){
      this.products = data
    }
  },
  mounted() {
    axios
    .get("http://localhost:3000/best-products")
      .then((response) => {
        // handle success
        this.setProduct(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log("error",error);
      })
  },
}
</script>
