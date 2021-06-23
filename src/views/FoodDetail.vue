<template>
  <div class="foodDetails">
    <Navigation/>
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link :to="{ name: 'Foods' }" class="text-dark"
                  >Foods</router-link
                >
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Food Order
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <img
            :src="'../images/' + product.image"
            class="img-fluid shadow mt-3"
          />
        </div>
        <div class="col-md-6">
          <h2>
            <strong>{{ product.name }}</strong>
          </h2>
          <hr />
          <h4>
            Price: <strong> RM{{ product.price }}</strong>
          </h4>
          <form class="mt-4" v-on:submit.prevent>
            <div class="form-group">
              <label for="order_quantity">Order Quantity</label>
              <input
                v-model="order.order_quantity"
                type="number"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="description">Description</label>
              <textarea
                v-model="order.description"
                id="description"
                rows="5"
                class="form-control"
                placeholder="Description e.g : Spicy"
              />
            </div>
            <button @click="getOrder" type="submit" class="btn btn-success">
              <b-icon-cart></b-icon-cart>
              Order
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Navigation from '../components/Navigation.vue'
export default {
  components: {
    Navigation
  },
  data() {
    return {
      product: {},
      order: {}
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/products/" + this.$route.params.id)
      .then(response => {
        this.getProduct(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    getProduct(data) {
      this.product = data;
    },
    getOrder() {
      if (this.order.order_quantity) {
        this.order.products = this.product;
        axios
          .post("http://localhost:3000/carts", this.order)
          .then(() => {
            this.$router.push({ name: "Cart" });
            this.$toast.success("Add to cart.", {
              type: "success",
              position: "top-right",
              duration: 3000,
              dismissible: true
            });
          })
          .catch(err => {
            console.log("error", err);
          });
      } else {
        this.$toast.error("State your order quantity", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true
        });
      }
    }
  }
};
</script>

<style></style>
